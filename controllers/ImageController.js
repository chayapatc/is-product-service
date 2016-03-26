// ImageController.js
module.exports = {
    upload: function(req, res) {
    	var baseUrl = req.protocol + '://' + req.get('host');

        res.json({
        	filename: req.file.originalname,
        	path: baseUrl + '/image/' + req.file.originalname,
        	size: req.file.size
        });
    }
};
