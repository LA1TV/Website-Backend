const mysql = require('../connect')
const uuid = require('uuid/v4');

const createKey = async() => {
    let id = uuid().toString().replace(/-/g, '')
    let SQL = "INSERT INTO `api-keys` (`ID`, `api-key`) VALUES (NULL, '" + id + "');"
    mysql.promise()
        .query(SQL)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

module.exports = createKey