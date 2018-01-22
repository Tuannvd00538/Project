var Account = require('../models/schemaAccount');
var Member = require('../models/schemaMember');
require('mongoose-pagination');
var crypto = require('crypto');

exports.getDetail = function(req, res){	
	Account.findOne({ _id: req.params.id, 'status': 1 },function(err, result){
		res.send(result);
	});
}

exports.getDetailMember = function(req, res){	
	Member.findOne({ _id: req.params.id, 'status': 1 },function(err, result){
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

exports.addMember = function(req, res){
	var obj = new Member(req.body);
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

exports.updateMember = function(req, res){
	Member.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {
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

exports.deleteMember = function(req, res){
	Member.findById(req.params.id,function(err, result){
		result.status = 0;
		Account.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    res.json(result);
		});
	});	
}