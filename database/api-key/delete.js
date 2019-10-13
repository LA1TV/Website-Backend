const mysql = require('../connect')

const deleteKey = (api) => {
    return new Promise((resolve, reject) => {
        mysql.promise().execute('DELETE FROM `api_keys` WHERE api_key = ?;', [api])
            .then(([fields, rows]) => {
                resolve("success")
            })
            .catch(err => {
                reject(err)
            })
    })
}

module.exports = {
    deleteKey
}