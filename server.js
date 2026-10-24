const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
if (process.env.MONGO_URI) {
    mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 5000 // Timeout after 5s
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('MongoDB connection error (Starting in Mock Mode):', err.message);
    });
} else {
    console.log('No MONGO_URI found. Starting in Mock Mode.');
}

const mockProducts = require('./mock_data');

// Routes

// 1. GET /products -> fetch all products
app.get('/products', async (req, res) => {
    try {
        // If DB not connected, use mock immediately
        if (mongoose.connection.readyState !== 1) {
            console.log('DB not connected. Serving mock data.');
            return res.json(mockProducts);
        }
        
        let products = await Product.find();
        if (!products || products.length === 0) {
            console.log('No products found in DB. Serving mock data.');
            products = mockProducts;
        }
        res.json(products);
    } catch (err) {
        console.error('Database error, serving mock data:', err.message);
        res.json(mockProducts);
    }
});

// 2. GET /products/:id -> fetch single product details
app.get('/products/:id', async (req, res) => {
    try {
        const pid = req.params.id;
        
        // If DB not connected, search mock
        if (mongoose.connection.readyState !== 1) {
            const mockP = mockProducts.find(p => String(p.id) === String(pid) || String(p._id) === String(pid));
            if (mockP) return res.json(mockP);
            return res.status(404).json({ message: 'Product not found in Mock Data' });
        }

        let product = await Product.findById(pid);
        if (!product) {
            // Fallback to mock if not in DB
            const mockP = mockProducts.find(p => String(p.id) === String(pid));
            if (mockP) return res.json(mockP);
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        // Final fallback to mock if ID format might be wrong for MongoDB but right for Mock
        const mockP = mockProducts.find(p => String(p.id) === String(req.params.id));
        if (mockP) return res.json(mockP);
        res.status(500).json({ message: err.message });
    }
});

// 3. POST /products -> add new product (admin)
app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 4. PUT /products/:id -> update product
app.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 5. DELETE /products/:id -> delete product
app.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Keep process alive
setInterval(() => {}, 10000);
