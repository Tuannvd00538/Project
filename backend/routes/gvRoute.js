var gvController = require('../controllers/gvController');

module.exports = function(app){

	app.route('/_api/v1/gv')
		.get(gvController.getList)
		.post(gvController.add);

	app.route('/_api/v1/gv/:id')
		.get(gvController.getDetail)
		.put(gvController.update)
		.delete(gvController.delete);
}