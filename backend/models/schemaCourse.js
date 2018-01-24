var mongoose = require('mongoose');

module.exports = mongoose.model('courses', {
	MaKhoaHoc: {
		type: String,
		required: true
	},
	TieuDe: {
		type: String,
		required: true
	},
	MoTa: {
		type: String,
		required: true
	},
	GiangVien: {
		type: String,
		required: true
	},
	GiangVienID: {
		type: String,
		required: true
	},
	ChuDe: {
		type: String,
		required: true
	},
	DanhGia: {
		type: Number,
		default: 0
	},
	SoHocVien: {
		type: Number,
		default: 0
	},
	LoiIch: { 
		type: String,
		required: true
	},
	DoiTuong: {
		type: String,
		required: true
	},
	GioiThieu: {
		type: String,
		required: true
	},
	GiaKhoaHoc: {
		type: String,
		required: true
	},
	Sale: {
		type: Number,
		default: 0
	},
	SoBaiGiang: {
		type: Number,
		required: true
	},
	SoPhutHoc: {
		type: String,
		required: true
	},
	TuKhoa: {
		type: String,
		required: true
	},
	Thumbnail: {
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