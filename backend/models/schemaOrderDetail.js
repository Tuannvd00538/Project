var mongoose = require('mongoose');

module.exports = mongoose.model('orderDetail', {
	customerID: {
		type: String,
		require: true
	},
	MaKhoaHoc: {
		type: String,
		require: true
	},
	TenKhoaHoc: {
		type: String,
		require: true
	},
	GiangVien: {
		type: String,
		require: true
	},
	GiaKhoaHoc: {
		type: Number,
		require: true
	},
	status: {
		type: Number,
		detail: 1
	}
});