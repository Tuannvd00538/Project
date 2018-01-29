var recycleBin = require('../controllers/recycleBin');
var authenticationController = require('../controllers/authenticationController');

module.exports = function(app){

	app.route('/_api/v1/recyclebin/course')
		.get(recycleBin.getListCourse)
	app.route('/_api/v1/recyclebin/lecturers')
		.get(recycleBin.getListLecturers)
	app.route('/_api/v1/recyclebin/member')
		.get(recycleBin.getListMember)

	app.route('/_api/v1/recyclebin/course/:id')
		.put(authenticationController.loginRequired, recycleBin.updateCourse)
		.delete(authenticationController.loginRequired, recycleBin.deleteCourse);
	app.route('/_api/v1/recyclebin/lecturers/:id')
		.put(authenticationController.loginRequired, recycleBin.updateLecturers)
		.delete(authenticationController.loginRequired, recycleBin.deleteLecturers);
	app.route('/_api/v1/recyclebin/member/:id')
		.put(authenticationController.loginRequired, recycleBin.updateMember)
		.delete(authenticationController.loginRequired, recycleBin.deleteMember);
}