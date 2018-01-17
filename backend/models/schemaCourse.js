var mongoose = require('mongoose');

module.exports = mongoose.model('courses', {
	MaKhoaHoc: {
		type: String,
		required: 'Vui Lòng Nhập Mã Khóa Học'
	},
	TieuDe: {
		type: String,
		required: 'Tiêu Đề Không Được Để Trống'
	},
	MoTa: {
		type: String,
		required: 'Mô Tả Không Được Để Trống'
	},
	GiangVien: {
		type: String,
		required: 'Vui Lòng Nhập Tên Giảng Viên'
	},
	ChuDe: {
		type: String,
		required: 'Hãy Nhập Một Chủ Đề'
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
		required: 'Cần Thêm Những Lợi Ích'
		// Bạn sẽ học được gì ? (Ngăn cách bởi dấu phẩy)
	},
	DoiTuong: {
		type: String,
		required: 'Cần Thêm Các Đối Tượng Sẽ Đào Tạo'
		// ĐỐi tượng đào tạo (Ngăn cách bởi dấu phẩy)
	},
	GioiThieu: {
		type: String,
		required: 'Thêm Giới Thiệu Về Khóa Học'
		// Mỗi dòng ngăn cách nhau bởi dấu phảy
	},
	GiaKhoaHoc: {
		type: String,
		required: 'Vui Lòng Nhập Giá Khóa Học'
	},
	Sale: {
		type: Number,
		default: 0
	},
	SoBaiGiang: {
		type: Number,
		required: 'Vui Lòng Nhập Số Bài Giảng'
	},
	SoPhutHoc: {
		type: String,
		required: 'Vui Lòng Nhập Số Phút Học'
	},
	TuKhoa: {
		type: String,
		required: 'Vui Lòng Nhập Từ Khóa'
	},
	Thumbnail: {
		type: String,
		required: 'Vui Lòng Chọn Ảnh Thu Nhỏ Cho Khóa Học'
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