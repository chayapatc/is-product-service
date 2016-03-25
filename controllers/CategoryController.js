// CategoryController.js
module.exports = {

    find: function(req, res) {
        var Category = req.app.get('Category');

        Category.find().exec(function(err, categories) {
            if (err) {
                return res.status(500).json(err);
            }

            res.json(categories);
        });
    },

    findById: function(req, res) {
        var Category = req.app.get('Category');
        var id = req.params.id;

        if (!id) {
            return res.status(500).json({
                message: 'Category not found'
            });
        }

        Category.findOne({ id: id }).exec(function(err, product) {
            if (err) {
                return res.status(500).json(err);
            }

            res.json(product);
        });
    },

    create: function(req, res) {
        var Category = req.app.get('Category');

        Category.create(req.body, function(err, product) {
            if (err) {
                return res.status(500).json(err);
            }

            res.json(product);
        })
    },

    delete: function(req, res) {
        var Category = req.app.get('Category');
        var id = req.params.id;

        if (!id) {
            return res.status(500).json({
                message: 'Category not found'
            });
        }

        Category.remove({ id: id }, function(err) {
            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: `Category id ${id} has been deleted.`
            });
        });
    }

};
