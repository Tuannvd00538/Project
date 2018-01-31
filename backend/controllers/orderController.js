var Order = require('../models/schemaOrder');
var OrderDetail = require('../models/schemaOrderDetail');
require('mongoose-pagination');

exports.getOrder = function(req, res){
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);
	Order.find({ 'status' : 1})
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'data': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}

exports.getOneOrder = function(req, res){	
	Order.findOne({ _id: req.params.id, 'status': 1 },function(err, result){
		res.send(result);
	});
}

exports.add = function(req, res){
	var order = new Order(req.body);
	order.save(function(err){
		res.send(order);
	});
}

exports.update = function(req, res){
	Order.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {
	    res.json(result);
	});
}

exports.delete = function(req, res){
	Order.findByIdAndRemove(req.params.id, function(err, result){
		res.status(200).json({ message: 'Xóa thành công!'});
	});	
}