var mongoose = require('mongoose');

module.exports = mongoose.model('members', {
	username: {
		type: String,
		require: true
	},
	password: {
		type: String,
		require: true
	},
	fullName: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true
	},
	salt: String,
	birthDay: String,
	phone: {
		type: String,
		require: true
	},
	gender: {
		type: String,
		require: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	},
	status: {
		type: Number,
		default: 1
	}
});