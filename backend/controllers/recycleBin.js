var giangVien = require('../models/schemaGV');
var Member = require('../models/schemaMember');
var Product = require('../models/schemaCourse');
require('mongoose-pagination');

exports.getListCourse = function(req, res){
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);

	Product.find({ 'TrangThai' : 0})
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'data': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}
exports.getListLecturers = function(req, res){
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);

	giangVien.find({ 'TrangThai' : 0})
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'data': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}
exports.getListMember = function(req, res){
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);

	giangVien.find({ 'status' : 0})
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'data': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}

exports.updateCourse = function(req, res){
	Product.findByIdAndUpdate(req.params.id, {$set: {TrangThai: 1}}, {runValidators: true}, function(err, result) {
	    res.status(200).json({ message: 'Khôi phục thành công!'});
	});
}
exports.deleteCourse = function(req, res){
	Product.findByIdAndRemove(req.params.id,function(err, result){
		res.status(200).json({ message: 'Xóa thành công!'});
	});	
}
exports.updateLecturers = function(req, res){
	giangVien.findByIdAndUpdate(req.params.id, {$set: {TrangThai: 1}}, {runValidators: true}, function(err, result) {
	    res.status(200).json({ message: 'Khôi phục thành công!'});
	});
}
exports.deleteLecturers = function(req, res){
	giangVien.findByIdAndRemove(req.params.id,function(err, result){
		res.status(200).json({ message: 'Xóa thành công!'});
	});	
}
exports.updateMember = function(req, res){
	Member.findByIdAndUpdate(req.params.id, {$set: data}, {runValidators: true}, function(err, result) {
	    res.status(200).json({ message: 'Khôi phục thành công!'});
	});
}
exports.deleteMember = function(req, res){
	Member.findByIdAndRemove(req.params.id, function(err, result){
		res.status(200).json({ message: 'Xóa thành công!'});
	});	
}