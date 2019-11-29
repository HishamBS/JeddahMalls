// const express = require("express");
// const router = express.Router();
// const Booking = require("../models/Booking");

// //get all bookings in the website
// router.get("/", async (req, res) => {
//   try {
//     let allBookings = await Booking.find();
//     res.json(allBookings);
//   } catch (error) {
//     res.json({ msg: error });
//   }
// });

// //get the booking for a specifc stylist
// router.get("/stylist/:id", async (req, res) => {
//     try {
//       let stylist_bookings = await Booking.find({user:req.params.id}).populate('user');
//       let resObject = []
//       for(stylist of stylist_bookings)
//       {
//           console.log(stylist.user[1].first_name);
//       }
//     //   res.json([{

//     //   }]);
//     } catch (error) {
//       res.json({ msg: error });
//     }
//   });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const User = require("../models/User");
// get all bookings
router.get("/", async (req, res) => {
  try {
    let allBookings = await Booking.find();
    res.json(allBookings);
  } catch (error) {
    res.json({ msg: error });
  }
});
//get booking by  either user_id or stylist_id
router.get("/:stylist_id", (req, res) => {
  Booking.find({ user: req.params.stylist_id })
    .populate("user")
    .then(booking => {
      res.json(booking);
    })
    .catch(err => {
      res.json({ msg: "booking doesn't exist", err: err });
    });
});
//get specific booking by  book_id
router.get("/book/:book_id", (req, res) => {
  Booking.findById(req.params.book_id)
    .then(booking => {
      res.json(booking);
    })
    .catch(err => {
      res.json({ msg: "booking doesn't exist", err: err });
    });
});
//change status of booking by the booking id
router.put("/book/:id", (req, res) => {
  let updatedBooking = req.body;
  Booking.findByIdAndUpdate(req.params.id, updatedBooking)
    .then(response => {
      res.json({
        msg: "edited booking status successfully",
        booking: response
      });
    })
    .catch(err => {
      res.json({ msg: "Booking doesn't exist", err: err });
    });
});
//create new booking by user
router.post("/newbooking", async (req, res) => {
  try {
    let booking = new Booking(req.body);
    let savedBooking = await booking.save();
    res.json({ msg: "added", booking: savedBooking });
  } catch (error) {
    res.json({ msg: error});
  }
});
// //delete booking by user_id or stylist_id
router.delete("/:id", (req, res) => {
  Booking.findOneAndDelete({ user: req.params.id })
    .then(response => {
      res.json({ msg: "deleted booking successfully", booking: response });
    })
    .catch(err => {
      res.json({ msg: "booking doesn't exist", err: err });
    });
});
module.exports = router;
