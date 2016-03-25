// CategoryController.js
module.exports = {
    find: function(req, res) {
        var categories = [{
            id: 1,
            name: 'Clothes',
            created: new Date(),
            modified: new Date()
        }];

        res.json(categories);
    }
};
