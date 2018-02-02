var token = localStorage.getItem('keyLogin');
var username = localStorage.getItem('username');
// LOAD KHÓA HỌC
$(document).ready(function(){
	$.ajax({
		url: 'https://project-tthhn.appspot.com/_api/v1/course/new?page=1&limit=500',
		type: "GET",
		data: {
			},
		success: function(reponse) {
			var content = '';
			var viewindex = '';
			var viewindex3 = '';
			// var listchude = '';
			viewindex3 += '<div><h1 class="viewindex3">Tổng Số Khóa Học : <strong style="color: red"><i>'+ reponse.data.length +'</i></strong></h1></div>';
			viewindex += '<div><h1 class="viewindex">Khóa Học Mới Nhất : <strong style="color: red"><i>'+ reponse.data[reponse.data.length - 1].TieuDe +'</i></strong></h1></div>';			
			// for (var i = reponse.data.length - 1; i >=0; i--)
			for (var i = 0; i < reponse.data.length; i++){
				var id = reponse.data[i]._id;
				// console.log(reponse.data[i].MaKhoaHoc);
				content += '<tr>';
					content += 's<td class="hidden-xs"><img src="'+ reponse.data[i].Thumbnail +'"></td>';
					content += '<td class="hidden-xs">'+ reponse.data[i].MaKhoaHoc +'</td>';
					content += '<td>'+ reponse.data[i].TieuDe +'</td>';
						content += '<td>'+ reponse.data[i].GiangVien +'</td>';
						content += '<td>'+ reponse.data[i].ChuDe +'</td>';
							content += '<td>'+ reponse.data[i].GiaKhoaHoc +'</td>';
						content += '<td align="center" class="hihi">';
						content += '<a onclick="suakhoahoc(\''+ id +'\')" class="btn btn-default"><em class="fa fa-pencil"></em></a>';
					content += '<a onclick="xoakhoahoc(\''+ id +'\')" class="btn btn-danger"><em class="fa fa-trash"></em></a>';
					content += '</tr>';

				// listchude += '<option>'+ reponse.data[i].ChuDe +'</option>';
			}
			$('#course').html(content);
			$('#viewindex').html(viewindex);
			$('#viewindex3').html(viewindex3);
			// $('#chude').html(listchude);
				},
				error: function() {
			}
		});

	// LOAD GIẢNG VIÊN

	$.ajax({
		url: 'https://project-tthhn.appspot.com/_api/v1/giangvien',
		type: "GET",
		data: {
			},
		success: function(reponse) {
			var content = '';
			var viewindex2 = '';
			var viewindex4 = '';
			viewindex4  += '<div><h1 class="viewindex4">Tổng Số Giảng Viên : <strong style="color: red"><i>'+ reponse.data.length +'</i></strong></h1></div>';
			viewindex2 += '<div><h1 class="viewindex2">Giảng Viên Mới Nhất : <strong style="color: red"><i>'+ reponse.data[reponse.data.length - 1].TenGiangVien +'</i></strong></h1></div>';
			var listgiangvien = '';	
			var length = reponse.data.length;		
			for (var i = 0; i < reponse.data.length; i++)	 {
				var id = reponse.data[i]._id;
				content += '<tr>';
					content += '<td class="hidden-xs"><img src="'+ reponse.data[i].AnhDaiDien +'"></td>';
					content += '<td>'+ reponse.data[i].MaGiangVien +'</td>';
						content += '<td>'+ reponse.data[i].TenGiangVien +'</td>';
						content += '<td>'+ reponse.data[i].ChuDeGiangDay +'</td>';
							content += '<td>'+ reponse.data[i].SoKhoaHoc +'</td>';
						content += '<td align="center" class="hihi">';
						content += '<a onclick="suagiangvien(\''+ id +'\')" class="btn btn-default"><em class="fa fa-pencil"></em></a>';
					content += '<a onclick="xoagiangvien(\''+ id +'\')" class="btn btn-danger"><em class="fa fa-trash"></em></a>';
					content += '</tr>';

				listgiangvien += '<option value="' + reponse.data[i].TenGiangVien + '" data-idgv="' + id + '">' + reponse.data[i].TenGiangVien + '</option>';
				// $.ajax({
				// 	url: 'https://project-tthhn.appspot.com/_api/v1/giangvien/course/'+id+'/?page=1&limit=100',
				// 	type: "GET",
				// 	success: function(reponse) {
				// 		// console.log(reponse.data.length);
				// 		// console.log(reponse);
				// 			console.log(reponse.length);
				// 		for (var i = 0; i < reponse.length; i++) {
				// 			$('#sokhoahoc').html('');
				// 		}
				// 	}
				// });
			}
			$('#listgiangvien').html(content);
			$('#giangvien').html(listgiangvien);
			$('#viewindex2').html(viewindex2);
			$('#viewindex4').html(viewindex4);
			localStorage.setItem('idGV', reponse.data[0]._id);
				},
				error: function() {
			}
		});
});

// THÊM KHÓA HỌC

