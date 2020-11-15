const mongoose = require('mongoose');


const mailSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    email:{
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    sujet:{
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    content:{
        type: String,
        required: true,
        min: 4,
        max: 3000
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Mail', mailSchema)