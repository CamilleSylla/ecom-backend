const mongoose = require('mongoose');


const ordersSchema = new mongoose.Schema({

    name: {
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
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Orders', ordersSchema)