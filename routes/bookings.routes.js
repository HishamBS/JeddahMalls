const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const User = require("../models/User")

// get all bookings
router.get("/", async (req, res) => {
  try {
    let allBookings = await Booking.find();
    res.json(allBookings);
  } catch (error) {
    res.json({ msg: error });
  }
});

//get booking by id either user or stylist
router.get("/:id", (req, res) => {
  Booking.find({ 'user': req.params.id })
    .then(booking => {
      res.json(booking);
    })
    .catch(err => {
      res.json({ msg: "booking doesn't exist", err: err });
    });
});


// //stylist edit status
router.put("/:stylist_id", (req, res) => {

  let updatedBooking = req.body

  Booking.findOneAndUpdate({ 'user': req.params.stylist_id }, updatedBooking)
    .then(response => {
      res.json({ msg: "edited booking status successfully", booking: response });
    })
    .catch(err => {
      res.json({ msg: "Booking doesn't exist", err: err });
    });
});

// //delete booking by user or stylist
router.delete("/:id", (req, res) => {
  Booking.findOneAndDelete({ 'user': req.params.id })
    .then(response => {
      res.json({ msg: "deleted booking successfully", booking: response });
    })
    .catch(err => {
      res.json({ msg: "booking doesn't exist", err: err });
    });
});


module.exports = router;
