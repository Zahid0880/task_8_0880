const express = require('express');
const router = express.Router();

// Simulated Database
const products = [
  { id: 1, name: 'Product 1', price: 25 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 40 }
];

// Route for displaying products
router.get('/products', (req, res) => {
  res.json(products);
});

// Route for adding a product to the cart (simulated cart)
router.post('/cart/add/:productId', authenticateUser, (req, res) => {
  // ... (Same as in your main file)
});

// Route to view product details by ID
router.get('/products/:id', (req, res) => {
  // ... (Same as in your main file)
});

module.exports = router;
