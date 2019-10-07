const mysql = require('../database/connect')

const requireAPI = (req, res, next) => {
    if (!req.get("x-api-key")) {
        console.log("No X-API-KEY sent");
        res.send("Invalid or No API Key provided");

        return;
    }

    next();
}

module.exports = requireAPI