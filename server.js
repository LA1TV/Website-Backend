const express = require('express')
const app = express();

app.use((req, res, next) => {
    if (!req.get("x-api-key")) {
        console.log("No X-API-Key Set")
        return;
    }

    next();
})

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});