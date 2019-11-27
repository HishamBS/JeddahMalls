const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    booking_time: {
      type: Date,
      required: true
    },
    booking_status: {
      type: String,
      enum: ["approved", "denied", "appending"],
      required: true
    },
    user: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      },{
        type: Schema.Types.ObjectId,
        ref: "User"
      },
    ],mall: 
      {
        type: Schema.Types.ObjectId,
        ref: "Mall"
      }
    
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