$(document).ready(function(){
	$("#giangvien").change(function (id) {
	     var ID = $(this).find(':selected').data('idgv');
	     localStorage.setItem('idGV', ID);
	});
	$('#themkhoahoc').click(function () {
		// GET INPUT
			var makhoahoc = $('#makhoahoc').val(); 
			var tieude = $('#tieude').val();
			var mota = $('#mota').val();
			var loiich = $('#loiich').val();
			var giangvien = $('#giangvien').val();
			var giangvienId = localStorage.getItem('idGV');
			var chude = $('#chude').val();
			var doituong = $('#doituong').val();
			var gioithieu = $('#gioithieu').val();
			var giakhoahoc = $('#giakhoahoc').val();
			var giamgia = $('#giamgia').val();
			var sobaigiang = $('#sobaigiang').val();
			var thoigian = $('#thoigian').val();
			var tukhoa = $('#tukhoa').val();
			var anhmota = $('#anhmota').val();
			var trangthai = $('#trangthai').val();
		// VALIDATE
	    if (makhoahoc.length == 0) {
	      $('.mkherr').text('Bạn chưa nhập mã khóa học!');
	    } 
	    else if (makhoahoc.length < 5) {
	    	$('.mkherr').text('Mã khóa học quá ngắn!');
	    }
	     else {
	      $('.mkherr').attr('style', 'display:none;');
	    }
	    if (tieude.length == 0) {
	      $('.tderr').text('Bạn chưa nhập tiêu đề!');
	    } 
	    else if (tieude.length < 5) {
	    	$('.tderr').text('Tiêu đề quá ngắn!');
	    } 
	     else {
	      $('.tderr').attr('style', 'display: none');
	    }
	    if (mota.length == 0) {
	      $('.motaerr').text('Bạn chưa nhập mô tả!');
	    }  
	    else if (mota.length < 5) {
	    	$('.motaerr').text('Mô tả quá ngắn!');
	    }
	     else {
	      $('.motaerr').attr('style', 'display: none');
	    }
	    if (loiich.length == 0) {
	      $('.loiicherr').text('Bạn chưa nhập lợi ích!');
	    }
	    else if (loiich.length < 5) {
	    	$('.loiicherr').text('Lợi ích quá ngắn!');
	    } 
	     else {
	      $('.loiicherr').attr('style', 'display: none');
	    }
	    if (doituong.length == 0) {
	      $('.dterr').text('Bạn chưa nhập đối tượng!');
	    } 
	    else if (doituong.length < 5) {
	    	$('.dterr').text('Đối tượng quá ngắn!');
	    } 
	     else {
	      $('.dterr').attr('style', 'display: none');
	    }
	    if (gioithieu.length == 0) {
	      $('.gterr').text('Bạn chưa nhập giới thiệu!');
	    } 
	    else if (gioithieu.length < 5) {
	    	$('.gterr').text('Giới thiệu quá ngắn!');
	    } 
	     else {
	      $('.gterr').attr('style', 'display: none');
	    }
	    if (giakhoahoc.length == 0) {
	      $('.gkhherr').text('Bạn chưa nhập giá khóa học!');
	    } 
	    else if (giakhoahoc <  0) {
	      $('.gkhherr').text('Giá khóa học quá nhỏ!');
	    }
	     else {
	      $('.gkhherr').attr('style', 'display: none');
	    }
	    if (giamgia.length == 0) {
	      $('.ggerr').text('');
	    }
	    else if (giamgia <  0) {
	      $('.ggerr').text('Giảm giá quá nhỏ!');
	    } 
	     else {
	      $('.ggerr').attr('style', 'display: none');
	    }
	    if (sobaigiang.length == 0) {
	      $('.sbgerr').text('Bạn chưa nhập số bài giảng!');
	    } 
	    else if (sobaigiang <=  0) {
	      $('.sbgerr').text('Số bài giảng phải lớn hơn 0!');
	    }
	     else {
	      $('.sbgerr').attr('style', 'display: none');
	    }
	    if (thoigian.length == 0) {
	      $('.tgerr').text('Bạn chưa nhập thời gian!');
	    } 
	    else if (thoigian <=  0) {
	      $('.tgerr').text('Thời gian phải lớn hơn 0!');
	    }
	     else {
	      $('.tgerr').attr('style', 'display: none');
	    }
	    if (anhmota.length == 0) {
	      $('.avterr').text('Ảnh mô tả chưa sẵn sàng!');
	      $('.popover-title').html('<strong class="uploading">Vui Lòng Chờ Tới Khi Hoàn Tất ...</strong>');
	    } 
	     else {
	      $('.avterr').attr('style', 'display: none');
	    }
		// SEND DATA
		// if (makhoahoc.length >= 5 && tieude.length >= 5
		// 	 && mota.length >= 5 && loiich.length >= 5
		// 	  && doituong.length >= 5 && gioithieu.length >= 5
		// 	   && giakhoahoc >= 0 && giamgia >= 0
		// 	    && sobaigiang > 0 && thoigian > 0
		// 	      && anhmota.length > 0 && makhoahoc.length >= 5) {
		$.ajax({
			url: 'https://project-tthhn.appspot.com/_api/v1/course',
			type: "POST",
			headers: {
		        "Authorization": token
		    },
			data: {
				    "MaKhoaHoc" : makhoahoc,
				    "TieuDe" : tieude,
				    "MoTa" : mota,
				    "GiangVien" : giangvien,
				    "GiangVienID" : giangvienId,
				    "ChuDe" : chude,
				    "LoiIch" : loiich,
				    "DoiTuong" : doituong,
				    "GioiThieu" : gioithieu,
				    "GiaKhoaHoc" : giakhoahoc,
				    "Sale" : giamgia,
				    "SoBaiGiang" : sobaigiang,
				    "SoPhutHoc" : thoigian,
				    "TuKhoa" : tukhoa,
				    "Thumbnail" : anhmota,
				    "GiamGia" : giamgia
					},
				success: function(reponse) {
					swal("Thành Công", "Khóa Học Đã Được Thêm", "success");
					localStorage.removeItem('idGV');
					console.log(reponse);
					// location.reload(2000);
				},
				error: function(reponse) {
						console.log(reponse.statusText);

				}
			});
		// }
	});


	// GET INPUT

  $('#themgiangvien').click(function () {
    var magiangvien = $('#magiangvien').val();
    var tengiangvien = $('#tengiangvien').val();
    var chudegiangday = $('#chudegiangday').val();
    var mota = $('#mota').val();
    var sokhoahoc = $('#sokhoahoc').val();
    var anhdaidien = $('#anhdaidien').val();

    // VALIDATE

    if (magiangvien.length == 0) {
      $('.mgverr').text('Bạn chưa nhập mã giảng viên!');
    } 
    else if (magiangvien.length < 5) {
    	$('.mgverr').text('Mã giảng viên quá ngắn!');
    }
     else {
      $('.mgverr').attr('style', 'display:none;');
    }
    if (tengiangvien.length == 0) {
      $('.tgverr').text('Bạn chưa nhập tên giảng viên!');
    } 
    else if (tengiangvien.length < 5) {
    	$('.tgverr').text('Tên giảng viên quá ngắn!');
    } 
     else {
      $('.tgverr').attr('style', 'display: none');
    }
    if (chudegiangday.length == 0) {
      $('.chudeerr').text('Bạn chưa nhập chủ đề!');
    }  
    else if (chudegiangday.length < 5) {
    	$('.chudeerr').text('Chủ đề quá ngắn!');
    }
     else {
      $('.chudeerr').attr('style', 'display: none');
    }
    if (mota.length == 0) {
      $('.motaerr').text('Bạn chưa nhập mô tả!');
    }
    else if (mota.length < 5) {
    	$('.motaerr').text('Mô tả quá ngắn!');
    } 
     else {
      $('.motaerr').attr('style', 'display: none');
    }
    if (sokhoahoc.length == 0) {
      $('.skherr').text('Bạn chưa nhập số khóa học!');
    }
     else {
      $('.skherr').attr('style', 'display: none');
    }
    if (anhdaidien.length == 0) {
      $('.avterr').text('Ảnh đại diện chưa sẵn sàng!');
      $('.popover-title').html('<strong class="uploading">Vui Lòng Chờ Tới Khi Hoàn Tất ...</strong>');
    } 
     else {
      $('.avterr').attr('style', 'display: none');
    }

    // SEND DATA

    if (magiangvien.length >= 5 && tengiangvien.length >= 5 && chudegiangday.length >= 5 
    	&& mota.length >= 5 && sokhoahoc.length > 0 && anhdaidien.length > 0) {
	$.ajax({
		url: 'https://project-tthhn.appspot.com/_api/v1/giangvien',
		type: "POST",
		headers: {
		        "Authorization": token
		    },
		data: {
				"MaGiangVien" : magiangvien,
				"TenGiangVien" : tengiangvien,
				"ChuDeGiangDay" : chudegiangday,
				"MoTa" : mota,
				"SoKhoaHoc" : sokhoahoc,
				"AnhDaiDien" : anhdaidien
				},
			success: function(reponse) {
				swal("Thành Công", "Giảng Viên Đã Được Thêm", "success");
				location.reload(2000);
			},
			error: function() {

				}
			});
    	}
  	});
});



