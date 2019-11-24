const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
    //   events:[{type: Schema.Types.ObjectId , ref:''}]
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
