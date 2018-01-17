var mongoose = require('mongoose');

module.exports = mongoose.model('giangvien', {
	MaGiangVien: {
		type: String,
		required: 'Vui Lòng Nhập Mã Giảng Viên'
	},
	TenGiangVien: {
		type: String,
		required: 'Vui Lòng Nhập Ten Giang Vien'
	},
	ChuDeGiangDay: {
		type: String,
		required: 'Vui Lòng Nhập Chủ Đề Giảng Dạy Của Giảng Viên'
	},
	MoTa: {
		type: String,
		required: 'Vui Lòng Nhập Mô Tả'
		// Mỗi dòng ngăn cách nhau bởi dấu phảy
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
		required: 'Vui Lòng Chọn Ảnh Đại Diện Giảng Viên'
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