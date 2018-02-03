// All rights reserved by Ngo Van Tuan - T1707A - FPT Aptech
// ---------------------------------------------------------------------------------------------
// jQuery trang chủ
var HOME = 'https://project-tthhn.appspot.com/_api/v1/course';
var GIANGVIEN = 'https://project-tthhn.appspot.com/_api/v1/giangvien';
var GIANGVIENDetail = 'https://project-tthhn.appspot.com/_api/v1/giangvien/course';
var SEARCH = 'https://project-tthhn.appspot.com/_api/v1/course/view';
var CHUDE = 'https://project-tthhn.appspot.com/_api/v1/course/chude';
var FILE_UPLOAD_URL = 'https://project-tthhn.appspot.com/_api/v1/images';
var MEMBER = 'https://project-tthhn.appspot.com/_api/v1/member';
var ORDER = 'https://project-tthhn.appspot.com/_api/v1/order';
$(document).ready(function () {
	search();
	var cart = localStorage.getItem("cart");
	if (cart != null) {
		$('.countCart').text(cart);
	}
	var username = localStorage.getItem('username');
	if (username == null || username == undefined) {
		$('#checkSign').attr('style', 'display:block;');
		$('#checkSignTwo').attr('style', 'display:block;');
		$('#checkLogin').attr('style', 'display:none;');
	}
	if (username != null || username != undefined) {
		$('#checkLogin').attr('style', 'display:block;');
		$('#checkSign').attr('style', 'display:none;');
		$('#checkSignTwo').attr('style', 'display:none;');
	}
	window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
	d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
	_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
	$.src="https://v2.zopim.com/?5SBzz9cH0cfBaktuvUjBsuCBCjT1NrUC";z.t=+new Date;$.
	type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
});
function search() {
    $.ajax({
	    url: HOME + '?page=1&limit=32',
	    type: "GET",
	    success: function (response) {
	    	var appendContent = "";
	     	for (var i = 0; i < response.data.length; i++) {
	     		var id = response.data[i]._id;
		     	var Thumbnail = response.data[i].Thumbnail;
		     	var TieuDe = response.data[i].TieuDe;
		     	var GiangVien = response.data[i].GiangVien;
		     	var GiaKhoaHoc = response.data[i].GiaKhoaHoc;
		     	var Sale = response.data[i].Sale;
		     	var GiangVienID = response.data[i].GiangVienID;
		     	appendContent += generateVideoBlock(id, Thumbnail, TieuDe, GiangVien, GiaKhoaHoc, Sale, GiangVienID);
	     	}
	     	$("#hot").html(appendContent);
	     	$('.loading').fadeOut();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	       console.log(textStatus, errorThrown);
	    }
	});
	$.ajax({
	    url: HOME + '/hot?page=1&limit=32',
	    type: "GET",
	    success: function (response) {
	    	var appendContent = "";
	     	for (var i = 0; i < response.data.length; i++) {
	     		var id = response.data[i]._id;
		     	var Thumbnail = response.data[i].Thumbnail;
		     	var TieuDe = response.data[i].TieuDe;
		     	var GiangVien = response.data[i].GiangVien;
		     	var GiaKhoaHoc = response.data[i].GiaKhoaHoc;
		     	var Sale = response.data[i].Sale;
		     	var GiangVienID = response.data[i].GiangVienID;
		     	appendContent += generateVideoBlock(id, Thumbnail, TieuDe, GiangVien, GiaKhoaHoc, Sale, GiangVienID);
	     	}
	     	$("#sale").html(appendContent);
	     	$('.loading').fadeOut();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	       console.log(textStatus, errorThrown);
	    }
	});
	$.ajax({
	    url: HOME + '/new?page=1&limit=32',
	    type: "GET",
	    success: function (response) {
	    	var appendContent = "";
	     	for (var i = 0; i < response.data.length; i++) {
	     		var id = response.data[i]._id;
		     	var Thumbnail = response.data[i].Thumbnail;
		     	var TieuDe = response.data[i].TieuDe;
		     	var GiangVien = response.data[i].GiangVien;
		     	var GiaKhoaHoc = response.data[i].GiaKhoaHoc;
		     	var Sale = response.data[i].Sale;
		     	var GiangVienID = response.data[i].GiangVienID;
		     	appendContent += generateVideoBlock(id, Thumbnail, TieuDe, GiangVien, GiaKhoaHoc, Sale, GiangVienID);
	     	}
	     	$("#new").html(appendContent);
	     	$('.loading').fadeOut();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	       console.log(textStatus, errorThrown);
	    }
	});
};
function generateVideoBlock(id, Thumbnail, TieuDe, GiangVien, GiaKhoaHoc, Sale, GiangVienID) {
    if (Sale != 0) {
    	var GiaHienTai = ((GiaKhoaHoc / 100) * (100 - Sale));
    	var newOutPut = "";
		newOutPut += '<div class="col-sm-6 col-md-3">';
		    newOutPut += '<div class="thumbnail">';
		        newOutPut += '<img src="' + Thumbnail + '" class="image" alt="' + TieuDe + '">';
		        newOutPut += '<div class="middle">';
		          newOutPut += '<div class="text"><a href="pages/product.html?id=' + id + '&gv=' + GiangVienID + '">Xem Chi Tiết</a></div>';
		        newOutPut += '</div>';
		        newOutPut += '<div class="caption">';
		          newOutPut += '<div class="captionText">';
		            newOutPut += '<a href="pages/product.html?id=' + id + '&gv=' + GiangVienID + '"><strong>' + TieuDe + '</strong></a>';
		          newOutPut += '</div>';
		          newOutPut += '<div class="row">';
		              newOutPut += '<div class="col-md-6 lecturers">';
		                newOutPut += '<a href="pages/lecturers.html?id=' + GiangVienID + '"><strong>' + GiangVien + '</strong></a>';
		              newOutPut += '</div>';
		              newOutPut += '<div class="col-md-6 starBlue">';
		                newOutPut += '<span class="fa fa-star checked"></span>';
						newOutPut += '<span class="fa fa-star checked"></span>';
						newOutPut += '<span class="fa fa-star checked"></span>';
						newOutPut += '<span class="fa fa-star checked"></span>';
						newOutPut += '<span class="fa fa-star checked"></span>';
		              newOutPut += '</div>';
		            newOutPut += '</div>';
		          newOutPut += '<div class="price">';
		              newOutPut += '<strong>' + Math.round(GiaHienTai) + '<sup>$</sup></strong>';
		              newOutPut += '<span class="old-price">' + Math.round(GiaKhoaHoc) + '<sup>$</sup></span>';
		              newOutPut += '<span class="discount person">-' + Sale + '%</span>';
		            newOutPut += '</div>';
		        newOutPut += '</div>';
		      newOutPut += '</div>';
		newOutPut += '</div>';
	    return newOutPut;
    } else {
    	var newOutPut = "";
		newOutPut += '<div class="col-sm-6 col-md-3">';
		    newOutPut += '<div class="thumbnail">';
		        newOutPut += '<img src="' + Thumbnail + '" class="image" alt="' + TieuDe + '">';
		        newOutPut += '<div class="middle">';
		          newOutPut += '<div class="text"><a href="pages/product.html?id=' + id + '&gv=' + GiangVienID + '">Xem Chi Tiết</a></div>';
		        newOutPut += '</div>';
		        newOutPut += '<div class="caption">';
		          newOutPut += '<div class="captionText">';
		            newOutPut += '<a href="pages/product.html?id=' + id + '&gv=' + GiangVienID + '"><strong>' + TieuDe + '</strong></a>';
		          newOutPut += '</div>';
		          newOutPut += '<div class="row">';
		              newOutPut += '<div class="col-md-6 lecturers">';
		                newOutPut += '<a href="pages/lecturers.html?id=' + GiangVienID + '"><strong>' + GiangVien + '</strong></a>';
		              newOutPut += '</div>';
		              newOutPut += '<div class="col-md-6 starBlue">';
		                newOutPut += '<span class="fa fa-star checked"></span>';
						newOutPut += '<span class="fa fa-star checked"></span>';
						newOutPut += '<span class="fa fa-star checked"></span>';
						newOutPut += '<span class="fa fa-star checked"></span>';
						newOutPut += '<span class="fa fa-star checked"></span>';
		              newOutPut += '</div>';
		            newOutPut += '</div>';
		          newOutPut += '<div class="price">';
		              newOutPut += '<strong>' + Math.round(GiaKhoaHoc) + '<sup>$</sup></strong>';
		              newOutPut += '<span class="old-price"></span>';
		              newOutPut += '<span class="discount person"></span>';
		            newOutPut += '</div>';
		        newOutPut += '</div>';
		      newOutPut += '</div>';
		newOutPut += '</div>';
	    return newOutPut;
    }
};

