const mongoose = require('mongoose');


const ordersSchema = new mongoose.Schema({

    last_name: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    first_name: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    adresse: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    city: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    client_id:{
        type: String,
        required: true,
    },
    articles:{
        type: Array,
        required: true,
        "default": []
    },
    total:{
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Orders', ordersSchema)