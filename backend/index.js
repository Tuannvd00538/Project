'use strict';
const express = require('express');
var multer  = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto-js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds153577.mlab.com:53577/tthhngroup');
mongoose.Promise = global.Promise;
var jwt = require('jsonwebtoken');
var app = express();
var paypal_sdk = require('paypal-rest-sdk');
app.use(cors());
const fileUpload = require('express-fileupload');
const path = require('path');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization) {
    jwt.verify(req.headers.authorization.split(' ')[0], 'RESTFULAPIs', function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

const Storage = require('@google-cloud/storage');
const storage = new Storage({
    keyFilename: './siin.json'
});
const CLOUD_BUCKET = 'tthhnvn';
const bucket = storage.bucket('tthhnvn');
function getPublicUrl(filename) {
    return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`;
}
var upload = multer({ storage: multer.memoryStorage() });
app.post('/_api/v1/images', upload.single('file'), function(req, res, next) {
    if (!req.file) {
        return next();
    }

    const gcsname = Date.now() + req.file.originalname;
    const file    = bucket.file(gcsname);

    const stream = file.createWriteStream({
        metadata: {
            contentType: req.file.mimetype
        }
    });

    stream.on('error', (err) => {
        req.file.cloudStorageError = err;
        next(err);
    });

    stream.on('finish', () => {
        req.file.cloudStorageObject = gcsname;
        file.makePublic().then(() => {
            req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
            res.status(200).send(req.file.cloudStoragePublicUrl);
        });
    });

    stream.end(req.file.buffer);
});

// PayPal SDK

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'ATGv66JpXYIQRKgfybS3AECl62BZJpBnXBpwaiIsA5neL5IOJofWObknPS5nCtLph8QVHvpDUY48tAC7',
    'client_secret': 'ELbEr6AkhwTOhKHvnFy5awDD11kiwS-acyY9MzM1iUj6PTavxSCF1UNQRdJrotET2UczcqjPBhynTDEa'
});

// End PayPal SDK

app.use(fileUpload());
app.use(express.static('./public'));
app.use(bodyParser.json());
var courseRoute = require('./routes/courseRoute');
courseRoute(app);
var accountRoute = require('./routes/accountRoute');
accountRoute(app);
var gvRoute = require('./routes/gvRoute');
gvRoute(app);
var recycleBin = require('./routes/recycleBinRoute');
recycleBin(app);
app.get('/', (req, res) => res.status(200).json({
	"MEMBER": "/_api/v1/member    ----    Method: Post (Đăng ký thành viên)",
	"MEMBER": "/_api/v1/member/:id    ---- Method: Get (Thông tin của 1 member), Put (Sửa thông tin của member (kèm authorization)), Delete (Xóa member (kèm authorization))",
	"LOGIN": "/_api/v1/authentication    ----    Method: Post (Đăng nhập thành viên), Put (Đổi mật khẩu (kèm authorization))",
	"ADMIN": "/admin    ---- Method: Post (Đăng nhập admin), Put (Đổi mật khẩu (kèm authorization))",
	"COURSE": "/_api/v1/course    ---- Method: Get (Thông tin tất cả các khóa học), Post (Thêm khóa học (kèm authorization))",
	"HOT": "/_api/v1/course/hot    ---- Method: Get (Khóa học hot nhất)",
	"NEW": "/_api/v1/course/new    ---- Method: Get (Khóa học mới nhất)",
	"FindKHOAHOC": "/_api/v1/giangvien/course/:id    ----    Method: Get (Tìm tất cả khóa học của 1 giảng viên)",
	"FindCourse": "/_api/v1/course/:id    ----    Method: Get (Thông tin của 1 khóa học), Put (Sửa thông tin của 1 khóa học (Kèm authorization)), Delete (Xóa khóa học (kèm authorization))",
	"QUERY": "/_api/v1/course/view/:key    ----    Method: Get (Tìm khóa học theo tiêu đề)",
	"CHUDE": "/_api/v1/course/chude/:key    ----    Method: Get (Tìm khóa học theo chủ đề)",
	"LECTURERS": "/_api/v1/giangvien    ----    Method: Get (Lấy ra danh sách giảng viên)",
	"INFOLECURERS": "/_api/v1/giangvien/:id    ----    Method: Get (Thông tin của 1 giảng viên), Put (Sửa thông tin giảng viên (kèm authorization)), Delete (Xóa giảng viên (kèm authorization))",
	"RECYCLEBINCOURSE": "/_api/v1/recyclebin/course    ----    Method: Get (Danh sách khóa học đã xóa)",
	"RECYCLEBINLECTURERS": "/_api/v1/recyclebin/lecturers    ----    Method: Get (Danh sách giảng viên đã xóa)",
	"RECYCLEBINMEMBER": "/_api/v1/recyclebin/member    ----    Method: Get (Danh sách thành viên đã xóa)",
	"RETURNCOURSE": "/_api/v1/recyclebin/course/:id    ----    Method: Put (Khôi phục khóa học đã xóa (Kèm authorization)), Delete (Xóa vĩnh viễn khóa học (Kèm authorization))",
	"RETURNLECTURERS": "/_api/v1/recyclebin/lecturers/:id    ----    Method: Put (Khôi phục giảng viên đã xóa (Kèm authorization)), Delete (Xóa vĩnh viễn giảng viên (Kèm authorization))",
	"RETURNLECTURERS": "/_api/v1/recyclebin/member/:id    ----    Method: Put (Khôi phục thành viên đã xóa (Kèm authorization)), Delete (Xóa vĩnh viễn thành viên (Kèm authorization))",
    "IMAGE": "/_api/v1/images    ----    Method: Post (ở client input file có name='file' :>",
    "ADMIN": "www.facebook.com/TuanMinPay    ----    Ngô Văn Tuấn"
}));
app.listen(8080, function(){
	console.log('Port 8080: everything is going to be 200 OK!');
});