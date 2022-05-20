const mongoose = require('mongoose');

const appointmentTemp = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        ref: 'User',
    },
    times: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    treatment: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('myTable2', appointmentTemp);
