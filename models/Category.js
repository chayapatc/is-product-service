// Category.js
module.exports = function(mongoose) {
    var entity = {
        id: Number,
        name: String,
        created: { type: Date, default: Date.now },
        modified: { type: Date, default: Date.now }
    };

    return mongoose.model('Category', entity);
};
