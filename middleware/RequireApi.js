const { getSpecifiedKey } = require('../database/api-key/get')
const { updateTimeStamp } = require('../database/api-key/update')

// > TODO: Implement checking from database for valid API keys
// > TODO: Add header to incoming request that filters for adding and / or removing
// > TODO: Send a more suitable response

const requireAPI = (req, res, next) => {
    if (!req.get("x-api-key")) {
        res.status(401).send("Invalid or No API Key provided");

        return;
    }

    getSpecifiedKey(req.get("x-api-key")).then((result) => {
            if (JSON.parse(result).enabled === 1) {
                updateTimeStamp(req.get("x-api-key")).then(data => {
                    next()
                }).catch(err => {
                    console.log(err)
                    res.status(401).send("Unable to update timestamp of API key provided")
                    return
                })
            } else {
                res.status(401).send("Invalid or No API Key provided")
                return
            }
        })
        .catch(err => {
            res.status(500).send("Error retrieving API-Key information from database")
        })
}

module.exports = requireAPI