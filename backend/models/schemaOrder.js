var mongoose = require('mongoose');

module.exports = mongoose.model('order', {
	customerId: {
		type: mongoose.Schema.Types.ObjectId,,
		require: true
	},
	courseId: {
		type: mongoose.Schema.Types.ObjectId,,
		require: true
	},
	totalPrice: {
		type: Number,
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