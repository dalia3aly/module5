const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/api/all-products', productsController.fetchAllProducts);

module.exports = router;
