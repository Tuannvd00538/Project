$(document).ready(function () {
  $('.btn').click(function () {
    var username = $('#username').val();
    var password = $('#password').val();
    var repassword = $('#repassword').val();
    var email = $('#email').val();
    var validateEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (username.length == 0) {
      $('.alertMsgUser').text('Bạn chưa nhập username!');
    } else if (username.length < 5) {
      $('.alertMsgUser').text('Username phải lớn hơn 5 ký tự!');
    } else {
      $('.alertMsgUser').attr('style', 'display:none;');
    }
    if (password.length == 0) {
      $('.alertMsgPass').text('Bạn chưa nhập mật khẩu!');
    } else if (password.length < 5) {
      $('.alertMsgPass').text('Mật khẩu phải lớn hơn 5 ký tự!');
    } else {
      $('.alertMsgPass').attr('style', 'display: none');
    }
    if (repassword.length == 0) {
      $('.alertMsgRePass').text('Bạn chưa nhập lại mật khẩu!');
    } else if (repassword != password) {
      $('.alertMsgRePass').text('Mật khẩu không khớp!');
    } else {
      $('.alertMsgRePass').attr('style', 'display: none');
    }
    if (email.length == 0) {
      $('.alertMsgEmail').text('Bạn chưa nhập email!');
    } else if(!validateEmail.test(email)) {
        $('.alertMsgEmail').text('Email chưa đúng định dạng!');
    } else {
        $('.alertMsgEmail').attr('style', 'display: none');
    }
  });
});