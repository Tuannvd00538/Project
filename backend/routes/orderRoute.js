var orderController = require('../controllers/orderController');

module.exports = function(app){
	app.route('/_api/v1/order')
		.post(orderController.saveCart)
	app.route('/_api/v1/order/:id')
		.get(orderController.getOrder)
	app.route('/_api/v1/order/customer/:id')
		.get(orderController.getCartOrder)
	app.route('/_api/v1/order/paid/:id')
		.get(orderController.getPaid)
	app.route('/_api/v1/order/unpaid/:id')
		.get(orderController.getUnpaid)
}