// XÓA KHÓA HỌC

function xoakhoahoc(id) {
	swal({
	  title: "Xóa Khóa Học",
	  text: "Bạn có chắc chắn muốn xóa khóa học này !",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-danger",
	  confirmButtonText: "Xóa",
	  closeOnConfirm: false
	},
	function(){
	  $.ajax({
			url: 'https://project-tthhn.appspot.com/_api/v1/course/'+id+'',
			type: "DELETE",
			data: {},
			headers: {
				Authorization: token
			},
			success: function(reponse) {
				swal("Thành Công", "Bạn đã xóa thành công khóa học này !", "success");
				location.reload(2000);
			},
			error: function() {
			}
		});
	});
}

// SỬA KHÓA HỌC


function suakhoahoc(id) {
	$.ajax({
	url: 'https://project-tthhn.appspot.com/_api/v1/course/'+id+'',
	type: "GET",
		success: function(reponse) {
			$('#viewanhmota').attr('src', reponse.Thumbnail);
			$('#makhoahocput').val(reponse.MaKhoaHoc); 
			$('#tieudeput').val(reponse.TieuDe);
			$('#motaput').val(reponse.MoTa);
			$('#loiichput').val(reponse.LoiIch);
			$('#gioithieuput').val(reponse.GioiThieu);
			$('#giangvien').val(reponse.GiangVien);
			localStorage.setItem('idGV', reponse.GiangVienID);
			$('#chudeput').val(reponse.ChuDe);
			$('#doituongput').val(reponse.DoiTuong);
			$('#giakhoahocput').val(reponse.GiaKhoaHoc);
			$('#giamgiaput').val(reponse.Sale);
			$('#sobaigiangput').val(reponse.SoBaiGiang);
			$('#thoigianput').val(reponse.SoPhutHoc);
			$('#tukhoaput').val(reponse.TuKhoa);
			$('#anhmotaput').val(reponse.Thumbnail);
			$('.image-preview-filename').val(reponse.Thumbnail);
			$('.image-preview-filename').prop("disabled", false);
			$('#pic').attr('src', reponse.Thumbnail);
			$('#trangthaiput').val(reponse.TrangThai);
			$('#khmodal').modal();

		$('#saveput').click(function () {

				// GET INPUT

				var makhoahoc = $('#makhoahocput').val(); 
				var tieude = $('#tieudeput').val();
				var mota = $('#motaput').val();
				var loiich = $('#loiichput').val();
				var giangvien = $('#giangvien').val();
				var giangvienId = localStorage.getItem('idGV');
				var chude = $('#chudeput').val();
				var doituong = $('#doituongput').val();
				var gioithieu = $('#gioithieuput').val();
				var giakhoahoc = $('#giakhoahocput').val();
				var giamgia = $('#giamgiaput').val();
				var sobaigiang = $('#sobaigiangput').val();
				var thoigian = $('#thoigianput').val();
				var tukhoa = $('#tukhoaput').val();
				var anhmota = $('#anhmotaput').val();
				var trangthai = $('#trangthaiput').val();

				// SEND DATA

				$.ajax({
				url: 'https://project-tthhn.appspot.com/_api/v1/course/'+id+'',
				type: "PUT",
				headers: {
			        "Authorization": token
			    },
				data: {
					"MaKhoaHoc" : makhoahoc,
				    "TieuDe" : tieude,
				    "MoTa" : mota,
				    "GiangVien" : giangvien,
				    "GiangVienID" : giangvienId,
				    "ChuDe" : chude,
				    "LoiIch" : loiich,
				    "DoiTuong" : doituong,
				    "GioiThieu" : gioithieu,
				    "GiaKhoaHoc" : giakhoahoc,
				    "Sale" : giamgia,
				    "SoBaiGiang" : sobaigiang,
				    "SoPhutHoc" : thoigian,
				    "TuKhoa" : tukhoa,
				    "Thumbnail" : anhmota
				},
					success: function(reponse) {
						$('#khmodal').modal().hide();
						swal("Thành Công", "Đã Sửa Khóa Học", "success");
						localStorage.removeItem('idGV');
						location.reload(2000);
					},
					error: function() {
					}
				});
			})
			
		},
		error: function() {
		}
	});
}

