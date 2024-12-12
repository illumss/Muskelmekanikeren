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

    const newBooking = new Booking({ service });
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    console.log("Request body:", body);
    console.log("Request params:", id);
    if (!id) {
      return res
        .status(400)
        .json({ error: "Booking ID is required for Step 2" });
    }

    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    booking.service = body.service;
    booking.date = body.date;
    booking.time = body.time;
    booking.userInfo = body.userInfo;
    booking.id = body.id;
    const savedBooking = await booking.save();
    res.status(200).json(savedBooking);
  } catch (error) {
    console.error("Error updating booking:", error);
    res.status(500).json({ error: "Failed to update booking" });
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
