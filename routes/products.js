const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/', productsController.allProducts);
router.get('/:id', productsController.byId);
router.post('/', productsController.create);
module.exports = router;