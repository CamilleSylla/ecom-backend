const mongoose = require('mongoose');

const ProSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    name: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    duration: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    type: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    start: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    goal: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    image: {
        type: String,
        require: true
    },
    finish:{
        type: String,
        required: true,
    },
    problem:{
        type: String,
        required: true,
    },
    link:{
        type: String,
    },
    git:{
        type: String,
        required: true,
    },
    tech:{
        type: Array,
        required: true,
        "default": []
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Pro', ProSchema)