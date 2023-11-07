const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    total_current_value : {
        required: true,
        type: Number

    },
    number_appliances_switched_on: {
        required: true,
        type: Number
    },
    timestamp : {
        required: true,
        type: Number

    },
    Datetime : {
        required: true,
        type: Date

    },


})

module.exports = mongoose.model('powervalues', dataSchema)