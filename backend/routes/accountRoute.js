var accountController = require('../controllers/accountController');
var authenticationController = require('../controllers/authenticationController');

module.exports = function(app){

	// Account
	app.route('/_api/v1/account')
		.get(accountController.getList)
		.post(accountController.add);

	app.route('/_api/v1/account/:id')
		.get(accountController.getDetail)
		.put(accountController.update)
		.delete(accountController.delete);

	// Authentication
	app.route('/_api/v1/authentication')
		.post(authenticationController.checkLogin)
}