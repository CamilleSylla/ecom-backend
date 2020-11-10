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
            type: Array,
            "default" : []
    },
    price: {
        type: Number,
        min:1,
    },
    image: {
        type: String,
        require: true
    }

});

module.exports = mongoose.model('Item', itemSchema)