const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.get("/", async (req, res) => {
  try {
    let allBookings = await Booking.find();
    res.json(allBookings);
  } catch (error) {
    res.json({ msg: error });
  }
});

module.exports = router;
