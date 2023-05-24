var router = require('express').Router();

const { 
    
    getDashBoardData,
    
} = require('../../../controllers/web/admin-dashboard/admin-dashboard-controller');


router.get('/',getDashBoardData);


module.exports = router;