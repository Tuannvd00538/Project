var courseController = require('../controllers/courseController');
var authenticationController = require('../controllers/authenticationController');

module.exports = function(app){

	app.route('/_api/v1/course')
		.get(courseController.getList)
		.post(authenticationController.loginRequired, courseController.add);

	app.route('/_api/v1/course/hot')
		.get(courseController.getHot)

	app.route('/_api/v1/course/new')
		.get(courseController.getNew)

	app.route('/_api/v1/giangvien/course/:id')
		.get(courseController.getKhoaHoc)

	app.route('/_api/v1/course/:id')
		.get(courseController.getDetail)
		.put(authenticationController.loginRequired, courseController.update)
		.delete(authenticationController.loginRequired, courseController.delete);

	app.route('/_api/v1/course/view/:key')
		.get(courseController.getQuery)

	app.route('/_api/v1/course/chude/:key')
		.get(courseController.getChuDe)
}