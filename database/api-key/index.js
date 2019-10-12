const { getAllKeys, getSpecifiedKey } = require('./get')
const { createKey } = require('./create')
const { updateKey } = require('./update')
const { deleteKey } = require('./delete')

module.exports = {
    getAllKeys,
    getSpecifiedKey,
    createKey,
    updateKey,
    deleteKey
}