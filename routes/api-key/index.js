const express = require('express')
const router = express.Router()

const { createKey, getAllKeys, getSpecifiedKey, updateKey, deleteKey } = require('../../database/api-key')
const cache = require('../../middleware/cache')

// > Return all keys
// > With the option of choosing how many you want and from where
router.get('/', cache(), (req, res) => {
    let parameter = {
        start: req.params.start,
        quantity: req.params.quantity
    }

    getAllKeys(parameter)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "Requesting all keys failed!" })
        })
})

// > Get information about a specified ID
router.get('/:id', (req, res) => {
    getSpecifiedKey(req.params.id)
        .then(data => {
            res.status(200).json(JSON.parse(data))
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: "Requesting specified keys " + req.params.id + " failed!"
            })
        })
})

// > Create a new key
router.post('/', (req, res) => {
    createKey({}).then(returnValues => {
            res.status(200).json({ data: returnValues })
        })
        .catch(err => {
            res.status(500).json({ error: "Creation of new API key failed" })
        })
})

// > Update an API key with new values
// > THIS IS NOT UPDATING THE TIME
router.patch('/:id', (req, res) => {
    let parameters = {
        enabled: req.body.enabled,
        view_vod_uri: req.body.view_vod_uri,
        view_stream_uri: req.body.view_stream_uri,
        use_webhook: req.body.use_webhook
    }

    updateKey(req.params.id, parameters)
        .then(returnValues => {
            res.status(200).json({ data: returnValues })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "Update of API key failed" })
        })
})

// > Delete an API based on the URL
router.delete('/:id', (req, res) => {
    deleteKey(req.params.id)
        .then(returnValues => {
            res.status(200).json({ data: returnValues })
        })
        .catch(err => {
            res.status(500).json({ error: "Deletion of API key failed" })
        })
})

module.exports = router