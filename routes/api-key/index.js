const express = require('express')
const router = express.Router()

const { createKey, getAllKeys, getSpecifiedKey, updateKey, deleteKey } = require('../../database/api-key')

// > Return all keys
// > With the option of choosing how many you want and from where
router.get('/', (req, res) => {
    getAllKeys({})
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

module.exports = router