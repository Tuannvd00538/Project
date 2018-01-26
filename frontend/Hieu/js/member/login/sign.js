$(document).ready(function () {
  $('.btn').click(function () {
    var username = $('#username').val();
    var password = $('#password').val();
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
    var login = {
      "username": username,
      "password": password
    }
    if (username.length > 4 && password.length > 4) {
      $.ajax({
        url: 'https://project-tthhn.appspot.com/_api/v1/authentication',
        type: "POST",
        data: login,
        success: function (response) {
          localStorage.setItem('username', username);
          localStorage.setItem('token', response.token);
          window.location = '/';
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert(jqXHR.responseJSON.message);
        }
    });
    }
  });
})