// jQuery trang chủ
var HOME = 'https://project-tthhn.appspot.com/_api/v1/course';
var GIANGVIEN = 'https://project-tthhn.appspot.com/_api/v1/giangvien';
$(document).ready(function () {
	search();
	var cart = localStorage.getItem("cart");
	if (cart != null) {
		$('.countCart').text(cart);
	}
	$('.loading').fadeOut();
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
		              newOutPut += '<strong>' + formatPrice(GiaHienTai, '.', ',') + '<sup>đ</sup></strong>';
		              newOutPut += '<span class="old-price">' + formatPrice(GiaKhoaHoc, '.', ',') + '<sup>đ</sup></span>';
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
		              newOutPut += '<strong>' + formatPrice(GiaKhoaHoc, ',', ',') + '<sup>đ</sup></strong>';
		              newOutPut += '<span class="old-price"></span>';
		              newOutPut += '<span class="discount person"></span>';
		            newOutPut += '</div>';
		        newOutPut += '</div>';
		      newOutPut += '</div>';
		newOutPut += '</div>';
	    return newOutPut;
    }
};
function formatPrice(SoTien, DauPhay, DauPhay2) {
    SoTien += '';
    var x = SoTien.split(DauPhay);
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + DauPhay2 + '$2');
    }
    return x1 + x2;
}

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
	    	$('#cdKH').text(response.ChuDe);
	    	$('#imgKH').attr("src", response.Thumbnail);
	    	var GiaNow = ((response.GiaKhoaHoc / 100) * (100 - response.Sale));
	    	$('#bgKH').html('<i class="fa fa-play-circle" aria-hidden="true"></i> ' + response.SoBaiGiang + ' bài giảng');
	    	$('#sgKH').html('<i class="fa fa-clock-o" aria-hidden="true"></i> ' + response.SoPhutHoc + ' phút học');
	    	if (response.Sale != 0) {
	    		$('#priceKH').html(formatPrice(response.GiaKhoaHoc, '.', ',') + '<sup>đ</sup>');
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
			$('#pcNow').html(formatPrice(GiaHienTai, '.', ',') + '<sup>đ</sup>');
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
	var GiaKhoaHoc = price2.replace("đ", "");
	addToCart(id, TenKhoaHoc, GiangVien, ChuDe, GiaKhoaHoc);
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
	if (listCart.course == undefined || listCart.course == null) {
		$('.listCart').attr('style', 'display:none;');
		$('.noneCart').attr('style', 'display:block;');
	} else {
		$('.listCart').attr('style', 'display:block;');
		$('.noneCart').attr('style', 'display:none;');
	}
	var cartContent = '';
	for (var i = 0; i < listCart.course.length; i++) {
		cartContent += '<tr>';
    		cartContent += '<td>' + listCart.course[i].MaKhoaHoc + '</td>';
    		cartContent += '<td class="titleCart">' + listCart.course[i].TenKhoaHoc + '</td>';
    		cartContent += '<td>' + listCart.course[i].GiangVien + '</td>';
    		cartContent += '<td>' + listCart.course[i].ChuDe + '</td>';
    		cartContent += '<td>' + formatPrice(listCart.course[i].GiaKhoaHoc, '.', ',') + '<sup>đ</sup></td>';
    		cartContent += '<td>x</td>';
  		cartContent += '</tr>';
	}
	$('#innerCart').html(cartContent);
	var totalPrice = 0;
	for (var i = 0; i < listCart.course.length; i++) {
		totalPrice += listCart.course[i].GiaKhoaHoc * 1;
	}
	$('.panel-footer').html('Tổng đơn hàng: ' + formatPrice(totalPrice, '.', ',') + '<sup>đ</sup>');
}
function addToCart(MaKhoaHoc, TenKhoaHoc, GiangVien, ChuDe, GiaKhoaHoc) {
	var listCart = localStorage.getItem('listCart');
	if (listCart == null) {
		listCart = {
			'course': [
				{
					'MaKhoaHoc': MaKhoaHoc,
					'TenKhoaHoc': TenKhoaHoc,
					'GiangVien': GiangVien,
					'ChuDe': ChuDe,
					'GiaKhoaHoc': GiaKhoaHoc
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
		if (listCart.course != undefined && listCart.course != null) {
			var existsItem = false;
			var totalCart = listCart.course.length;
			var cart = localStorage.getItem("cart");
			if (cart == null) {
				localStorage.setItem("cart", totalCart);
				$('.countCart').text(totalCart);
			} else {
				localStorage.setItem("cart", totalCart);
				$('.countCart').text(totalCart);
			}
			for (var i = 0; i < listCart.course.length; i++) {
				if(listCart.course[i].MaKhoaHoc == MaKhoaHoc){
					existsItem = true;
					swal("Lỗi!", "Khóa học này đã có trong giỏ hàng của bạn", "error")
					break;
				}
			}
			if(!existsItem){
				listCart.course.push({
					'MaKhoaHoc': MaKhoaHoc,
					'TenKhoaHoc': TenKhoaHoc,
					'GiangVien': GiangVien,
					'ChuDe': ChuDe,
					'GiaKhoaHoc': GiaKhoaHoc
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
	  	setTimeout(function(){location.reload();}, 2000);
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
	    	$('#soKH').text(response.SoKhoaHoc);
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
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	       console.log(textStatus, errorThrown);
	    }
	});
}