const mysql = require('mysql2');
const { DATABASE } = require('../config/config.json')

// > TODO: Test the connection
// > TODO: Create database creation scripts
// > TODO: Create seeders

const pool = mysql.createPool({
    host: DATABASE.HOST | '127.0.0.1',
    user: DATABASE.USERNAME,
    password: DATABASE.PASSWORD,
    database: DATABASE.DATABASE,
    port: DATABASE.PORT | 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;