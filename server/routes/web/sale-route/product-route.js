var router = require('express').Router();

const { 
    addSaleProductCategroy,
    addSaleProductType,
    getSaleProductCategroy,
    getSaleProductType,
    addSalePacking,
    addSaleUnit,
    getSaleProductUnit,
    getSaleProductPacking,
    addSaleProductSize,
    getSaleProductSize,
    addSaleProductName,
    getSaleProductName,
    addSaleProduct,
    getSaleProduct,
    
} = require('../../../controllers/web/sale/sale-product-controller');


router.post('/categroy/add',addSaleProductCategroy);
router.post('/type/add',addSaleProductType);
router.post('/packing/add',addSalePacking);
router.post('/unit/create',addSaleUnit);
router.post('/size/create',addSaleProductSize);
router.post('/name/create',addSaleProductName);
router.post('/create',addSaleProduct);
router.get('/type/get',getSaleProductType);
router.get('/categroy/get',getSaleProductCategroy);
router.get('/unit/get',getSaleProductUnit);
router.get('/packing/get',getSaleProductPacking);
router.get('/size/get',getSaleProductSize);
router.get('/name/get',getSaleProductName);
router.get('/get',getSaleProduct);

module.exports = router;