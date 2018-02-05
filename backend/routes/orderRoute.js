var orderController = require('../controllers/orderController');

module.exports = function(app){
	app.route('/_api/v1/order')
		.post(orderController.saveCart)
}