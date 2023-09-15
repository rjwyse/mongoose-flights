const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  seat: {
    type: String,
    required: true,
    match: /[A-F][1-9]\d?/, // Regex pattern for seat 'A1' through 'F99'
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight', // Reference to the Flight model
    required: true,
  },
});


module.exports = mongoose.model('Ticket', ticketSchema);