const {v4: uuidv4} = require('uuid')
let items = require('../Items')

const getItems = function (req, reply) {
    reply.send(items)
}

const getItem = function (req, reply) {
    const {id} = req.params
    const item = items.find(items => items.id === id)
    reply.send(item) 
}

const addItem = function (req, reply) {
    const {name} = req.body
    const item = {
        id: uuidv4(),
        name
    }
    //to add the item to the state
    items = [...items, item]
    reply.code(201).send(item)
}

const deleteItem = function (req, reply) {
    const {id} = req.params
    items = items.filter(items => items.id !== id)
    reply.send({message: `Item ${id} has been deleted`}) 
}

const updateItem = function (req, reply) {
    const {id} = req.params
    const {name} = req.body

    items = items.map((item) => (
        item.id === id ? {id, name} : item
    )) 

    item = items.find((item) => item.id === id)

    reply.send(item) 
}

module.exports = {
    getItems,
    getItem,
    addItem,
    deleteItem,
    updateItem,
}