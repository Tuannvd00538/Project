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
	fullName: String,
	email: {
		type: String,
		require: true
	},
	salt: String,
	birthDay: String,
	phone: String,
	gender: Number,
	avatar: String,
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