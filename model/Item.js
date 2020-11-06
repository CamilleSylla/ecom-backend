const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    category: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    gender: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    sizes: {
        type: [{
            s: {
                type: Number,
                min:0,
            },
            m: {
                type: Number,
                min:0,
            },
            l: {
                type: Number,
                min:0,
            },
            xl: {
                type: Number,
                min:0,
            }
        }]
    },
    price: {
        type: Number,
        min:1,
    },

});

module.exports = mongoose.model('Item', itemSchema)