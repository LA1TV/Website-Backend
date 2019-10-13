const { getSpecifiedKey } = require('../database/api-key/get')


// > TODO: Implement checking from database for valid API keys
// > TODO: Add header to incoming request that filters for adding and / or removing
// > TODO: Send a more suitable response

const requireAPI = (req, res, next) => {
    if (!req.get("x-api-key")) {
        console.log("No X-API-KEY sent");
        res.status(401).send("Invalid or No API Key provided");

        return;
    }

    getSpecifiedKey(req.get("x-api-key")).then((result) => {
            if (JSON.parse(result).enabled === 1) {
                next();
            } else {
                res.status(401).send("Invalid or No API Key provided")
                return
            }
        })
        .catch(err => {
            res.status(500).send("Error retrieving API-Key information from database")
        })
}

module.exports = requireAPI