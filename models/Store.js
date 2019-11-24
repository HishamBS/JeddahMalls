const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    store_name: {
        required: true,
        type: String
    },
    store_desc: {
        required: true,
        type: String
    },
    store_number: {
        required: true,
        type: String
    },
    store_image: {
        required: true,
        type: String
    },
    store_website: {
        required: true,
        type: String
    },
    store_floor: {
        required: true,
        type: String
    },
});


const Store = mongoose.model('Store', storeSchema);
module.exports = Store