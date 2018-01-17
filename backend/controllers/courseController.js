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

exports.uploadImg = function(req, res){
	console.log(req.files);
	if (!req.files)
		return res.status(400).send('Không có file nào được upload.');
	let avatar = req.files.avatar;
	avatar.mv('./public/images/' + avatar.name, function(err) {
		if (err)
		  return res.status(500).send(err);
		res.send('http://localhost:3000/images/' + avatar.name);
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