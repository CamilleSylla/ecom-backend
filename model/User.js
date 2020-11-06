const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

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
    adresse: {
        type: String,
        required: true,
        min: 4,
        max: 650
    },
    city: {
        type: String,
        required: true,
        min: 4,
        max: 650
    },
    gender: {
        type: String,
        required: false,
        min: 2,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('User', userSchema)