var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
var upload = multer({ 
	storage: storage
});

// config
var config = require('./config.js');
var cors = require('cors')
var mongoose = require('mongoose');
mongoose.connect(`mongodb://${config.database.host}/${config.database.name}`);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

// models
var Product = require('./models/Product.js')(mongoose);
var Category = require('./models/Category.js')(mongoose);

// controllers
var ProductController = require('./controllers/ProductController.js')(Product);
var CategoryController = require('./controllers/CategoryController.js')(Category);
var ImageController = require('./controllers/ImageController.js')();

app.get('/category', CategoryController.find);
app.get('/category/:id', CategoryController.findById);
app.post('/category', CategoryController.create);
app.delete('/category/:id', CategoryController.delete);

app.get('/product', ProductController.find);
app.get('/product/:id', ProductController.findById);
app.post('/product', ProductController.create);
app.delete('/product/:id', ProductController.delete);

app.post('/image/upload', upload.single('image'), ImageController.upload);
app.use('/image', express.static(__dirname + '/uploads'));

app.listen(config.port, function() {
	console.log(`app listening on port ${config.port}`);
});
