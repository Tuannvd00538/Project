var courseController = require('../controllers/courseController');

module.exports = function(app){

	app.route('/_api/v1/course')
		.get(courseController.getList)
		.post(courseController.add);

	app.route('/_api/v1/course/hot')
		.get(courseController.getHot)

	app.route('/_api/v1/course/new')
		.get(courseController.getNew)

	app.route('/_api/v1/giangvien/course/:id')
		.get(courseController.getKhoaHoc)

	app.route('/_api/v1/course/:id')
		.get(courseController.getDetail)
		.put(courseController.update)
		.delete(courseController.delete);

	app.route('/_api/v1/course/view/:key')
		.get(courseController.getQuery)
}