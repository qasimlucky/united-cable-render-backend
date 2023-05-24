var router = require('express').Router();

const { 
    getOrders,
    AddOrders

    
} = require('../../../controllers/web/sale/orders-controller');


router.get('/get',getOrders);
router.post('/add',AddOrders);

module.exports = router;