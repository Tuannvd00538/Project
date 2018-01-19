var gvController = require('../controllers/gvController');

module.exports = function(app){

	app.route('/_api/v1/giangvien')
		.get(gvController.getList)
		.post(gvController.add);

	app.route('/_api/v1/giangvien/:id')
		.get(gvController.getDetail)
		.put(gvController.update)
		.delete(gvController.delete);
}