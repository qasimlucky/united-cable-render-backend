var router = require('express').Router();

const { 
    addCustomer,
    getCustomer 
} = require('../../../controllers/web/sale/customer-controller');


router.post('/create',addCustomer);
router.get('/get',getCustomer);

module.exports = router;