// XÓA GIẢNG VIÊN

function xoagiangvien(id) {
	swal({
	  title: "Xóa Giảng Viên",
	  text: "Bạn có chắc chắn muốn xóa giảng viên này ?",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-danger",
	  confirmButtonText: "Xóa",
	  closeOnConfirm: false
	},
	function(){
		$.ajax({
			url: 'https://project-tthhn.appspot.com/_api/v1/giangvien/'+id+'',
			type: "DELETE",
			data: {},
			headers: {
				Authorization: token
			},
			success: function(reponse) {
				swal("Thành Công !", "Bạn đã xóa thành công giảng viên này !.", "success");
				location.reload(2000);
			},
			error: function() {
			}
		});
	});
}

// SỬA GIẢNG VIÊN

function suagiangvien(id) {
	$.ajax({
	url: 'https://project-tthhn.appspot.com/_api/v1/giangvien/'+id+'',
	type: "GET",
	data: {},
		success: function(reponse) {
			$('#magiangvienput').val(reponse.MaGiangVien); 
			$('#tengiangvienput').val(reponse.TenGiangVien);
			$('#chudegiangdayput').val(reponse.ChuDeGiangDay);
			$('#motaput').val(reponse.MoTa);
			$('#sokhoahocput').val(reponse.SoKhoaHoc);
			$('#anhdaidienput').val(reponse.AnhDaiDien);
			$('.image-preview-filename').val(reponse.AnhDaiDien);
			$('.image-preview-filename').prop("disabled", false);
			$('#picgv').attr('src', reponse.AnhDaiDien);
			$('#gvmodal').modal();

		$('#saveputgv').click(function () {
				suagiangvien();
				// GET INPUT

				var magiangvien = $('#magiangvienput').val(); 
				var tengiangvien = $('#tengiangvienput').val();
				var chudegiangday = $('#chudegiangdayput').val();
				var mota = $('#motaput').val();
				var sokhoahoc = $('#sokhoahocput').val();
				var anhdaidien = $('#anhdaidienput').val();

				// SEND DATA

				$.ajax({
				url: 'https://project-tthhn.appspot.com/_api/v1/giangvien/'+id+'',
				type: "PUT",
				headers: {
		        	"Authorization": token
			    },
				data: {
					"MaGiangVien" : magiangvien,
				    "TenGiangVien" : tengiangvien,
				    "ChuDeGiangDay" : chudegiangday,
				    "MoTa" : mota,
				    "SoKhoaHoc" : sokhoahoc,
				    "AnhDaiDien" : anhdaidien
				},
					success: function(reponse) {
						console.log(magiangvien + tengiangvien);
						$('#gvmodal').modal().hide();
						swal("Thành Công", "Đã Sửa Giảng Viên", "success");
						location.reload(700);
					},
					error: function() {
					}
				});
			})
			
		},
		error: function() {
		}
	});
}

// LOGIN ADMIN

