var Member = require('../models/schemaMember');
var Admin = require('../models/schemaAccount');
var Credential = require('../models/schemaCredential');
var accountController = require('../controllers/accountController');
var jwt = require('jsonwebtoken');
require('mongoose-pagination');
var crypto = require('crypto');

exports.checkAdmin = function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	Admin.findOne({username: username, 'status': 1}, function (err, result) {
		if (err) {
			console.log(err);
			res.send('Có thể do bạn hoặc do mình ngu nên lỗi rồi!');
			return;
		}
		if (result) {
			var digestedPassword = accountController.sha512(password, result.salt);
			if(digestedPassword === result.password){
				res.json({token: jwt.sign({ username: result.username, password: result.password, _id: result._id }, 'RESTFULAPIs', { expiresIn: 1440 })});
			}else{
				res.send('Tên đăng nhập hoặc mật khẩu không chính xác!');
				return;	
			}
		} else {
			res.send('Tài khoản không tồn tại!');
		}
	});
}

exports.loginRequired = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Token hết hạn hoặc không tồn tại!' });
  }
};

exports.getAdmin = function(req, res, next) {
 Admin.find(req.params.id, function(err, result) {
     if (err)
       res.status(400);
     res.json(result);
 });
};


exports.checkLogin = function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	Member.findOne({username: username, 'status': 1}, function (err, result) {
		if (err) {
			console.log(err);
			res.send('Có thể do bạn hoặc do mình ngu nên lỗi rồi!');
			return;
		}
		if (result) {
			var digestedPassword = accountController.sha512(password, result.salt);
			if(digestedPassword === result.password){
				var credential = new Credential({
					tokenKey: crypto.randomBytes(20).toString('hex'),
					ownerId: result._id
				});
				credential.save(function(err){
					if(err){
						res.send(err);
						return;
					}
					res.send(credential);
					return;
				});
				return;
			}else{
				res.send('Mật khẩu không khớp!');
				return;	
			}
		} else {
			res.send('Tài khoản không tồn tại!');
		}
	});
}

exports.delete = function(req, res){
	Member.findById(req.params.id,function(err, result){
		result.status = 0;
		Member.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    res.json(result);
		});
	});	
}