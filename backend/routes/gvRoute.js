var gvController = require('../controllers/gvController');
var authenticationController = require('../controllers/authenticationController');

module.exports = function(app){

	app.route('/_api/v1/giangvien')
		.get(gvController.getList)
		.post(authenticationController.loginRequired, gvController.add);

	app.route('/_api/v1/giangvien/:id')
		.get(gvController.getDetail)
		.put(authenticationController.loginRequired, gvController.update)
		.delete(authenticationController.loginRequired, gvController.delete);
}