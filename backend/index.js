'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto-js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds153577.mlab.com:53577/tthhngroup');
mongoose.Promise = global.Promise;

var app = express();

app.use(cors());
const fileUpload = require('express-fileupload');
const path = require('path');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(fileUpload());
app.use(express.static('./public'));
app.use(bodyParser.json());
var courseRoute = require('./routes/courseRoute');
courseRoute(app);
var accountRoute = require('./routes/accountRoute');
accountRoute(app);
var gvRoute = require('./routes/gvRoute');
gvRoute(app);
app.get('/', (req, res) => res.send('Chào mừng bạn đến với server của Siin Đẹp Trai, đừng nghịch hay phá phách gì nhé :)'))
app.listen(8080, function(){
	console.log('Port 8080: everything is going to be 200 OK!');
});