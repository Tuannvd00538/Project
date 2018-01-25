var recycleBin = require('../controllers/recycleBin');

module.exports = function(app){

	app.route('/_api/v1/recyclebin/course')
		.get(recycleBin.getListCourse)
	app.route('/_api/v1/recyclebin/lecturers')
		.get(recycleBin.getListLecturers)
	app.route('/_api/v1/recyclebin/member')
		.get(recycleBin.getListMember)

	app.route('/_api/v1/recyclebin/course/:id')
		.put(recycleBin.updateCourse)
		.delete(recycleBin.deleteCourse);
	app.route('/_api/v1/recyclebin/lecturers/:id')
		.put(recycleBin.updateLecturers)
		.delete(recycleBin.deleteLecturers);
	app.route('/_api/v1/recyclebin/member/:id')
		.put(recycleBin.updateMember)
		.delete(recycleBin.deleteMember);
}