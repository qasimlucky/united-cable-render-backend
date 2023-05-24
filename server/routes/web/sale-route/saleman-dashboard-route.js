var router = require('express').Router();

const { 
    getSaleManDashBoardData,   
} = require('../../../controllers/web/sale/saleman-dashboard');


router.get('/',getSaleManDashBoardData);

module.exports = router;