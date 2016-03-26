// ProductController.js
module.exports = function(Product) {

    return {

        find: function(req, res) {
            var criteria = {};

            if (req.query.category_id) {
                criteria.category_id = req.query.category_id;
            }

            Product.find(criteria).exec(function(err, products) {
                if (err) {
                    return res.status(500).json(err);
                }

                res.json(products);
            });
        },

        findById: function(req, res) {
            var id = req.params.id;

            if (!id) {
                return res.status(500).json({
                    message: 'Product not found'
                });
            }

            Product.findOne({ id: id }).exec(function(err, product) {
                if (err) {
                    return res.status(500).json(err);
                }

                res.json(product);
            });
        },

        create: function(req, res) {
            Product.create(req.body, function(err, product) {
                if (err) {
                    return res.status(500).json(err);
                }

                res.json(product);
            })
        },

        delete: function(req, res) {
            var id = req.params.id;

            if (!id) {
                return res.status(500).json({
                    message: 'Product not found'
                });
            }

            Product.remove({ id: id }, function(err) {
                if (err) {
                    return res.status(500).json(err);
                }

                res.json({
                    message: `Product id ${id} has been deleted.`
                });
            });
        }

    };

};
