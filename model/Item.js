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
        max: 255
    },
    brand: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    s: {
            type: Number,
            min: 0,
        max: 10000
    },
    m: {
            type: Number,
            min: 0,
        max: 10000
    },
    l: {
            type: Number,
            min: 0,
        max: 10000
    },
    xl: {
            type: Number,
            min: 0,
        max: 10000
    },
    unique: {
        type: Number,
        min: 0,
    max: 10000
},
    price: {
        type: Number,
        min:1,
    },
    image: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true,
        min: 6,
        max: 10000
    },

});

module.exports = mongoose.model('Item', itemSchema)