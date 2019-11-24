const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mallSchema = new Schema(
  {
    mall_name: {
      required: true,
      type: String
    },
    mall_image: {
      required: true,
      type: String
    },
    mall_desc: {
      required: true,
      type: String
    },
    mall_contact: {
      required: true,
      type: String
    },
    mall_stores: [
      {
        type: Schema.Types.ObjectId,
        ref: "Store"
      }
    ]
  },
  { timestamps: true }
);

const Mall = mongoose.model("Mall", mallSchema);
module.exports = Mall;
