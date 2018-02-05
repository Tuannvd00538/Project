var giangVien = require('../models/schemaGV');
require('mongoose-pagination');

exports.getList = function(req, res){
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);

	giangVien.find({ 'TrangThai' : 1})
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'data': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}

exports.getDetail = function(req, res){	
	giangVien.findOne({ _id: req.params.id, 'TrangThai': 1 },function(err, result){
		res.send(result);
	});
}

exports.add = function(req, res){
	var giangvien = new giangVien(req.body);
	giangvien.save(function(err){
		res.send(giangvien);
	});
}

exports.update = function(req, res){
	giangVien.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {
	    res.json(result);
	});
}

exports.delete = function(req, res){
	giangVien.findById(req.params.id,function(err, result){
		result.TrangThai = 0;
		giangVien.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    res.json(result);
		});
	});	
}