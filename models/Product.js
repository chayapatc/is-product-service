// Product.js
module.exports = function(mongoose) {
    var entity = {
        id: Number,
        code: String,
        category_id: Number,
        name: String,
        cover_image: String,
        detail: String,
        price: Number,
        created: { type: Date, default: Date.now },
        modified: { type: Date, default: Date.now }
    };

    return mongoose.model('Product', entity);
};
