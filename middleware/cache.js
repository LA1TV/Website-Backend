const mcache = require('memory-cache')
const { CACHING } = require('../config/config.json')

const cache = (duration = CACHING.DURATION) => {
    return (req, res, next) => {
        if (req.type !== 'GET') {
            next()
            return
        }

        let key = '__express__' + req.originalUrl || req.url
        let cachedObject = mcache.get(key)

        if (cachedObject) {
            res.status(200).send(cachedObject)
            return
        } else {
            res.sendResponse = res.send
            res.send = (body) => {
                mcache.put(key, body, duration * 1000);
                res.sendResponse(body)
            }
            next()
        }
    }
}