$(document).ready(function($){
	$('#logouttoken').click(function () {
		 localStorage.removeItem("keyLogin");
	    localStorage.removeItem("username");
		location.reload();
	});
	$('#logoutpagetoken').click(function () {
		localStorage.removeItem("keyLogin");
	    localStorage.removeItem("username");
		window.location.href = '../index.html'
	});
	$('#logoutpage').click(function () {
		swal({
		   title: "Đăng Xuất",
		  text: "Bạn có muốn thoát khỏi hệ thống ?",
		  type: "info",
		  showCancelButton: true,
		  closeOnConfirm: false,
		  showLoaderOnConfirm: true
		}, function () {
		  setTimeout(function () {
		    swal("Đăng xuất thành công !");
		    localStorage.removeItem("keyLogin");
		    localStorage.removeItem("username");
			window.location.href = '../index.html'
		  }, 2000);
		});	
	});
	$('#logout').click(function () {
		swal({
		  title: "Đăng Xuất",
		  text: "Bạn có muốn thoát khỏi hệ thống ?",
		  type: "info",
		  showCancelButton: true,
		  closeOnConfirm: false,
		  showLoaderOnConfirm: true
		}, function () {
		  setTimeout(function () {
		    swal("Đăng xuất thành công !");
		    localStorage.removeItem("keyLogin");
		    localStorage.removeItem("username");
			location.reload();
		  }, 2000);
		});	
	});
	$('#loginadmin').click(function () {
		var username = $('#username').val();
		var password = $('#password').val();
		$('#msg').hide();
		$.ajax({
		url: 'https://project-tthhn.appspot.com/admin',
		type: "POST",
		headers: {
		        "Authorization": token
		    },
		data: {
				"username" : username,
				"password" : password
				},
			success: function(reponse) {
				console.log(reponse);
				var tokenKey = reponse.token;

				if (tokenKey == null && tokenKey == undefined) 
				{
					$('#msg').show();
					$('#msg').text('Tài khoản hoặc mật khẩu không chính xác !');
				}
				else {
					localStorage.setItem('keyLogin', tokenKey);	
					localStorage.setItem('username', username);	
					$.toast({
					    heading: 'Thành Công',
					    text: 'Đăng Nhập Thành Công',
					    position: 'bottom-right',
					    icon: 'success'
					})
					setTimeout(location.reload.bind(location), 2000);		
					}
				
				},
				error: function(jqXHR, textStatus, errorThrown) {
				$('#msg').show();
				$('#msg').text('Tài khoản hoặc mật khẩu không chính xác !');
				$.toast({
				    heading: 'Thất Bại',
				    text: ''+ jqXHR.responseJSON.message +'',
				    position: 'bottom-right',
				    icon: 'error'
				})
		     }
		});
	});
});

// CHECK ADMIN LOGIN

var keyLogin = localStorage.getItem('keyLogin');
if (keyLogin == null && keyLogin == undefined) {
	$('#indexlogin').attr("style","");
}
else {
	$('#index').attr("style","");
}

// KHÔI PHỤC KHÓA HỌC

$(document).ready(function(){
	$('#khoiphuc').click(function () {
		$.ajax({
			url: 'https://project-tthhn.appspot.com/_api/v1/recyclebin/course',
			type: "GET",
			data: {
				},
			success: function(reponse) {
				var content = '';
				for (var i = 0; i < reponse.data.length; i++){
					var id = reponse.data[i]._id;
					console.log(reponse.data[i].MaKhoaHoc);
					content += '<tr>';
						content += 's<td class="hidden-xs"><img src="'+ reponse.data[i].Thumbnail +'"></td>';
						content += '<td class="hidden-xs">'+ reponse.data[i].MaKhoaHoc +'</td>';
						content += '<td>'+ reponse.data[i].TieuDe +'</td>';
							content += '<td>'+ reponse.data[i].GiangVien +'</td>';
							content += '<td>'+ reponse.data[i].ChuDe +'</td>';
								content += '<td>'+ reponse.data[i].GiaKhoaHoc +'</td>';
							content += '<td align="center" class="hihi">';
							content += '<a onclick="khoiphuc(\''+ id +'\')" class="btn btn-default"><em class="fa fa-plus"></em></a>';
						content += '<a onclick="xoavinhvien(\''+ id +'\')" class="btn btn-danger"><em class="fa fa-trash"></em></a>';
						content += '</tr>';
				}
				$('#courserecyclebin').html(content);
					},
					error: function() {
				}
			});
		$('#modalkhoiphuc').modal('show');
	});
});

// XÓA VĨNH VIỄN

function xoavinhvien(id) {
	swal({
	  title: "Xóa Vĩnh Viễn",
	  text: "Bạn có chắc chắn muốn xóa khóa học này vĩnh viễn!",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-danger",
	  confirmButtonText: "Xóa Vĩnh Viễn",
	  closeOnConfirm: false
	},
	function(){
	  swal("Thành Công", "Bạn đã xóa thành công khóa học này !", "success");
	  $.ajax({
			url: 'https://project-tthhn.appspot.com/_api/v1/recyclebin/course/'+id+'',
			type: "DELETE",
			data: {},
			success: function(reponse) {
				swal("Xóa Thành Công", "Đã Xóa Khóa Học Vĩnh Viễn", "success");
				location.reload(2000);
			},
			error: function() {
			}
		});
	});
}

// KHÔI PHỤC LẠI

function khoiphuc(id) {
	swal({
	  title: "Khôi Phục",
	  text: "Bạn có chắc chắn muốn khôi phục khóa học này!",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-success",
	  confirmButtonText: "Khôi Phục !",
	  closeOnConfirm: false
	},
	function(){
	  swal("Thành Công", "Bạn đã xóa thành công khóa học này !", "success");
	  $.ajax({
			url: 'https://project-tthhn.appspot.com/_api/v1/recyclebin/course/'+id+'',
			type: "PUT",
			headers: {
		        "Authorization": token
		    },
			data: {},
			success: function(reponse) {
				swal("Khôi Phục Thành CÔng", "Đã khôi phục khóa học", "success");
				location.reload(2000);
			},
			error: function() {
			}
		});
	});
}

// KHÔI PHỤC GIẢNG VIÊN


