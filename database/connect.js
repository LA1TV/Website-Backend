const mysql = require('mysql2');
const dotenv = require('dotenv')
dotenv.config()

// > TODO: Test the connection
// > TODO: Create database creation scripts
// > TODO: Create seeders

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;