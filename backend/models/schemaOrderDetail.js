var mongoose = require('mongoose');

module.exports = mongoose.model('order_detail', {
	orderId: String,
	courseId: String,
	unitPrice: Number
});