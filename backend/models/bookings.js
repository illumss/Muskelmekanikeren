const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  service: { type: String, required: false },
  date: { type: String, required: false },
  time: { type: String, required: false },
  userInfo: {
    name: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    isMember: { type: Boolean, required: false },
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
