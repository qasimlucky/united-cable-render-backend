var router = require('express').Router();

const { 
    getUser,
    createUser,
    editUser,
    getUserRole,
    
} = require('../../../controllers/web/user/user-controller');


router.get('/get',getUser);
router.post('/create',createUser);
router.post('/edit',editUser);
router.get('/role',getUserRole);

module.exports = router;