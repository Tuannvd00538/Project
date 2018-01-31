var accountController = require('../controllers/accountController');
var authenticationController = require('../controllers/authenticationController');

module.exports = function(app){

	app.route('/_api/v1/account/:id')
		.get(accountController.getDetail)
		.put(accountController.update)
		.delete(accountController.delete);

	app.route('/_api/v1/member')
		.post(accountController.addMember);

	app.route('/_api/v1/member/:id')
		.get(accountController.getDetailMember)
		.put(authenticationController.loginRequired, accountController.updateMember)
		.delete(authenticationController.loginRequired, accountController.deleteMember);

	// Authentication
	app.route('/_api/v1/authentication')
		.post(authenticationController.checkLogin)
		.put(authenticationController.loginRequired, authenticationController.changePsw)
	app.route('/admin')
		.post(authenticationController.checkAdmin)
		.get(authenticationController.loginRequired, authenticationController.getAdmin)
		.put(authenticationController.loginRequired, authenticationController.changePswAdmin);
}