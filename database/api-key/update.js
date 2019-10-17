const mysql = require('../connect')

const updateKey = (api, { enabled, view_vod_uri, view_stream_uri, use_webhook }) => {
    return new Promise((resolve, reject) => {
        let enabledSQL = enabled ? ('`enabled` = ' + enabled) : ('')
        let view_vod_uri_SQL = view_vod_uri ? ('`view_vod_uri` = ' + view_vod_uri) : ('')
        let view_stream_uri_SQL = view_stream_uri ? ('`view_stream_uri` = ' + view_stream_uri) : ('')
        let use_webhook_SQL = use_webhook ? ('`use_webhook` = ' + use_webhook) : ('')

        mysql.promise().execute('UPDATE api_keys SET ' + enabledSQL +
                ' ' + view_vod_uri_SQL +
                ' ' + view_stream_uri_SQL +
                ' ' + use_webhook_SQL +
                ' WHERE `api_key` = ?;', [api]).then(([fields, rows]) => {
                resolve("success")
            })
            .catch(err => {
                reject(err)
            })
    })
}

// > Updates the timestamp for the API key
// > Is mainly used in the middleware RequireApi.js
const updateTimeStamp = (api) => {
    return new Promise((resolve, reject) => {
        mysql.promise().execute('UPDATE api_keys SET last_request_at = CURRENT_TIMESTAMP WHERE `api_key` = ?;', [api])
            .then(([fields, rows]) => {
                resolve("success")
            })
            .catch(err => {
                reject(err)
            })
    })
}

module.exports = {
    updateKey,
    updateTimeStamp
}