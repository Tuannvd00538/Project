$(document).ready(function () {
    $('#btnSubmit').click(function () {
        var username = $('#username').val();
        var password = $('#password').val();
        
        if (username.length == 0) {
            $('#errorname').text('Vui lòng điền tên đăng nhập!');
            $('#errorname').css('color', 'red');
        }

        if (password.length == 0) {
            $('#errorpassword').text('Vui lòng nhập mật khẩu!');
            $('#errorpassword').css('color', 'red');
        }
    });
});