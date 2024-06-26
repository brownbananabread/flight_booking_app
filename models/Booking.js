const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookingSchema = new Schema({
  name:String,
  email:String,
  flightId:String,
  economySeats:String,
  businessSeats:String,
  firstClassSeats:String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Booking', bookingSchema)