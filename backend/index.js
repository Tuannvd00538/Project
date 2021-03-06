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
var Order = require('./models/schemaOrder');
var OrderDetail = require('./models/schemaOrderDetail');
// PayPal SDK
var Paypal = require('paypal-express-checkout');
var username = 'admin_api1.tthhn.vn';
var password = 'DCG6MRD69U9V6ATK';
var signature = 'ACUe-E7Hjxmeel8FjYAtjnx-yjHAAB9-1MtUdhHWEQIKwTLzNfI9bh67';
var paypal = Paypal.init(username
    , password
    , signature
    , 'https://project-tthhn.appspot.com/return-paypal'
    , 'https://project-tthhn.appspot.com'
    , true);
app.get('/paypal', function(req, res){
    var invoiceNumber = req.query.orderID;
    paypal.pay(invoiceNumber, req.query.totalPrice, 'Course', 'USD', true, [req.query.customerId, 'moreData'], function(err, url) {
    if (err) {
            console.log(err);
            return;
        }
        res.redirect(url);
    });
});
app.get('/return-paypal', function(req, res){
    var token = req.query.token;
    var PayerID = req.query.PayerID;
    paypal.detail(token, PayerID, function(err, data, invoiceNumber, price) {
        var str = data.CUSTOM;
        var customerId = str.split("|")[3];
        if (err) {
                console.log(err);
                return;
            }
        console.log(data);
        if (data.success){
           Order.findByIdAndUpdate(invoiceNumber, {$set: {status: 2}}, function(err, result){
                if(err){
                    console.log(err);
                }
                OrderDetail.update({orderID: invoiceNumber}, {$set: {status: 2}}, {multi: true}, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    res.redirect('https://tthhnvn.appspot.com/pages/payment_success.html?orderID=' + invoiceNumber + '&customerId=' + customerId);
                })
            }); 
        } else {
            res.redirect('https://tthhnvn.appspot.com/pages/payment_error.html?orderID=' + invoiceNumber + '&customerId=' + customerId);
        }
    });
});
// End PayPal SDK
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
var orderRoute = require('./routes/orderRoute');
orderRoute(app);
app.get('/', (req, res) => res.send('Chào mừng bạn đến với server của Siin Đẹp Trai, đừng nghịch ngợm hay phá phách gì nhé :))'));
app.listen(8080, function(){
	console.log('Port 8080: cứ thấy số 200 trả về là thằng code server auto đẹp trai :)');
});