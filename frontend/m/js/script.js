$(document).ready(function(){
	var page = 1;
	allkhoahocsale(page);
	allkhoahocmoi(page);
	allkhoahoc(page);
	khoahoc(page);
	khoahocmoi(page);
	khoahochot(page);
	function khoahoc() {
			$.ajax({
		url: 'https://project-tthhn.appspot.com/_api/v1/course?page='+ page +'&limit=5',
		type: "GET",
		data: {
			},
		success: function(reponse) {
			localStorage.setItem('lengthpage',reponse.data.length)
			var content = '';
			// for (var i = reponse.data.length - 1; i >=0; i--)
			for (var i = 0; i < reponse.data.length; i++){
				var id = reponse.data[i]._id;
				var giasale = (reponse.data[i].GiaKhoaHoc / 100) * (100 - reponse.data[i].Sale);
					content += '<div class="course">';
						content += '<div class="img">';
							content += '<img src="'+ reponse.data[i].Thumbnail +'" title="'+ reponse.data[i].TieuDe +'">';
						content += '</div>';
						content += '<div class="titlecourse">';
							content += '<p>'+ reponse.data[i].TieuDe +'</p>';
						content += '</div>';
						content += '<div class="row gv">';
							content += '<div class="giangvien col-md-6 col-xs-6">';
								content += '<a href="javascript:void(0)">'+ reponse.data[i].GiangVien +'</a>';
							content += '</div>';
							content += '<div class="starBlue col-md-6 col-xs-6">';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
							content += '</div>';
						content += '</div>';
						content += '<div class="price">';
							content += '<span class="sell-price">'+ Math.round(giasale) +'<sup>$</sup></span>';
							content += '<span class="old-price">'+ reponse.data[i].GiaKhoaHoc +'<sup>$</sup></span>';
							content += '<span class="discount person">-'+ reponse.data[i].Sale +'%</span>';
						content += '</div>';
					content += '</div>';
			}
			$('#course').html(content);
				},
				error: function() {
			}

		});
	}

	// MỚI NHẤT 

	function khoahocmoi() {
		$.ajax({
		url: 'https://project-tthhn.appspot.com/_api/v1/course/new?page='+ page +'&limit=5',
		type: "GET",
		data: {
			},
		success: function(reponse) {
			localStorage.setItem('lengthpage',reponse.data.length)
			var content = '';
			// for (var i = reponse.data.length - 1; i >=0; i--)
			for (var i = 0; i < reponse.data.length; i++){
				var id = reponse.data[i]._id;
				var giasale = (reponse.data[i].GiaKhoaHoc / 100) * (100 - reponse.data[i].Sale);
					content += '<div class="course">';
						content += '<div class="img">';
							content += '<img src="'+ reponse.data[i].Thumbnail +'" title="'+ reponse.data[i].TieuDe +'">';
						content += '</div>';
						content += '<div class="titlecourse">';
							content += '<p>'+ reponse.data[i].TieuDe +'</p>';
						content += '</div>';
						content += '<div class="row gv">';
							content += '<div class="giangvien col-md-6 col-xs-6">';
								content += '<a href="javascript:void(0)">'+ reponse.data[i].GiangVien +'</a>';
							content += '</div>';
							content += '<div class="starBlue col-md-6 col-xs-6">';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
							content += '</div>';
						content += '</div>';
						content += '<div class="price">';
							content += '<span class="sell-price">'+ Math.round(giasale) +'<sup>$</sup></span>';
							content += '<span class="old-price">'+ reponse.data[i].GiaKhoaHoc +'<sup>$</sup></span>';
							content += '<span class="discount person">-'+ reponse.data[i].Sale +'%</span>';
						content += '</div>';
					content += '</div>';
			}
			$('#coursenew').html(content);
				},
				error: function() {
			}

		});
	}

		// HOT NHẤT 
	function khoahochot() {
		$.ajax({
		url: 'https://project-tthhn.appspot.com/_api/v1/course/hot?page='+ page +'&limit=5',
		type: "GET",
		data: {
			},
		success: function(reponse) {
			localStorage.setItem('lengthpage',reponse.data.length)
			var content = '';
			// for (var i = reponse.data.length - 1; i >=0; i--)
			for (var i = 0; i < reponse.data.length; i++){
				var id = reponse.data[i]._id;
				var giasale = (reponse.data[i].GiaKhoaHoc / 100) * (100 - reponse.data[i].Sale);
					content += '<div class="course">';
						content += '<div class="img">';
							content += '<img src="'+ reponse.data[i].Thumbnail +'" title="'+ reponse.data[i].TieuDe +'">';
						content += '</div>';
						content += '<div class="titlecourse">';
							content += '<p>'+ reponse.data[i].TieuDe +'</p>';
						content += '</div>';
						content += '<div class="row gv">';
							content += '<div class="giangvien col-md-6 col-xs-6">';
								content += '<a href="javascript:void(0)">'+ reponse.data[i].GiangVien +'</a>';
							content += '</div>';
							content += '<div class="starBlue col-md-6 col-xs-6">';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
							content += '</div>';
						content += '</div>';
						content += '<div class="price">';
							content += '<span class="sell-price">'+ Math.round(giasale) +'<sup>$</sup></span>';
							content += '<span class="old-price">'+ reponse.data[i].GiaKhoaHoc +'<sup>$</sup></span>';
							content += '<span class="discount person">-'+ reponse.data[i].Sale +'%</span>';
						content += '</div>';
					content += '</div>';
			}
			$('#coursehot').html(content);
				},
				error: function() {
			}

		});
	}

	$('#allkhoahoc').click(function () {
		window.location.href = 'pages/allkhoahoc.html'
	});

	// ALL KHOA HOC

	function allkhoahoc() {
		$.ajax({
		url: 'https://project-tthhn.appspot.com/_api/v1/course?page='+ page +'&limit=9',
		type: "GET",
		data: {
			},
		success: function(reponse) {
			localStorage.setItem('lengthpage',reponse.data.length)
			var content = '';
			// for (var i = reponse.data.length - 1; i >=0; i--)
			for (var i = 0; i < reponse.data.length; i++){
				var id = reponse.data[i]._id;
				var giasale = (reponse.data[i].GiaKhoaHoc / 100) * (100 - reponse.data[i].Sale);
					content += '<div class="course">';
						content += '<div class="img">';
							content += '<img src="'+ reponse.data[i].Thumbnail +'" title="'+ reponse.data[i].TieuDe +'">';
						content += '</div>';
						content += '<div class="titlecourse">';
							content += '<p>'+ reponse.data[i].TieuDe +'</p>';
						content += '</div>';
						content += '<div class="row gv">';
							content += '<div class="giangvien col-md-6 col-xs-6">';
								content += '<a href="javascript:void(0)">'+ reponse.data[i].GiangVien +'</a>';
							content += '</div>';
							content += '<div class="starBlue col-md-6 col-xs-6">';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
							content += '</div>';
						content += '</div>';
						content += '<div class="price">';
							content += '<span class="sell-price">'+ Math.round(giasale) +'<sup>$</sup></span>';
							content += '<span class="old-price">'+ reponse.data[i].GiaKhoaHoc +'<sup>$</sup></span>';
							content += '<span class="discount person">-'+ reponse.data[i].Sale +'%</span>';
						content += '</div>';
					content += '</div>';
			}
			$('#allcourse').html(content);
				},
				error: function() {
			}

		});
	}

	// ALL KHOA HOC MOI

	$('#allkhoahocmoi').click(function () {
		window.location.href = 'pages/allkhoahocmoi.html'
	});


	function allkhoahocmoi() {
		$.ajax({
		url: 'https://project-tthhn.appspot.com/_api/v1/course/new?page='+ page +'&limit=9',
		type: "GET",
		data: {
			},
		success: function(reponse) {
			localStorage.setItem('lengthpage',reponse.data.length)
			var content = '';
			// for (var i = reponse.data.length - 1; i >=0; i--)
			for (var i = 0; i < reponse.data.length; i++){
				var id = reponse.data[i]._id;
				var giasale = (reponse.data[i].GiaKhoaHoc / 100) * (100 - reponse.data[i].Sale);
					content += '<div class="course">';
						content += '<div class="img">';
							content += '<img src="'+ reponse.data[i].Thumbnail +'" title="'+ reponse.data[i].TieuDe +'">';
						content += '</div>';
						content += '<div class="titlecourse">';
							content += '<p>'+ reponse.data[i].TieuDe +'</p>';
						content += '</div>';
						content += '<div class="row gv">';
							content += '<div class="giangvien col-md-6 col-xs-6">';
								content += '<a href="javascript:void(0)">'+ reponse.data[i].GiangVien +'</a>';
							content += '</div>';
							content += '<div class="starBlue col-md-6 col-xs-6">';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
							content += '</div>';
						content += '</div>';
						content += '<div class="price">';
							content += '<span class="sell-price">'+ Math.round(giasale) +'<sup>$</sup></span>';
							content += '<span class="old-price">'+ reponse.data[i].GiaKhoaHoc +'<sup>$</sup></span>';
							content += '<span class="discount person">-'+ reponse.data[i].Sale +'%</span>';
						content += '</div>';
					content += '</div>';
			}
			$('#allnewcourse').html(content);
				},
				error: function() {
			}

		});
	}

		// ALL KHOA HOC KHUYẾN MÃI

	$('#allkhoahocsale').click(function () {
		window.location.href = 'pages/khoahockhuyenmai.html'
	});


	function allkhoahocsale() {
		$.ajax({
		url: 'https://project-tthhn.appspot.com/_api/v1/course/hot?page='+ page +'&limit=9',
		type: "GET",
		data: {
			},
		success: function(reponse) {
			localStorage.setItem('lengthpage',reponse.data.length)
			var content = '';
			// for (var i = reponse.data.length - 1; i >=0; i--)
			for (var i = 0; i < reponse.data.length; i++){
				var id = reponse.data[i]._id;
				var giasale = (reponse.data[i].GiaKhoaHoc / 100) * (100 - reponse.data[i].Sale);
					content += '<div class="course">';
						content += '<div class="img">';
							content += '<img src="'+ reponse.data[i].Thumbnail +'" title="'+ reponse.data[i].TieuDe +'">';
						content += '</div>';
						content += '<div class="titlecourse">';
							content += '<p>'+ reponse.data[i].TieuDe +'</p>';
						content += '</div>';
						content += '<div class="row gv">';
							content += '<div class="giangvien col-md-6 col-xs-6">';
								content += '<a href="javascript:void(0)">'+ reponse.data[i].GiangVien +'</a>';
							content += '</div>';
							content += '<div class="starBlue col-md-6 col-xs-6">';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
								content += '<span class="fa fa-star checked"></span>';
							content += '</div>';
						content += '</div>';
						content += '<div class="price">';
							content += '<span class="sell-price">'+ Math.round(giasale) +'<sup>$</sup></span>';
							content += '<span class="old-price">'+ reponse.data[i].GiaKhoaHoc +'<sup>$</sup></span>';
							content += '<span class="discount person">-'+ reponse.data[i].Sale +'%</span>';
						content += '</div>';
					content += '</div>';
			}
			$('#allkhoahocsale').html(content);
				},
				error: function() {
			}

		});
	}
});