$(document).ready(function(){
	$('#khoiphucgv').click(function () {
		$.ajax({
			url: 'https://project-tthhn.appspot.com/_api/v1/recyclebin/lecturers',
			type: "GET",
			data: {
				},
			success: function(reponse) {
				var content = '';
				for (var i = reponse.data.length - 1; i >=0; i--) {
				var id = reponse.data[i]._id;
				content += '<tr>';
					content += '<td class="hidden-xs"><img src="'+ reponse.data[i].AnhDaiDien +'"></td>';
					content += '<td>'+ reponse.data[i].MaGiangVien +'</td>';
						content += '<td>'+ reponse.data[i].TenGiangVien +'</td>';
						content += '<td>'+ reponse.data[i].ChuDeGiangDay +'</td>';
							content += '<td>'+ reponse.data[i].SoKhoaHoc +'</td>';
						content += '<td align="center" class="hihi">';
						content += '<a onclick="khoiphucgv(\''+ id +'\')" class="btn btn-default"><em class="fa fa-plus"></em></a>';
					content += '<a onclick="xoavinhviengv(\''+ id +'\')" class="btn btn-danger"><em class="fa fa-trash"></em></a>';
					content += '</tr>';
				}
				$('#giangvienrecyclebin').html(content);
					},
					error: function() {
				}
			});
		$('#modalkhoiphucgv').modal('show');
	});
});

// XÓA VĨNH VIỄN

function xoavinhviengv(id) {
	swal({
	  title: "Xóa Vĩnh Viễn",
	  text: "Bạn có chắc chắn muốn xóa giảng viên này vĩnh viễn!",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-danger",
	  confirmButtonText: "Xóa Vĩnh Viễn",
	  closeOnConfirm: false
	},
	function(){
	  swal("Thành Công", "Bạn đã xóa thành công giảng viên này !", "success");
	  $.ajax({
			url: 'https://project-tthhn.appspot.com/_api/v1/recyclebin/lecturers/'+id+'',
			type: "DELETE",
			data: {},
			success: function(reponse) {
				swal("Xóa Thành Công", "Đã Xóa Giảng Viên Vĩnh Viễn", "success");
				location.reload(2000);
			},
			error: function() {
			}
		});
	});
}

// KHÔI PHỤC LẠI

function khoiphucgv(id) {
	swal({
	  title: "Khôi Phục",
	  text: "Bạn có chắc chắn muốn khôi phục giảng viên này!",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-success",
	  confirmButtonText: "Khôi Phục !",
	  closeOnConfirm: false
	},
	function(){
	  swal("Thành Công", "Bạn đã xóa thành công giảng viên này !", "success");
	  $.ajax({
			url: 'https://project-tthhn.appspot.com/_api/v1/recyclebin/lecturers/'+id+'',
			type: "PUT",
			headers: {
		        "Authorization": token
		    },
			data: {},
			success: function(reponse) {
				swal("Khôi Phục Thành Công", "Đã khôi phục giảng viên", "success");
				location.reload(2000);
			},
			error: function() {
			}
		});
	});
}

// UPLOAD ẢNH

$(document).ready(function($http){
    $('input[type="file"]').change(function(e){
    	$('#anhdaidien').val('');
        $('#anhmota').val('');   
        var input = document.getElementById('my-file-selector');       
        var data = new FormData();
        data.append('file', e.target.files[0]);
        $.ajax({
           url:'https://project-tthhn.appspot.com/_api/v1/images',
           type:'POST',
           data:data,
           processData: false,  // tell jQuery not to process the data
           contentType: false ,
           success:function (req,response,data) {
           	 	$('.popover-title').html('<strong class="uploadok">Hoàn Tất !</strong>');
           	 	$('.avterr').text('');
           	 	$('.avterr').text('');
           		$('#anhdaidien').val(data.responseText);
           		$('#anhmota').val(data.responseText);
           		$('#anhmotaput').val(data.responseText);
           		$('#anhdaidienput').val(data.responseText);
           		$('#pic').attr('src',data.responseText);
           		$('#picgv').attr('src',data.responseText);
           		$('.image-preview-filename').val(data.responseText);
				$('.image-preview-filename').prop("disabled", false);
           		$('.popover').hide();   
            }
        });
    });

});


// ĐỔI MẬT KHẨU

$('#changepass').click(function () {
	$('#password_modal').modal('show');
});

// LƯU MẬT KHẨU MỚI

$('#password_modal_save').click(function () {
	var oldPsw = $('#oldPsw').val();
	var newPsw = $('#newPsw').val();
	var rePsw = $('#rePsw').val();
	if (oldPsw.length == 0) {
	  $('.alertOldPsw').text('Bạn chưa nhập mật khẩu cũ!');
	 }
 	 else {
 	$('.alertOldPsw').text('');
	 }
	 if (newPsw.length == 0) {
	  $('.alertNewPsw').text('Bạn chưa nhập mật khẩu mới!');
	 } else if (newPsw.length < 5) {
	  $('.alertNewPsw').text('Mật khẩu mới phải dài hơn 5 ký tự!');
	 }
	 else {
	 	$('.alertNewPsw').text('');
	 }
	 if (rePsw.length == 0) {
	  $('.alertRePsw').text('Bạn chưa xác nhận mật khẩu mới!');
	 } else if (rePsw != newPsw) {
	  $('.alertRePsw').text('Mật khẩu không khớp!');
	 }
	 else {
	 	$('.alertRePsw').text('');
	 }
	var Putdata = {
		"username": username,
		"password": oldPsw,
		"newPsw": newPsw,
	}
	if (oldPsw != 0 && newPsw == rePsw) {
	$.ajax({
		url: 'https://project-tthhn.appspot.com/admin',
		type: "PUT",
		data: Putdata,
		headers: {
			Authorization : token
		},
		success: function(reponse) {
				$('#password_modal').modal('hide');
					swal("Thành công!", "Đổi mật khẩu thành công!", "success");
				},
				error: function() {
					swal("Lỗi!", "Có lỗi xảy ra!", "error");
			}
		});
	}
});


