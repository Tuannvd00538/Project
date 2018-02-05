var mongoose = require('mongoose');

module.exports = mongoose.model('order', {
	customerId: String,
	totalPrice: Number,
	paymentMethod: String,
	paymentID: String,
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