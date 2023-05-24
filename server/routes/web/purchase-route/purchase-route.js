var router = require('express').Router();

const { 
    AddPurchase,
    getPurchase,
    
    
} = require('../../../controllers/web/Purchase/purchase-controller');

router.post('/add',AddPurchase);
router.get('/get',getPurchase);


module.exports = router;