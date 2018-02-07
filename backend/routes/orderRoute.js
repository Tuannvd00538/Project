var orderController = require('../controllers/orderController');

module.exports = function(app){
	app.route('/_api/v1/order')
		.post(orderController.saveCart)
	app.route('/_api/v1/order/:id')
		.get(orderController.getOrder)
	app.route('/admin/order')
		.get(orderController.getOrderAdmin)
	app.route('/admin/order/history')
		.get(orderController.getOrderHistoryAdmin)
	app.route('/admin/order/query')
		.get(orderController.getOrderQueryAdmin)
	app.route('/_api/v1/order/paid/:id')
		.get(orderController.getPaid)
	app.route('/_api/v1/order/unpaid/:id')
		.get(orderController.getUnpaid)
	app.route('/_api/v1/order/history/:id')
		.get(orderController.getHistory)
	app.route('/_api/v1/order/history/check/:id')
		.get(orderController.checkHistory)
}