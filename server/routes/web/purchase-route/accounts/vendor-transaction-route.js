var router = require('express').Router();
const multer  = require('multer');
const path = require("path");

const { 
    getTransaction,
    addAmountTransaction,
    transactionstorage
} = require('../../../../controllers/web/Purchase/accounts/vendor-transaction');

const maxSize = 1 * 1000 * 1000 *10000;
var RouteUploadTransactionImage = multer({ storage: transactionstorage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb){
    
        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);
  
        var extname = filetypes.test(path.extname(
                    file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        }else{            
          cb("Error: File upload only supports the " + "following filetypes - " + filetypes); 
        }
      
      } 
}).single('file');


router.post('/get',getTransaction);
router.post('/add-amount',RouteUploadTransactionImage,addAmountTransaction);

module.exports = router;