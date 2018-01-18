$(document).ready(function () {
    $('#btnSubmit').click(function () {
        var username = $('#userName').val();
        var password = $('#password').val();
        var rePassword = $('#rePassword').val();
        var email = $('#email').val();
        //username
        if (username.length == 0) {
            $('#errorUsername').text('Vui lòng nhập họ và tên');
            $('#errorUsername').css('color', 'red');
        } else 
        if (username.length < 8) {
            $('#errorUsername').text('họ và tên phải dài hơn 7 ký tự!');
            $('#errorUsername').css('color', 'red');
        } else
        if (username.length > 25) {
            $('#errorUsername').text('họ và tên phải ngắn hơn 24 ký tự!');
            $('#errorUsername').css('color', 'red');
        }
        //password
        if (password.length == 0) {
            $('#errorPassword').text('Vui lòng nhập mật khẩu');
            $('#errorPassword').css('color', 'red');
        } else 
        if (password.length < 8) {
            $('#errorPassword').text('Mật khẩu phải dài hơn 7 ký tự!');
            $('#errorPassword').css('color', 'red');
        } else
        if (password.length > 25) {
            $('#errorPassword').text('Mật khẩu phải ngắn hơn 24 ký tự!');
            $('#errorPassword').css('color', 'red');
        }
        //rePassword
        if (rePassword != password) {
            $('#errorRePassword').text('Mật Khẩu Không Trùng Nhau!');
            $('#errorRePassword').css('color', 'red');
        }
        //email
        if (email.length == 0) {
            $('#errorEmail').text('Vui lòng nhập Email và đúng định dạng!');
            $('#errorEmail').css('color', 'red');
        }
    });
});