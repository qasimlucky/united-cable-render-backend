var router = require('express').Router();

const { 
    addProductTitle,
    addProductCategroy,
    addProductColor,
    addProductVendor,
    getvendors,
    getProduct,
    getProductCategroy,
    getProductColor,
    addProductUnit,
    getProductUnit,
    getvendorsDetails
    
} = require('../../../controllers/web/product/product-controller');


router.post('/add',addProductTitle);
router.post('/categroy',addProductCategroy);
router.post('/color',addProductColor);
router.post('/vendor',addProductVendor);
router.post('/unit',addProductUnit);
router.post('/vendor/details',getvendorsDetails);
router.get('/vendor',getvendors);
router.get('/get',getProduct);
router.get('/categroy/get',getProductCategroy);
router.get('/color/get',getProductColor);
router.get('/unit/get',getProductUnit);


module.exports = router;