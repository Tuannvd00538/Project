var orderController = require('../controllers/orderController');

module.exports = function(app){

	app.route('/_api/v1/order')
		.get(orderController.getOrder)
		.post(orderController.add)

	app.route('/_api/v1/order/:id')
		.get(orderController.getOneOrder)
		.put(orderController.update)
		.delete(orderController.delete);
}