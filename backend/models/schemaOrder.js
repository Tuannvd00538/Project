var mongoose = require('mongoose');

module.exports = mongoose.model('order', {
	customerId: {
		type: String,
		require: true
	},
	orderID: {
		type: String,
		require: true
	},
	totalPrice: {
		type: Number,
		require: true
	},
	paymentMethod: {
		type: String,
		require: true
	},
	paymentID: {
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