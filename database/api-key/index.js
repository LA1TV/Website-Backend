const { getAllKeys, getSpecifiedKey } = require('./get')
const { createKey } = require('./create')
const { updateKey } = require('./update')
const { deleteKey } = require('./delete')

/*
    > This file allows us to import all or just what we need from the SQL Queries for api-keys
    > May add authorisation to this route but I may not
*/

module.exports = {
    getAllKeys,
    getSpecifiedKey,
    createKey,
    updateKey,
    deleteKey
}