const mongoose = require('mongoose');
const destinationSchema = require('./destination');


const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    flightNo: {
        type: Number,
        required: true, 
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date, 
        default: function() {
        return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        },
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'SAN', 'LAX', 'DEN'],
        default: 'DEN',
    },
    destinations: [destinationSchema]
});


module.exports = mongoose.model('Flight', flightSchema);