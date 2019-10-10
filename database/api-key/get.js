const mysql = require('../connect')

const getKey = (api) => {
    return new Promise((resolve, reject) => {
        mysql.promise().execute('SELECT * FROM `api_keys` WHERE `api_key` = ?', [api])
            .then(([rows, fields]) => {
                resolve(JSON.stringify(rows[0]))
            })
            .catch(err => {
                reject(err)
            })
    })
}

module.exports = getKey