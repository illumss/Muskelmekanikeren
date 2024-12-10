const express = require("express");
const router = express.Router();
const Booking = require("../models/bookings");

// POST /api/bookings - Create a new booking (Step 1)
router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const service = body.service;
    console.log("Request body:", body);
    if (!service) {
      return res.status(400).json({ error: "Service is required for Step 1" });
    }

    const newBooking = new Booking({ service }); // Create with service only
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

// GET /api/bookings - Retrieve all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve bookings" });
  }
});

module.exports = router;
