const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    category: { type: String, required: true }, // e.g., Kurta, Saree, Lehenga
    fabric: { type: String, required: true }, // e.g., Cotton, Silk
    sizes: { type: [String], required: true }, // e.g., ["S", "M", "L", "XL"]
    colors: { type: [String], default: [] },
    images: { type: [String], required: true }, // [img1.jpg, img2.jpg]
    description: { type: String, required: true },
    stock: { type: Number, default: 10 },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
