const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  service: { type: String, required: false }, // Make this optional for Step 1
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
