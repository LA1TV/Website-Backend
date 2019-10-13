const mysql = require('../connect')
const uuid = require('uuid/v4');

const createKey = ({ enabled = 1, view_vod_uri = 0, view_stream_uri = 0, use_webhook = 0 }) => {
    return new Promise((resolve, reject) => {
        const id = uuid().toString().replace(/-/g, '')
        mysql.promise().execute('INSERT INTO `api_keys` (`ID`, `api_key`, `enabled`, `view_vod_uri`, `view_stream_uri`, `use_webhook`) VALUES (NULL, ?, ?, ?, ?, ?)', [id, enabled, view_vod_uri, view_stream_uri, use_webhook])
            .then(() => {
                resolve(id)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

module.exports = {
    createKey
}