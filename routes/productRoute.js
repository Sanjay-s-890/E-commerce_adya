const router = require('express').Router();
const filterProducts = require('../controllers/filterProducts');
const searchProducts = require('../controllers/searchProduct');
const showProducts = require('../controllers/showProducts');

router.get('/', showProducts)
router.get('/search/:name', searchProducts)
router.get('/filter', filterProducts)

module.exports = router;