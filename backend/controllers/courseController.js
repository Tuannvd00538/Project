var Product = require('../models/schemaCourse');
require('mongoose-pagination');

exports.getList = function(req, res){
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);
	Product.find({ 'TrangThai' : 1})
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'data': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}

exports.getHot = function(req, res){
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);
	Product.find({ $and: [ { Sale: { $gt: 0 } }, { TrangThai: 1 } ] }).sort({Sale: -1})
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'data': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}

exports.getNew = function(req, res){
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);
	Product.find({TrangThai: 1}).sort({NgayTao: -1})
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'data': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}

exports.getQuery = function (req, res) {
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);
	var key = req.query.q;
	Product.find({ $or: [ { MaKhoaHoc: key }, { ChuDe: key }, { TuKhoa: key }] }).sort({NgayTao: -1})
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'data': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}
exports.getChuDe = function (req, res) {
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);
	var chude = req.query.chude;
	Product.find({ $and: [ { ChuDe: chude }, { TrangThai: 1 } ] }).sort({NgayTao: -1})
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'data': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}

exports.getDetail = function(req, res){	
	Product.findOne({ _id: req.params.id, 'TrangThai': 1 },function(err, result){
		res.send(result);
	});
}

exports.add = function(req, res){
	var product = new Product(req.body);
	product.save(function(err){
		res.send(product);
	});
}

exports.update = function(req, res){
	Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {
	    res.json(result);
	});
}

exports.delete = function(req, res){
	Product.findById(req.params.id,function(err, result){
		result.TrangThai = 0;
		Product.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    res.json(result);
		});
	});	
}