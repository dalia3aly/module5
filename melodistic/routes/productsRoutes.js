// routes/productsRoutes.js

// routes/productsRoutes.js

const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();
const { allProducts } = require('../models/productsModels');

router.get('/test', (req, res) => {
    res.json({ message: 'This is working' });
  });

router.get('/products', productsController.getProducts);
router.get('/all-products', productsController.getAllProducts); 

// Add other routes related to products here

module.exports = router;
