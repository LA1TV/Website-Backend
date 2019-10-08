const mysql = require("./connect")

// > TODO: Generate database based off of SQL in table.

function generateDatabase() {
    // mysql.query(
    //     "CREATE SCHEMA IF NOT EXISTS ${process.env.DATABASE};" +
    //     "CREATE TABLE `la1tv`.`APIKEys` ( `ID` INT NOT NULL AUTO_INCREMENT , `Key` VARCHAR(32) NOT NULL , PRIMARY KEY (`ID`), UNIQUE (`Key`)) ENGINE = InnoDB;"
    // )

    console.log("In development")
}

module.exports = generateDatabase