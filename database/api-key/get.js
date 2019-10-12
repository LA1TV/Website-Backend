const mysql = require('../connect')

// > Returns a specified key
const getSpecifiedKey = (api) => {
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

// > Returns all API keys
const getAllKeys = ({ start, quantity = 10 }) => {
    let tempSQL = ""
    if (start !== undefined) {
        tempSQL = " ROWNUM <= " + start + " LIMIT " + quantity
    }

    return new Promise((resolve, reject) => {
        mysql.promise().execute('SELECT * FROM `api_keys`' + tempSQL + ';')
            .then(([rows, fields]) => {
                resolve(JSON.stringify(rows[0]))
            })
            .catch(err => {
                reject(err)
            })
    })
}

module.exports = {
    getSpecifiedKey,
    getAllKeys
}