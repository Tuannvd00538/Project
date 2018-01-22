var mongoose = require('mongoose');

module.exports = mongoose.model('giangvien', {
	MaGiangVien: {
		type: String,
		required: true
	},
	TenGiangVien: {
		type: String,
		required: true
	},
	ChuDeGiangDay: {
		type: String,
		required: true
	},
	MoTa: {
		type: String,
		required: true
	},
	SoHocVien: {
		type: Number,
		default: 0
	},
	SoKhoaHoc: {
		type: Number,
		default: 0
	},
	AnhDaiDien: {
		type: String,
		required: true
	},
	NgayTao: {
		type: Date,
		default: Date.now
	},
	NgayCapNhat: {
		type: Date,
		default: Date.now
	},
	TrangThai: {
		type: Number,
		default: 1
	}
});