const { getItems, getItem, addItem, deleteItem, updateItem } = require('../controllers/controller_items')

const Item = {            
    type: 'object',
    properties: {
        id: { type: 'string'},
        name: { type: 'string'},
    }
}
// options to get all items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item,
            }
        }
    },
    handler: getItems,
}

// options to get single item
const getItemOpts = {
    schema: {
        response: {
            200: Item,
        }
    },
    handler: getItem,
}

// options to post an item
const postItemOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: {type: 'string'}
            }
        },
        response: {
            201: Item,
        }
    },
    handler: addItem,
}

// options to delete an item
const deleteItemOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: {type: 'string'}
                }
            },
        }
    },
    handler: deleteItem,
}

// options to update an item
const updateItemOpts = {
    schema: {
        response: {
            200: Item,
        }
    },
    handler: updateItem,
}


function itemRoutes(fastify, options, done){

    fastify.get('/items', getItemsOpts)
    
    fastify.get('/item/:id', getItemOpts)

    fastify.post('/item', postItemOpts) 

    fastify.delete('/item/:id', deleteItemOpts)

    fastify.put('/item/:id', updateItemOpts)

    done()
}

module.exports = itemRoutes