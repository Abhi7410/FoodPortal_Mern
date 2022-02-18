const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	user: {
		type: String,
		required: false
	},
	service: {
		type: String,
		required: false
	},
	name: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: false
	},

	age: {
		type: String,
		required: false
	},
	batchName: {
		type: String,
		required: false
	},
	shopName: {
		type: String,
		required: false
	},
	contact: {
		type: String,
		required: false
	},
	shopClosingTime: {
		type: String,
		required: false
	},
	shopOpeningTime: {
		type: String,
		required: false
	},

	password: {
		type: String,
		required: false
	},
	confirmPassword: {
		type: String,
		required: false
	},
	wallet: {
		type: String,
		required: false
	},
	
});

module.exports = User = mongoose.model("Users", UserSchema);
