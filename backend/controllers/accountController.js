var Account = require('../models/schemaAccount');
require('mongoose-pagination');
var crypto = require('crypto');

exports.getList = function(req, res){
	// Lấy tham số và parse ra number.	
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);

	Account.find({'status': 1})
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'listStudent': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}

exports.getDetail = function(req, res){	
	Account.findOne({ _id: req.params.id, 'status': 1 },function(err, result){
		res.send(result);
	});
}

exports.add = function(req, res){
	var obj = new Account(req.body);
	var salt = Math.random().toString(36).substring(7);
	obj.salt = salt;
	obj.password = sha512(obj.password, obj.salt);
	obj.save(function(err){
		if(err){
			res.send(err);
			return;
		}
		res.send(obj);
	});
}

var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    return hash.digest('hex');    
};

exports.sha512 = sha512;

exports.update = function(req, res){
	Account.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {
	    res.json(result);
	});
}

exports.delete = function(req, res){
	Account.findById(req.params.id,function(err, result){
		result.status = 0;
		Account.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    res.json(result);
		});
	});	
}