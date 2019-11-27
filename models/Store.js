const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema(
  {
    store_name: {
      required: true,
      type: String
    },
    store_desc: {
      type: String
    },
    store_number: {
      type: String
    },
    store_image: {
      type: String
    },
    store_website: {
      type: String
    },
    store_floor: {
      type: String
    },
    store_type:{
      type:String
    }

  },
  { timestamps: true }
);

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