// jQuery trang chi tiết
function detailCourse() {
	var url_string = window.location.href;
	var url = new URL(url_string);
	var id = url.searchParams.get("id");
	var gv = url.searchParams.get("gv");
	$.ajax({
	    url: HOME + '/' + id,
	    type: "GET",
	    success: function (response) {
	    	document.title = response.TieuDe + ' - TTHHN';
	    	$('#titleKH').text(response.TieuDe);
	    	$('#desKH').text(response.MoTa);
	    	$('#gvKH').text(response.GiangVien);
	    	$('#gvKH').attr('href', 'lecturers.html?id=' + response.GiangVienID);
	    	$('#getIDGV').attr('value', gv);
	    	$('#getIDKH').attr('value', id);
	    	$('#cdKH').text(response.ChuDe);
	    	$('#cdKH').attr('href', '/course.html?key=' + response.ChuDe);
	    	$('#imgKH').attr("src", response.Thumbnail);
	    	var GiaNow = ((response.GiaKhoaHoc / 100) * (100 - response.Sale));
	    	$('#bgKH').html('<i class="fa fa-play-circle" aria-hidden="true"></i> ' + response.SoBaiGiang + ' bài giảng');
	    	$('#sgKH').html('<i class="fa fa-clock-o" aria-hidden="true"></i> ' + response.SoPhutHoc + ' phút học');
	    	if (response.Sale != 0) {
	    		$('#priceKH').html(Math.round(response.GiaKhoaHoc) + '<sup>$</sup>');
	    		$('#couponKH').html('-' + response.Sale + '%');
	    	} else {
	    		$('#couponKH').attr("style", "display:none;");
	    		$('#priceKH').attr("style", "display:none;");
	    	};
	    	$('#btnAddCart').html('<button type="button" onclick="sendCart(\'' + response.MaKhoaHoc + '\')" class="btn btn-warning">Đăng ký học <i class="fa fa-arrow-right"></i></button>');
	    	var LoiIch = response.LoiIch;
	    	var newLoiIch = LoiIch.split(';');
	    	var LIMoi = "";
	    	for(var i = 0; i < newLoiIch.length; i++){
	    		var LoiIchMoi = newLoiIch[i];
	    		LIMoi += newLI(LoiIchMoi);
			}
			$('#liKH').html(LIMoi);
			var DoiTuong = response.DoiTuong;
	    	var newDoiTuong = DoiTuong.split(';');
	    	var DTMoi = "";
	    	for(var i = 0; i < newDoiTuong.length; i++){
	    		var DoiTuongMoi = newDoiTuong[i];
	    		DTMoi += newDT(DoiTuongMoi);
			}
			$('#dtKH').html(DTMoi);
			var GioiThieu = response.GioiThieu;
	    	var newGioiThieu = GioiThieu.split(';');
	    	var GTMoi = "";
	    	for(var i = 0; i < newGioiThieu.length; i++){
	    		var GioiThieuMoi = newGioiThieu[i];
	    		GTMoi += newGT(GioiThieuMoi);
			}
			$('#gtKH').html(GTMoi);
			var TuKhoa = response.TuKhoa;
	    	var newTuKhoa = TuKhoa.split(';');
	    	var TagMoi = "";
	    	for(var i = 0; i < newTuKhoa.length; i++){
	    		var TuKhoaMoi = newTuKhoa[i];
	    		TagMoi += newTag(TuKhoaMoi);
			}
			$('#tagKH').html(TagMoi);
			var GiaHienTai = ((response.GiaKhoaHoc / 100) * (100 - response.Sale));
			$('#pcNow').html(Math.round(GiaHienTai) + '<sup>$</sup>');
			$('.loading').fadeOut();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	       console.log(textStatus, errorThrown);
	    }
	});
	$.ajax({
	    url: GIANGVIEN + '/' + gv,
	    type: "GET",
	    success: function (response) {
	    	$('#nameGV').html('<a href="lecturers.html?id=' + response._id + '">' + response.TenGiangVien + '</a>');
	    	var MoTa = response.MoTa;
	    	var newMoTa = MoTa.split(';');
	    	var DesMoi = "";
	    	for(var i = 0; i < newMoTa.length; i++){
	    		var MoTaMoi = newMoTa[i];
	    		DesMoi += newDes(MoTaMoi);
			}
			$('#desGV').html(DesMoi);
			$('#imgGV').attr("src", response.AnhDaiDien);
			$('.loading').fadeOut();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	       console.log(textStatus, errorThrown);
	    }
	});
}
function newLI(li) {
	var newOutPut = '';
	newOutPut += '<div class="col-md-6 colLeft">';
		newOutPut += '<p><i class="fa fa-check" aria-hidden="true"></i> ' + li +'</p>';
	newOutPut += '</div>';
	return newOutPut;
}
function newDT(dt) {
	var newOutPut = '';
	newOutPut += '<li>' + dt + '</li>';
	return newOutPut;
}
function newGT(gt) {
	var newOutPut = '';
		newOutPut += '<p>' + gt + '</p>';
	return newOutPut;
}
function newTag(tag) {
	var newOutPut = '';
		newOutPut += '<button type="button" class="btn btn-xs">' + tag + '</button>';
	return newOutPut;
}
function newDes(des) {
	var newOutPut = '';
		newOutPut += '<p>' + des + '</p>';
	return newOutPut;
}
function sendCart(id) {
	var TenKhoaHoc = $('#titleKH').text();
	var GiangVien = $('#gvKH').text();
	var ChuDe = $('#cdKH').text();
	var price = $('#pcNow').text();
	var price2 = price.replace(",", "");
	var GiaKhoaHoc = price2.replace("$", "");
	var thumbnail = $('#imgKH').attr('src');
	var GiangVienID = $('#getIDGV').val();
	var KhoaHocID = $('#getIDKH').val();
	addToCart(id, TenKhoaHoc, GiangVien, ChuDe, GiaKhoaHoc, thumbnail, GiangVienID, KhoaHocID);
}
function loadCart() {
	var listCart = localStorage.getItem('listCart');
	if (listCart == null) {
		$('.listCart').attr('style', 'display:none;');
		$('.noneCart').attr('style', 'display:block;');
	} else {
		$('.listCart').attr('style', 'display:block;');
		$('.noneCart').attr('style', 'display:none;');
	}
	listCart = JSON.parse(listCart);
	if (listCart == undefined || listCart == null) {
		$('.listCart').attr('style', 'display:none;');
		$('.noneCart').attr('style', 'display:block;');
	} else {
		$('.listCart').attr('style', 'display:block;');
		$('.noneCart').attr('style', 'display:none;');
	}
	var cartContent = '';
	for (var i = 0; i < listCart.courses.length; i++) {
		cartContent += '<tr>';
    		cartContent += '<td>' + listCart.courses[i].MaKhoaHoc + '</td>';
    		cartContent += '<td class="titleCart">' + listCart.courses[i].TenKhoaHoc + '</td>';
    		cartContent += '<td>' + listCart.courses[i].GiangVien + '</td>';
    		cartContent += '<td>' + listCart.courses[i].ChuDe + '</td>';
    		cartContent += '<td>' + Math.round(listCart.courses[i].GiaKhoaHoc) + '<sup>$</sup></td>';
    		cartContent += '<td>Xóa</td>';
  		cartContent += '</tr>';
	}
	$('#innerCart').html(cartContent);
	var totalPrice = 0;
	for (var i = 0; i < listCart.courses.length; i++) {
		totalPrice += listCart.courses[i].GiaKhoaHoc * 1;
	}
	$('.panel-footer').html('Tổng đơn hàng: ' + Math.round(totalPrice) + '<sup>$</sup>');
	$('.loading').fadeOut();
}
function addToCart(MaKhoaHoc, TenKhoaHoc, GiangVien, ChuDe, GiaKhoaHoc, thumbnail, GiangVienID, KhoaHocID) {
	var listCart = localStorage.getItem('listCart');
	var customerId = localStorage.getItem('id');
	if (listCart == null) {
		listCart = {
			'courses': [
				{
					'customerId': customerId,
					'MaKhoaHoc': MaKhoaHoc,
					'TenKhoaHoc': TenKhoaHoc,
					'GiangVien': GiangVien,
					'ChuDe': ChuDe,
					'GiaKhoaHoc': GiaKhoaHoc,
					'Thumbnail': thumbnail,
					'GiangVienID': GiangVienID,
					'KhoaHocID': KhoaHocID
				}
			]
		}
		localStorage.setItem("cart", 1);
		$('.countCart').text(1);
		$('#snackbar').addClass('show');
		$('#snackbar').text('Thêm sản phẩm vào giỏ hàng thành công!');
		setTimeout(function(){ $('#snackbar').removeClass('show'); }, 3000);
	} else {
		listCart = JSON.parse(listCart);
		if (listCart != undefined && listCart != null) {
			var existsItem = false;
			var totalCart = listCart.courses.length;
			var cart = localStorage.getItem("cart");
			if (cart == null) {
				localStorage.setItem("cart", totalCart);
				$('.countCart').text(totalCart);
			} else {
				localStorage.setItem("cart", totalCart);
				$('.countCart').text(totalCart);
			}
			for (var i = 0; i < listCart.courses.length; i++) {
				if(listCart.courses[i].MaKhoaHoc == MaKhoaHoc){
					existsItem = true;
					swal("Lỗi!", "Khóa học này đã có trong giỏ hàng của bạn", "error")
					break;
				}
			}
			if(!existsItem){
				listCart.courses.push({
					'customerId': customerId,
					'MaKhoaHoc': MaKhoaHoc,
					'TenKhoaHoc': TenKhoaHoc,
					'GiangVien': GiangVien,
					'ChuDe': ChuDe,
					'GiaKhoaHoc': GiaKhoaHoc,
					'Thumbnail': thumbnail,
					'GiangVienID': GiangVienID,
					'KhoaHocID': KhoaHocID
				});
				localStorage.setItem("cart", totalCart + 1);
				$('.countCart').text(totalCart + 1);
				$('#snackbar').addClass('show');
				$('#snackbar').text('Thêm sản phẩm vào giỏ hàng thành công!');
				setTimeout(function(){ $('#snackbar').removeClass('show'); }, 3000);
			}
		}
	}	
	localStorage.setItem('listCart', JSON.stringify(listCart));
};
function checkOut() {
	var token = localStorage.getItem('token');
	if (token == null || token == undefined) {
		window.location.href = "/pages/login.html";
	}
	var listCart = localStorage.getItem('listCart');
	if (listCart == null || listCart == undefined) {
		window.location.href = "/";
	}
	listCart = JSON.parse(listCart);
	$('.soKhoaHoc').text(listCart.courses.length + ' khóa học');
	var cartContent = '';
	for (var i = 0; i < listCart.courses.length; i++) {
		cartContent += '<div class="row ttkh">';
    		cartContent += '<div class="col-md-8 ttkh1">' + listCart.courses[i].TenKhoaHoc + '</div>';
    		cartContent += '<div class="col-md-4">';
    		cartContent += '<strong>' + Math.round(listCart.courses[i].GiaKhoaHoc) + '<sup>$</sup></strong>';
    		cartContent += '</div>';
  		cartContent += '</div>';
	}
	$('.loadCartCheckOut').html(cartContent);
	var totalPrice = 0;
	for (var i = 0; i < listCart.courses.length; i++) {
		totalPrice += listCart.courses[i].GiaKhoaHoc * 1;
	}
	$('.hocPhiGoc').html(Math.round(totalPrice) + '<sup>$</sup>');
	var token = localStorage.getItem('token');
	var id = localStorage.getItem('id');
	$.ajax({
	    url: MEMBER + '/' + id,
	    type: "GET",
	    success: function (response) {
	    	$('#paymentform-email').val(response.email);
	    	$('#paymentform-name').val(response.fullName);
	    	$('#paymentform-phone').val(response.phone);
	    	if (response.fullName == null || response.phone == null || response.phone == undefined || response.fullName == undefined) {
				swal({
				  	title: "Vui lòng nhập họ tên!",
				  	text: "Vui lòng nhập họ tên của bạn để hoàn tất thanh toán",
				  	type: "input",
				  	showCancelButton: true,
				  	closeOnConfirm: false,
				  	inputPlaceholder: "Nhập tên của bạn."
				}, function (nameValue) {
				  	if (nameValue === false) return false;
				  	if (nameValue === "") {
					    swal.showInputError("Bạn chưa nhập tên kìa!");
				    	return false
				  	}
				  	swal({
					  	title: "Vui lòng số điện thoại!",
					  	text: "Số điện thoại của bạn là:",
					  	type: "input",
					  	showCancelButton: true,
					  	closeOnConfirm: false,
					  	inputPlaceholder: "Nhập số điện thoại của bạn.",
					  	showLoaderOnConfirm: true
					}, function (sdtValue) {
					  	if (sdtValue === false) return false;
					  	if (sdtValue === "") {
						    swal.showInputError("Bạn chưa nhập số điện thoại kìa!");
					    	return false
					  	}
					  	var token = localStorage.getItem('token');
					  	var putData = {
							"fullName": nameValue,
							"phone": sdtValue
						}
						$.ajax({
							url: MEMBER + '/' + id,
							type: "PUT",
							data: putData,
							headers: {
							    "Authorization": token
							},
							success: function(response){
						    	$('#paymentform-name').val(response.fullName);
						    	$('#paymentform-phone').val(response.phone);
						    	swal("Cập nhật thông tin thành công!", "Hãy tiếp tục thanh toán nhé!", "success");
						    	$('.loading').fadeOut();
							},
							error: function(jqXHR, textStatus, errorThrown) {
						       swal("Lỗi!", "Có lỗi xảy ra!", "error");
						    }
						});
					});
				});
			}
	     	$('.loading').fadeOut();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	       swal("Lỗi!", "Có lỗi xảy ra, vui lòng thử lại!", "error");
	    }
	});
	var customerId = localStorage.getItem('id');
	var arrayCourses = [];
	for (var i = 0; i < listCart.courses.length; i++) {
		var course = {
			'customerId': customerId,
			'KhoaHocID': listCart.courses[i].KhoaHocID,
			'GiangVienID':	listCart.courses[i].GiangVienID,
			'GiaKhoaHoc': listCart.courses[i].GiaKhoaHoc
		};
		arrayCourses.push(course);
	}
	var data = {
		'courses': JSON.stringify(arrayCourses)
	}
	// console.log(data);
	$.ajax({
	    url: ORDER,
	    type: "POST",
	    data: data,
	    success: function (response) {
	    	localStorage.setItem('orderID', response[0]._id);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	       swal("Lỗi!", "Có lỗi xảy ra, vui lòng thử lại!", "error");
	    }
	});
	$('.loading').fadeOut();
}
function deleteCart() {
	swal({
	  	title: "Bạn có muốn xóa giỏ hàng?",
	  	text: "Hãy lưu ý là sau khi xóa thì không thể khôi phục giỏ hàng!",
	  	type: "warning",
	  	showCancelButton: true,
	  	confirmButtonClass: "btn-danger",
	  	confirmButtonText: "Yes, delete it!",
	  	closeOnConfirm: false
	},
	function(){
		localStorage.removeItem('listCart');
		localStorage.removeItem('cart');
	  	swal("Xóa thành công!", "Hãy tiếp tục lựa chọn khóa học phù hợp với mình nhé!", "success");
	  	setTimeout(function(){location.reload();}, 1000);
	});
}
function loadLecturers() {
	var url_string = window.location.href;
	var url = new URL(url_string);
	var id = url.searchParams.get("id");
	$.ajax({
	    url: GIANGVIEN + '/' + id,
	    type: "GET",
	    success: function (response) {
	    	document.title = response.TenGiangVien + ' - Giảng viên TTHHN';
	    	$('#imgGV').attr('src', response.AnhDaiDien);
	    	$('#soHV').text(response.SoHocVien);
	    	$('#nameGV').text(response.TenGiangVien);
	    	$('#chudeGV').text(response.ChuDeGiangDay);
	    	var MoTa = response.MoTa;
	    	var newMoTa = MoTa.split(';');
	    	var DesMoi = "";
	    	for(var i = 0; i < newMoTa.length; i++){
	    		var MoTaMoi = newMoTa[i];
	    		DesMoi += newDes(MoTaMoi);
			}
			$('#motaGV').html(DesMoi);
			$('#cacKHofGV').html('<i class="fa fa-book" aria-hidden="true"></i> Các khóa học của giảng viên ' + response.TenGiangVien);
			khoaHoc(response._id);
			$('.loading').fadeOut();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	       console.log(textStatus, errorThrown);
	    }
	});
}
function khoaHoc(id) {
	$.ajax({
	    url: GIANGVIENDetail + '/' + id + '?page=1&limit=50',
	    type: "GET",
	    success: function (response) {
	    	var appendContent = "";
	     	for (var i = 0; i < response.data.length; i++) {
	     		var id = response.data[i]._id;
		     	var Thumbnail = response.data[i].Thumbnail;
		     	var TieuDe = response.data[i].TieuDe;
		     	var SoBaiGiang = response.data[i].SoBaiGiang;
		     	var SoPhutHoc = response.data[i].SoPhutHoc;
		     	var SoHocVien = response.data[i].SoHocVien;
		     	var GiangVienID = response.data[i].GiangVienID;
		     	appendContent += returnKH(id, Thumbnail, TieuDe, SoBaiGiang, SoPhutHoc, SoHocVien, GiangVienID);
	     	}
	     	$("#returnKH").html(appendContent);
	     	$('#soKH').text(response.data.length);
	     	$('.loading').fadeOut();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	       console.log(textStatus, errorThrown);
	    }
	});
}
function returnKH(id, Thumbnail, TieuDe, SoBaiGiang, SoPhutHoc, SoHocVien, GiangVienID) {
	var content = '';
		content += '<tr>';
          content += '<td class="imgLecturers">';
            content += '<a href="product.html?id=' + id + '&gv=' + GiangVienID + '"><img src="' + Thumbnail + '"></a>';
          content += '</td>';
          content += '<td class="tenKhoaHoc">';
            content += '<a href="product.html?id=' + id + '&gv=' + GiangVienID + '">' + TieuDe + '</a>';
            content += '<div class="starBlue">';
              content += '<span class="fa fa-star checked"></span>';
              content += '<span class="fa fa-star checked"></span>';
              content += '<span class="fa fa-star checked"></span>';
              content += '<span class="fa fa-star checked"></span>';
              content += '<span class="fa fa-star checked"></span>';
            content += '</div>';
          content += '</td>';
          content += '<td>';
            content += '<p>Bài Giảng: ' + SoBaiGiang + '</p>';
            content += '<p>Thời lượng: ' + SoPhutHoc + ' phút</p>';
            content += '<p>Học viên: ' + SoHocVien + '</p>';
          content += '</td>';
          content += '<td>';
            content += '<a href="product.html?id=' + id + '&gv=' + GiangVienID + '" class="btn btn-primary">Xem khóa học</a>';
          content += '</td>';
        content += '</tr>';
     return content;
}
function logout() {
	swal({
	  title: "Bạn có chắc chắn muốn đăng xuất?",
	  text: "Ấn OK để đăng xuất",
	  type: "warning",
	  showCancelButton: true,
	  closeOnConfirm: false,
	  showLoaderOnConfirm: true
	}, function () {
	  setTimeout(function () {
	    localStorage.removeItem('username');
	    localStorage.removeItem('token');
	    localStorage.removeItem('listCart');
	    localStorage.removeItem('id');
	    localStorage.removeItem('cart');
	    location.reload();
	  }, 2000);
	});
}
$(function() {
    var searchField = $('#valCourse');
    $('#searchCourse').submit(function(e) {
        e.preventDefault();
    });
});
$('#searchCourse').submit(function () {
	var key = $('#valCourse').val();
	window.location.href = '/search.html?key=' + key;
});
function searchCourseIndex() {
	var url_string = window.location.href;
	var url = new URL(url_string);
	var key = url.searchParams.get("key");
	$('#valCourse').val(key);
	$.ajax({
	    url: SEARCH + '/' + key,
	    type: "GET",
	    success: function (response) {
	    	if (response.data.length != 0) {
	    		var appendContent = "";
		     	for (var i = 0; i < response.data.length; i++) {
		     		var id = response.data[i]._id;
			     	var Thumbnail = response.data[i].Thumbnail;
			     	var TieuDe = response.data[i].TieuDe;
			     	var GiangVien = response.data[i].GiangVien;
			     	var GiaKhoaHoc = response.data[i].GiaKhoaHoc;
			     	var Sale = response.data[i].Sale;
			     	var GiangVienID = response.data[i].GiangVienID;
			     	appendContent += generateVideoBlock(id, Thumbnail, TieuDe, GiangVien, GiaKhoaHoc, Sale, GiangVienID);
		     	}
		     	$("#resultSearch").html(appendContent);
		     	$('.error404').attr('style', 'display:none;');
		     	$('.textSearch').html('Các khóa học theo từ khóa: <strong>' + key + '</strong>');
		     	$('.loading').fadeOut();
		     } else {
		     	$('.text404').html('Không có kết quả cho từ khóa: <strong>' + key + '</strong>');
		     }
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	       console.log(textStatus, errorThrown);
	    }
	});
}
$('.thongtin').fadeOut();

