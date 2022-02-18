const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
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
        default: "0"
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
        required: false
    },

    itemShop: {
        type: String,
        required: false
    },

    tags: {
        type: [String],
        required: false,
    },

    quantity: {
        type: String,
        required: false,
        
    },
    status: {
        type: String,
        required:false
    },

    totalCost: {
        type: String,
        required:false
    },
    emailBuyer: {
        type: String,
        required: false
    },
    placeTime: {
        type: String,
        required: false
    },
    addon_buyer: {
        type: [String],
        required: false
    }

});

module.exports = OrderItem = mongoose.model("OrderItem", OrderSchema);