// CHECK TOKKEN DIE

$(document).ready(function(){
	$.ajax({
	url: 'https://project-tthhn.appspot.com/_api/v1/course',
	type: "POST",
	headers: {
        "Authorization": token
    },
		success: function(reponse) {
			$('#tokenok').attr('style','')
			$('.tokenoktitle').attr('style','')
		},
		error: function(reponse) {
			$('#tokenfail').attr('style','')
			$('.coursetokenfail').attr('disabled','disabled');
			$('.tokenfailtitle').attr('style','')
		}
	});
});




























var Dashboard = function () {
	var global = {
		tooltipOptions: {
			placement: "right"
		},
		menuClass: ".c-menu"
	};

	var menuChangeActive = function menuChangeActive(el) {
		var hasSubmenu = $(el).hasClass("has-submenu");
		$(global.menuClass + " .is-active").removeClass("is-active");
		$(el).addClass("is-active");

		// if (hasSubmenu) {
		// 	$(el).find("ul").slideDown();
		// }
	};

	var sidebarChangeWidth = function sidebarChangeWidth() {
		var $menuItemsTitle = $("li .menu-item__title");

		$("body").toggleClass("sidebar-is-reduced sidebar-is-expanded");
		$(".hamburger-toggle").toggleClass("is-opened");

		if ($("body").hasClass("sidebar-is-expanded")) {
			$('[data-toggle="tooltip"]').tooltip("destroy");
		} else {
			$('[data-toggle="tooltip"]').tooltip(global.tooltipOptions);
		}
	};

	return {
		init: function init() {
			$(".js-hamburger").on("click", sidebarChangeWidth);

			$(".js-menu li").on("click", function (e) {
				menuChangeActive(e.currentTarget);
			});

			$('[data-toggle="tooltip"]').tooltip(global.tooltipOptions);
		}
	};
}();

Dashboard.init();


// LOGIN FORM

!function(a){function b(b,d){function e(){if(w){$canvas=a('<canvas class="pg-canvas"></canvas>'),v.prepend($canvas),p=$canvas[0],q=p.getContext("2d"),f();for(var b=Math.round(p.width*p.height/d.density),c=0;b>c;c++){var e=new l;e.setStackPos(c),x.push(e)}a(window).on("resize",function(){h()}),a(document).on("mousemove",function(a){y=a.pageX,z=a.pageY}),B&&!A&&window.addEventListener("deviceorientation",function(){D=Math.min(Math.max(-event.beta,-30),30),C=Math.min(Math.max(-event.gamma,-30),30)},!0),g(),o("onInit")}}function f(){p.width=v.width(),p.height=v.height(),q.fillStyle=d.dotColor,q.strokeStyle=d.lineColor,q.lineWidth=d.lineWidth}function g(){if(w){s=a(window).width(),t=a(window).height(),q.clearRect(0,0,p.width,p.height);for(var b=0;b<x.length;b++)x[b].updatePosition();for(var b=0;b<x.length;b++)x[b].draw();E||(r=requestAnimationFrame(g))}}function h(){for(f(),i=x.length-1;i>=0;i--)(x[i].position.x>v.width()||x[i].position.y>v.height())&&x.splice(i,1);var a=Math.round(p.width*p.height/d.density);if(a>x.length)for(;a>x.length;){var b=new l;x.push(b)}else a<x.length&&x.splice(a);for(i=x.length-1;i>=0;i--)x[i].setStackPos(i)}function j(){E=!0}function k(){E=!1,g()}function l(){switch(this.stackPos,this.active=!0,this.layer=Math.ceil(3*Math.random()),this.parallaxOffsetX=0,this.parallaxOffsetY=0,this.position={x:Math.ceil(Math.random()*p.width),y:Math.ceil(Math.random()*p.height)},this.speed={},d.directionX){case"left":this.speed.x=+(-d.maxSpeedX+Math.random()*d.maxSpeedX-d.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*d.maxSpeedX+d.minSpeedX).toFixed(2);break;default:this.speed.x=+(-d.maxSpeedX/2+Math.random()*d.maxSpeedX).toFixed(2),this.speed.x+=this.speed.x>0?d.minSpeedX:-d.minSpeedX}switch(d.directionY){case"up":this.speed.y=+(-d.maxSpeedY+Math.random()*d.maxSpeedY-d.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*d.maxSpeedY+d.minSpeedY).toFixed(2);break;default:this.speed.y=+(-d.maxSpeedY/2+Math.random()*d.maxSpeedY).toFixed(2),this.speed.x+=this.speed.y>0?d.minSpeedY:-d.minSpeedY}}function m(a,b){return b?void(d[a]=b):d[a]}function n(){v.find(".pg-canvas").remove(),o("onDestroy"),v.removeData("plugin_"+c)}function o(a){void 0!==d[a]&&d[a].call(u)}var p,q,r,s,t,u=b,v=a(b),w=!!document.createElement("canvas").getContext,x=[],y=0,z=0,A=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),B=!!window.DeviceOrientationEvent,C=0,D=0,E=!1;return d=a.extend({},a.fn[c].defaults,d),l.prototype.draw=function(){q.beginPath(),q.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,d.particleRadius/2,0,2*Math.PI,!0),q.closePath(),q.fill(),q.beginPath();for(var a=x.length-1;a>this.stackPos;a--){var b=x[a],c=this.position.x-b.position.x,e=this.position.y-b.position.y,f=Math.sqrt(c*c+e*e).toFixed(2);f<d.proximity&&(q.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY),d.curvedLines?q.quadraticCurveTo(Math.max(b.position.x,b.position.x),Math.min(b.position.y,b.position.y),b.position.x+b.parallaxOffsetX,b.position.y+b.parallaxOffsetY):q.lineTo(b.position.x+b.parallaxOffsetX,b.position.y+b.parallaxOffsetY))}q.stroke(),q.closePath()},l.prototype.updatePosition=function(){if(d.parallax){if(B&&!A){var a=(s-0)/60;pointerX=(C- -30)*a+0;var b=(t-0)/60;pointerY=(D- -30)*b+0}else pointerX=y,pointerY=z;this.parallaxTargX=(pointerX-s/2)/(d.parallaxMultiplier*this.layer),this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10,this.parallaxTargY=(pointerY-t/2)/(d.parallaxMultiplier*this.layer),this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10}switch(d.directionX){case"left":this.position.x+this.speed.x+this.parallaxOffsetX<0&&(this.position.x=v.width()-this.parallaxOffsetX);break;case"right":this.position.x+this.speed.x+this.parallaxOffsetX>v.width()&&(this.position.x=0-this.parallaxOffsetX);break;default:(this.position.x+this.speed.x+this.parallaxOffsetX>v.width()||this.position.x+this.speed.x+this.parallaxOffsetX<0)&&(this.speed.x=-this.speed.x)}switch(d.directionY){case"up":this.position.y+this.speed.y+this.parallaxOffsetY<0&&(this.position.y=v.height()-this.parallaxOffsetY);break;case"down":this.position.y+this.speed.y+this.parallaxOffsetY>v.height()&&(this.position.y=0-this.parallaxOffsetY);break;default:(this.position.y+this.speed.y+this.parallaxOffsetY>v.height()||this.position.y+this.speed.y+this.parallaxOffsetY<0)&&(this.speed.y=-this.speed.y)}this.position.x+=this.speed.x,this.position.y+=this.speed.y},l.prototype.setStackPos=function(a){this.stackPos=a},e(),{option:m,destroy:n,start:k,pause:j}}var c="particleground";a.fn[c]=function(d){if("string"==typeof arguments[0]){var e,f=arguments[0],g=Array.prototype.slice.call(arguments,1);return this.each(function(){a.data(this,"plugin_"+c)&&"function"==typeof a.data(this,"plugin_"+c)[f]&&(e=a.data(this,"plugin_"+c)[f].apply(this,g))}),void 0!==e?e:this}return"object"!=typeof d&&d?void 0:this.each(function(){a.data(this,"plugin_"+c)||a.data(this,"plugin_"+c,new b(this,d))})},a.fn[c].defaults={minSpeedX:.1,maxSpeedX:.7,minSpeedY:.1,maxSpeedY:.7,directionX:"center",directionY:"center",density:1e4,dotColor:"#666666",lineColor:"#666666",particleRadius:7,lineWidth:1,curvedLines:!1,proximity:100,parallax:!0,parallaxMultiplier:5,onInit:function(){},onDestroy:function(){}}}(jQuery),/**
 * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 * @see: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @see: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @license: MIT license
 */
