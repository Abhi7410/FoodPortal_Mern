const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FoodSchema = new Schema({
    itemName: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: false
    },
    rating: {
        type: String,
        required: false,
        default:"0"
    },
    type: {
        type: String,
        required: false
    },

    addon: {
        type: [String],
        required: false
    },

    vendorName: {
        type: String,
        required:false
    },

    itemShop: {
        type: String,
        required:false
    },

    tags: {
        type: [String],
        required:false,
    }
 
});

module.exports = FoodItem = mongoose.model("FoodItem", FoodSchema);
