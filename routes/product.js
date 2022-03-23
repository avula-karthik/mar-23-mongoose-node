const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
router.get('/', productController.getProducts);
router.post('/', productController.addProduct);
router.put('/:_id', productController.updateProduct);
router.delete('/:_id', productController.deleteProductById);
router.get('/:_id', productController.getProductById);
router.get('/productsearch/:name', productController.getProductByName);
router.get(
    '/productsearch/availability/:availability',
    productController.getProductByAvailability
);
router.get('/productsearch/price/:price', productController.getProductByPrice);
module.exports = router;
