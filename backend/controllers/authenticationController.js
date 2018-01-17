var Account = require('../models/schemaAccount');
var Credential = require('../models/schemaCredential');
var accountController = require('../controllers/accountController');
require('mongoose-pagination');
var crypto = require('crypto');

exports.checkLogin = function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	Account.findOne({username: username, 'status': 1}, function (err, result) {
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
	Account.findById(req.params.id,function(err, result){
		result.status = 0;
		Account.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    res.json(result);
		});
	});	
}