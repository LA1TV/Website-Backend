const mysql = require('../connect')
const uuid = require('uuid/v4');

const createKey = async(req, res) => {
    const id = uuid().toString().replace(/-/g, '')
    mysql.promise().execute('INSERT INTO `api_keys` (`ID`, `api_key`, `enabled`, `view_vod_uri`, `view_stream_uri`, `use_webhook`) VALUES (NULL, ?, ?, ?, ?, ?)', [id, 1, 1, 1, 1])
        .then(() => {
            res.status(201).json({
                data: id
            })
        })
        .catch(() => {
            res.status(409).json({
                error: err
            })
        })
}

module.exports = createKey