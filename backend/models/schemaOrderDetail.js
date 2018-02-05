var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('orderDetail', {
	orderID: Schema.Types.ObjectId,
	courseID: Schema.Types.ObjectId,
	customerId: Schema.Types.ObjectId,
	TieuDe: String,
	GiangVienID: String,
	GiaKhoaHoc: Number,
	Thumbnail: String,
	status: {
		type: Number,
		default: 1
	}
});