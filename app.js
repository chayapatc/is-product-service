var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// config
var config = require('./config.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// models
app.set('Product', require('./models/Product.js')(mongoose));

// controllers
var ProductController = require('./controllers/ProductController.js');
var CategoryController = require('./controllers/CategoryController.js');
var ImageController = require('./controllers/ImageController.js');

app.get('/category', CategoryController.find);
app.get('/product', ProductController.find);
app.get('/product/:id', ProductController.findById);
app.post('/product', ProductController.create);
app.delete('/product/:id', ProductController.delete);
app.post('/image/upload', ImageController.upload);

app.listen(config.port, function() {
	console.log(`app listening on port ${config.port}`);
});
