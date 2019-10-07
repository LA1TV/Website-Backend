const mysql = require('../database/connect')

// > TODO: Implement checking from database for valid API keys
// > TODO: Add header to incoming request that filters for adding and / or removing
// > TODO: Send a more suitable response

const requireAPI = (req, res, next) => {
    if (!req.get("x-api-key")) {
        console.log("No X-API-KEY sent");
        res.send("Invalid or No API Key provided");

        return;
    }

    next();
}

module.exports = requireAPI