function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}();

$(function(){
            
    $('#particles').particleground({
        minSpeedX: 0.1,
        maxSpeedX: 0.7,
        minSpeedY: 0.1,
        maxSpeedY: 0.7,
        directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
        directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
        density: 10000, // How many particles will be generated: one particle every n pixels
        dotColor: '#eee',
        lineColor: '#eee',
        particleRadius: 7, // Dot size
        lineWidth: 1,
        curvedLines: true,
        proximity: 100, // How close two dots need to be before they join
        parallax: false
    });

});

// UPLOAD ẢNH

$(document).on('click', '#close-preview', function(){ 
    $('.image-preview').popover('hide');
    // Hover befor close the preview
    $('.image-preview').hover(
        function () {
           $('.image-preview').popover('show');
        }, 
         function () {
           $('.image-preview').popover('hide');
        }
    );    
});

$(function() {
    // Create the close button
    var closebtn = $('<button/>', {
        type:"button",
        text: 'x',
        id: 'close-preview',
        style: 'font-size: initial;',
    });
    closebtn.attr("class","close pull-right");
    // Set the popover default content
    $('.image-preview').popover({
        trigger:'manual',
        html:true,
        title: "<strong>Đang Tải Lên...Vui Lòng Chờ...</strong>",
        content: "Không có ảnh nào được chọn!",
        placement:'bottom'
    });
    // Clear event
    $('.image-preview-clear').click(function(){
        $('.image-preview').attr("data-content","").popover('hide');
        $('.image-preview-filename').val("");
        $('.image-preview-clear').hide();
        $('.image-preview-input input:file').val("");
        $(".image-preview-input-title").text("Browse"); 
    }); 
    // Create the preview image
    $(".image-preview-input input:file").change(function (){     
        var img = $('<img/>', {
            id: 'dynamic',
            width:250,
            height:200
        });      
        var file = this.files[0];
        var reader = new FileReader();
        // Set preview image into the popover data-content
        reader.onload = function (e) {
            $(".image-preview-input-title").text("Thay Đổi");
            $(".image-preview-clear").show();
            $(".image-preview-filename").val(file.name);            
            img.attr('src', e.target.result);
            $(".image-preview").attr("data-content",$(img)[0].outerHTML).popover("show");
        }        
        reader.readAsDataURL(file);
    });  
});