$('#check1').click(function() {
   if(this.checked) {
        $('.thongtin').fadeOut();
        $('#giaoma').fadeIn();
   }
});

$('#check2').click(function() {
   if(this.checked) {
        $('.thongtin').fadeOut();
        $('#thecao').fadeIn();
   }
});

$('#check3').click(function() {
   if(this.checked) {
        $('.thongtin').fadeOut();
        $('#atm').fadeIn();
   }
});

$('#check4').click(function() {
   if(this.checked) {
        $('.thongtin').fadeOut();
        $('#visa').fadeIn();
   }
});

$('#check5').click(function() {
   if(this.checked) {
        $('.thongtin').fadeOut();
        $('#chuyenkhoan').fadeIn();
   }
});

$('#check6').click(function() {
   if(this.checked) {
        $('.thongtin').fadeOut();
   }
});
function getChuDe(value) {
	window.location.href = '/course.html?key=' + value;
}
function chude() {
	var url_string = window.location.href;
	var url = new URL(url_string);
	var key = url.searchParams.get("key");
	$('#valCourse').val(key);
	$.ajax({
	    url: CHUDE + '/' + key,
	    type: "GET",
	    success: function (response) {
	    	var appendContent = "";
	     	for (var i = 0; i < response.data.length; i++) {
	     		var id = response.data[i]._id;
		     	var Thumbnail = response.data[i].Thumbnail;
		     	var TieuDe = response.data[i].TieuDe;
		     	var GiangVien = response.data[i].GiangVien;
		     	var GiaKhoaHoc = response.data[i].GiaKhoaHoc;
		     	var Sale = response.data[i].Sale;
		     	var GiangVienID = response.data[i].GiangVienID;
		     	appendContent += generateVideoBlock(id, Thumbnail, TieuDe, GiangVien, GiaKhoaHoc, Sale, GiangVienID);
	     	}
	     	$("#resultSearch").html(appendContent);
	     	$('.textSearch').html('Các khóa học theo chủ đề: <strong>' + key + '</strong>');
	     	$('.loading').fadeOut();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	       console.log(textStatus, errorThrown);
	    }
	});
}
$("#fileSelect").change(function (e){
	var data = new FormData();
	data.append('file', e.target.files[0]);
	$.ajax({
		url: FILE_UPLOAD_URL,
		type: "POST",
		data: data,
		cache: false,
	    contentType: false,
	    processData: false,
		success: function(response){
			$('.file-upload').attr('style', 'background-image:url(' + response + ')');
			$('#avtUrl').val(response);
			$('#addAvt').attr('style', 'display:none;');
			var id = localStorage.getItem('id');
			var token = localStorage.getItem('token');
			var putData = {
				"avatar": response
			};
			$.ajax({
				url: MEMBER + '/' + id,
				type: "PUT",
				data: putData,
				headers: {
				    "Authorization": token
				},
				success: function(response){
					swal("Thành công!", "Cập nhật ảnh đại diện thành công!", "success");
				},
				error: function(jqXHR, textStatus, errorThrown) {
			       swal("Lỗi!", jqXHR.responseJSON.message, "error");
			    }
			});
		},
		error: function(response, message){
			swal("Lỗi!", "Có lỗi xảy ra!", "error");
		}
	});
});
function editProfile() {
	var username = localStorage.getItem('username');
	var token = localStorage.getItem('token');
	var id = localStorage.getItem('id');
	if (username == null || username == undefined) {
		window.location.href = '/pages/login.html';
	} else {
		$.ajax({
		    url: MEMBER + '/' + id,
		    type: "GET",
		    success: function (response) {
		    	$('#username').val(response.username);
		    	$('#email').val(response.email);
		    	$('#fullName').val(response.fullName);
		    	$('#phone').val(response.phone);
		    	$('#birthDay').val(response.birthDay);
		    	$('.form-control option[value=' + response.gender + ']').attr('selected','selected');
		    	var avatar = response.avatar;
		    	if (avatar != null || avatar != undefined) {
		    		$('.file-upload').attr('style', 'background-image:url(' + response.avatar + ')');
					$('#avtUrl').val(response.avatar);
					$('#addAvt').attr('style', 'display:none;');
		    	}
		     	$('.loading').fadeOut();
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		       swal("Lỗi!", jqXHR.responseJSON.message, "error");
		    }
		});
	}
}
function saveEdit() {
	var token = localStorage.getItem('token');
	var id = localStorage.getItem('id');
	var fullName = $('#fullName').val();
	var birthDay = $('#birthDay').val();
	var phone = $('#phone').val();
	var gender = $('#gender').val();
	var putData = {
		"fullName": fullName,
		"birthDay": birthDay,
		"phone": phone,
		"gender": gender
	}
	$.ajax({
		url: MEMBER + '/' + id,
		type: "PUT",
		data: putData,
		headers: {
		    "Authorization": token
		},
		success: function(response){
			swal("Thành công!", "Cập nhật thông tin thành công!", "success");
		},
		error: function(jqXHR, textStatus, errorThrown) {
	       swal("Lỗi!", "Có lỗi xảy ra!", "error");
	    }
	});
}
function changePsw() {
	$('.showChangePsw').fadeToggle();
}
function savePsw() {
	var token = localStorage.getItem('token');
	var username = localStorage.getItem('username');
	var oldPsw = $('#oldPsw').val();
	var newPsw = $('#newPsw').val();
	var rePsw = $('#rePsw').val();
	if (oldPsw.length == 0) {
		$('.alertOldPsw').text('Bạn chưa nhập mật khẩu cũ!');
	}
	if (newPsw.length == 0) {
		$('.alertNewPsw').text('Bạn chưa nhập mật khẩu mới!');
	} else if (newPsw.length < 5) {
		$('.alertNewPsw').text('Mật khẩu mới phải dài hơn 5 ký tự!');
	}
	if (rePsw.length == 0) {
		$('.alertRePsw').text('Bạn chưa xác nhận mật khẩu mới!');
	} else if (rePsw != newPsw) {
		$('.alertRePsw').text('Mật khẩu không khớp!');
	}
	var putData = {
		"username": username,
		"password": oldPsw,
		"newPsw": newPsw
	}
	if (oldPsw != 0 && newPsw == rePsw) {
		$.ajax({
			url: 'https://project-tthhn.appspot.com/_api/v1/authentication',
			type: "PUT",
			data: putData,
			headers: {
			    "Authorization": token
			},
			success: function(response){
				swal("Thành công!", "Đổi mật khẩu thành công!", "success");
			},
			error: function(jqXHR, textStatus, errorThrown) {
		       swal("Lỗi!", "Có lỗi xảy ra!", "error");
		    }
		});
	}
}
function Payment() {
	if ($('#check6').is(':checked')) {
		var listCart = localStorage.getItem('listCart');
		var customerId = localStorage.getItem('id');
		var orderID = localStorage.getItem('orderID');
		listCart = JSON.parse(listCart);
		var totalPrice = 0;
		for (var i = 0; i < listCart.courses.length; i++) {
			totalPrice += listCart.courses[i].GiaKhoaHoc * 1;
		}
		var urlPayPal = 'https://project-tthhn.appspot.com/paypal?totalPrice=' + totalPrice + '&customId=' + customerId;
		window.open(urlPayPal);
	} else {
		swal("Troll is real :v", "Hiện tại mình mới chỉ đang phát triển chức năng thanh toán qua PayPal nên bạn hãy tick vào ô PayPal nhé!");
	}
}