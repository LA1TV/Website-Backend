const mysql = require('mysql2');

// > TODO: Test the connection
// > TODO: Create database creation scripts
// > TODO: Create seeders

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    database: process.env.DATABASE_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;