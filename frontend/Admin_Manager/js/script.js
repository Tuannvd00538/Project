var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
// $routeProvider
//   .when('/home/', {
//     templateUrl: 'pages/home.html',
//     controller: 'myCtrl'
//   })
//   .when('/addcourse/', {
//     templateUrl: 'pages/form_course.html',
//     controller: 'myCtrl'
//   })
//   .when('/listcourse/', {
//     templateUrl: 'pages/listcourse.html',
//     controller: 'myCtrl'
//   })
//   .when('/listgiangvien/', {
//     templateUrl: 'pages/listgiangvien.html',
//     controller: 'myCtrl'
//   })
//   .when('/themgiangvien/', {
//     templateUrl: 'pages/form_giangvien.html',
//     controller: 'myCtrl'
//   });
// });



  $routeProvider
  .when("/home", {
    templateUrl : "pages/home.html"
  })
  .when("/addcourse", {
    templateUrl : "pages/form_course.html"
  })
  .when("/listcourse", {
    templateUrl : "pages/listcourse.html"
  })
  .when("/themgiangvien", {
    templateUrl : "pages/form_giangvien.html"
  }).when("/listgiangvien", {
    templateUrl : "pages/listgiangvien.html"
  }).otherwise({
      redirectTo: 'home'
 	});
});

// LOAD KHÓA HỌC
$(document).ready(function(){
	$.ajax({
		url: 'https://project-tthhn.appspot.com/_api/v1/course?page=1&limit=50',
		type: "GET",
		data: {
			},
		success: function(reponse) {
			var content = '';
			var viewindex = '';
			// var listchude = '';
			viewindex += '<div><h1>Khóa Học Mới Nhất : <strong style="color: red"><i>'+ reponse.data[reponse.data.length - 1].TieuDe +'</i></strong></h1></div>';			
			// for (var i = 0; i < reponse.data.length; i++)
			for (var i = reponse.data.length - 1; i >=0; i--){
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
			viewindex2 += '<div><h1>Giảng Viên Mới Nhất : <strong style="color: red"><i>'+ reponse.data[reponse.data.length - 1].TenGiangVien +'</i></strong></h1></div>';
			var listgiangvien = '';
			for (var i = reponse.data.length - 1; i >=0; i--) {
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

				listgiangvien += '<option data-idgv="' + reponse.data[i]._id + '">' + reponse.data[i].TenGiangVien + '</option>';
			}
			$('#listgiangvien').html(content);
			$('#giangvien').html(listgiangvien);
			$('#viewindex2').html(viewindex2);
				},
				error: function() {
			}
		});
});

// THÊM KHÓA HỌC

$(document).ready(function(){
	$("#giangvien").change(function () {
	     var ID = $(this).find(':selected').data('idgv');
	     localStorage.setItem('idGV', ID);
	});
	// $('#anhmota').hide();
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
		// SEND DATA
	$.ajax({
	url: 'https://project-tthhn.appspot.com/_api/v1/course',
	type: "POST",
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
		},
		error: function() {

			}
		});
	});

	$('#themgiangvien').click(function () {
		// GET INPUT
			var magiangvien = $('#magiangvien').val(); 
			var tengiangvien = $('#tengiangvien').val();
			var chudegiangday = $('#chudegiangday').val();
			var mota = $('#mota').val();
			var sokhoahoc = $('#sokhoahoc').val();
			var anhdaidien = $('#anhdaidien').val();
			var themgiangvien = $('#themgiangvien').val();
		// SEND DATA
	$.ajax({
	url: 'https://project-tthhn.appspot.com/_api/v1/giangvien',
	type: "POST",
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
		},
		error: function() {

			}
		});
	});
});



// XÓA KHÓA HỌC

function xoakhoahoc(id) {
	$.ajax({
	url: 'https://project-tthhn.appspot.com/_api/v1/course/'+id+'',
	type: "DELETE",
	data: {},
		success: function(reponse) {
			swal("Xóa Thành Công", "Đã Xóa Khóa Học", "success");
			location.reload(700);
		},
		error: function() {
		}
	});
}

// SỬA KHÓA HỌC


function suakhoahoc(id) {
	$.ajax({
	url: 'https://project-tthhn.appspot.com/_api/v1/course/'+id+'',
	type: "PUT",
	data: {},
		success: function(reponse) {
			$('#makhoahocput').val(reponse.MaKhoaHoc); 
			$('#tieudeput').val(reponse.TieuDe);
			$('#motaput').val(reponse.MoTa);
			$('#loiichput').val(reponse.LoiIch);
			$('#gioithieuput').val(reponse.GioiThieu);
			$('#giangvien').val(reponse.GiangVien);
			$('#chudeput').val(reponse.ChuDe);
			$('#doituongput').val(reponse.DoiTuong);
			$('#giakhoahocput').val(reponse.GiaKhoaHoc);
			$('#giamgiaput').val(reponse.Sale);
			$('#sobaigiangput').val(reponse.SoBaiGiang);
			$('#thoigianput').val(reponse.SoPhutHoc);
			$('#tukhoaput').val(reponse.TuKhoa);
			$('#anhmotaput').val(reponse.Thumbnail);
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

// XÓA GIẢNG VIÊN

function xoagiangvien(id) {
	$.ajax({
	url: 'https://project-tthhn.appspot.com/_api/v1/giangvien/'+id+'',
	type: "DELETE",
	data: {},
		success: function(reponse) {
			swal("Xóa Thành Công", "Đã Xóa Giảng Viên", "success");
			location.reload(700);
		},
		error: function() {
		}
	});
}

// SỬA GIẢNG VIÊN

function suagiangvien(id) {
	$.ajax({
	url: 'https://project-tthhn.appspot.com/_api/v1/giangvien/'+id+'',
	type: "PUT",
	data: {},
		success: function(reponse) {
			$('#magiangvienput').val(reponse.MaGiangVien); 
			$('#tengiangvienput').val(reponse.TenGiangVien);
			$('#chudegiangdayput').val(reponse.ChuDeGiangDay);
			$('#motaput').val(reponse.MoTa);
			$('#sokhoahocput').val(reponse.SoKhoaHoc);
			$('#anhdaidienput').val(reponse.AnhDaiDien);
			$('#gvmodal').modal();

		$('#saveputgv').click(function () {

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
	$('#logout').click(function () {
		if(confirm("Đăng Xuất")){
		localStorage.removeItem("KeyLogin");
		location.reload();
	}
	});

	$('#loginadmin').click(function () {
		var username = $('#username').val();
	var password = $('#password').val();
		$.ajax({
		url: 'https://project-tthhn.appspot.com/_api/v1/Authentication',
		type: "POST",
		data: {
				"username" : username,
				"password" : password
				},
			success: function(reponse) {
				localStorage.setItem("KeyLogin", reponse.tokenKey);
				$('#indexlogin').hide();
				swal("Thành Công", "Đăng Nhập Thành Công", "success");
				location.reload(700);
			},
			error: function() {

			}
		});
	});
});

	

	


var key = localStorage.getItem("KeyLogin");
		if (key == undefined && key == null) {
			$('#index').hide();
			$('#indexlogin').show();	
		}
		else {
			$('#index').show();
			$('#indexlogin').hide();
		}



























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

// LOADING PAGE

$body = $("body");
$(document).on({
    ajaxStart: function() { $body.addClass("loading");   },
    ajaxStop: function() { $body.removeClass("loading"); }    
});

