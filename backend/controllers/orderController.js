var mongoose = require('mongoose');
var Product = require('../models/schemaCourse');
var Order = require('../models/schemaOrder');
var OrderDetail = require('../models/schemaOrderDetail');
var Transaction = require('mongoose-transaction')(mongoose);
require('mongoose-pagination');
exports.saveCart = function(req, res){
	var listOrderCourses = JSON.parse(req.body.courses);
	var customerId = listOrderCourses[0].customerId;
	var ids = [];
	var mapProduct = {};
	for (var i = 0; i < listOrderCourses.length; i++) {
		mapProduct[listOrderCourses[i].id] = 1;
		var objectId = mongoose.Types.ObjectId(listOrderCourses[i].KhoaHocID);
		ids.push(objectId);
	}

	// Tìm các sản phẩm nằm trong danh sách id truyền lên.
	Product.find({
	    '_id': { $in: ids}
	}, function(err, courseResult){

		var orderDetailArray = [];
		var totalPrice = 0;

		// Tạo đối tượng order.
		var order = new Order({
			_id: mongoose.Types.ObjectId(),
			customerId: customerId,
			totalPrice: 0
		});

		// Tạo mảng order detail.
	    for (var i = 0; i < courseResult.length; i++) {
	     	var orderDetail = new OrderDetail({
	     		orderID: order._id,
	     		courseID: courseResult[i]._id,
	     		customerId: order.customerId,
	     		TieuDe: courseResult[i].TieuDe,
	     		GiangVienID: courseResult[i].GiangVienID,
	     		GiaKhoaHoc: Math.round((courseResult[i].GiaKhoaHoc / 100) * (100 - courseResult[i].Sale)),
	     		Thumbnail: courseResult[i].Thumbnail
	     	});
	     	// Thêm từng đối tượng order detail vào mảng.
	     	orderDetailArray.push(orderDetail);
	     	// Tính toán tổng giá đơn hàng.
	     	totalPrice += orderDetail.GiaKhoaHoc * 1;
	     	// vì khóa học chỉ có 1 nên số lượng là 1
	    }
	    // Set tổng giá cho order.
	    order.totalPrice = totalPrice;
	    
	    // Tiến hành lưu vào database với transaction, đảm bảo tất cả đều thành công.
	    var transaction = new Transaction();
	    // Lưu order
	    transaction.insert('order', order);
	    // Lưu danh sách order detail.
	    orderDetailArray.forEach(function(orderDetail){
	    	transaction.insert('orderDetail', orderDetail);
	    });
	    // Kết thúc transaction.
	    transaction.run(function(err, docs){
		    res.send(docs);
		});    
	});
}
exports.getOrder = function(req, res){
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);
	OrderDetail.find({ customerId: req.params.id })
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'data': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}
exports.getPaid = function(req, res){
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);
	OrderDetail.find({ $and: [ { customerId: req.params.id }, { status: 2 } ] })
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'data': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}
exports.getUnpaid = function(req, res){
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);
	OrderDetail.find({ $and: [ { customerId: req.params.id }, { status: 1 } ] })
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'data': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}
exports.getHistory = function(req, res){
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);
	Order.find({ customerId: req.params.id }).sort({createdAt: -1})
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'data': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}
exports.checkHistory = function(req, res){
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);
	OrderDetail.find({ orderID: req.params.id })
	.paginate(page, limit, function(err, result, total) {
    	var responseData = {
    		'data': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	res.send(responseData);
  	});
}