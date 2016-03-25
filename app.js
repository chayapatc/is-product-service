var express = require('express');
var app = express();

// config
var config = require('./config.js');

// controllers
var ProductController = require('./controllers/ProductController.js');
var CategoryController = require('./controllers/CategoryController.js');
var ImageController = require('./controllers/ImageController.js');

app.get('/category', CategoryController.find);
app.get('/product', ProductController.find);
app.post('/image/upload', ImageController.upload);

app.listen(config.port, function() {
	console.log(`app listening on port ${config.port}`);
});
