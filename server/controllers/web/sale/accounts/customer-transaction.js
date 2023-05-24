
const multer  = require('multer')
const path = require("path");
const CustomerTransaction = require('../../../../models/sale/accounts/customer-transaction');
const SaleCustomer = require('../../../../models/sale/customer');



var transactionstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, "server/public/images")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now()+".jpg");
        var filePath = file.fieldname + "-" + Date.now()+".jpg";
    } 
});

const getTransaction = async function (req, res){    
    try {
        const{customer_id} = req.body;
        const bb= await CustomerTransaction.aggregate([
            { $lookup:
             {
                from: "orders",
                localField: "order_id",
                foreignField: "order_id",
                as: "orders"
             }
           }
           ])

        const arr = []

        for(const e of bb){
            if(e.customer_id== customer_id){
                arr.push(e)
            }
        }
        res.send(arr.reverse())
    } catch (error) { 
        res.send(error)   
    }
}

const addAmountTransaction = async function (req, res){ 
    console.log(req.body)   
    try {
        console.log("add amount")
        console.log(req.body)
        const {customer_id,add_payment,opening_balance,tdate} = req.body
        
        
        var addtransaction= await HandleTransaction(customer_id,add_payment,opening_balance,req,tdate,res)
        
    } catch (error) { 
        res.send(error)   
    }
}


async function HandleTransaction(customer_id,add_payment,opening_balance,req,tdate,res){
    console.log("this is transaction strated" )
        try{
        const transactionList = await CustomerTransaction.find();

        console.log(transactionList.length)
        if (transactionList.length ==0 ){
            transaction_collection_index = 0;
            console.log(transaction_collection_index)
        }else{
            Robject =transactionList.slice(-1).pop()
            transaction_collection_index  =Robject.transaction_collection_index ;
        }
        //console.log(order_collection_index)
        var transaction_id = 'c-transaction-'+(Number(transaction_collection_index)+1);
        console.log(transaction_id)
        transaction_collection_index = (Number(transaction_collection_index)+1)
        console.log(transaction_collection_index)

        var closing_balance = (parseInt(opening_balance)-parseInt(add_payment))
        /*  console.log(closing_balance +"this closing balance")
            console.log(customer_id +"this is custumer")
            console.log(order_id + "this is order id")
            console.log(total_amount + "this is transaction amount")
            console.log(opening_balance + "this is opening") */
            var upadteaccount= await updateCustomerBalance(customer_id,closing_balance,res)
        if(req.file){
            console.log("this is image")
            const transaction_image =("https://subo-sons-backend.onrender.com/static/"+req.file.filename);
            console.log(transaction_image)
            var customer_transaction = await CustomerTransaction.create({
                transaction_id,
                transaction_collection_index,
                customer_id,
                image:transaction_image,
                transaction_type:"Debit",
                transaction_amount:add_payment,
                opening_balance,
                closing_balance,
                date:tdate
            });
        }else{
            console.log("this is else")
            var customer_transaction = await CustomerTransaction.create({
                transaction_id,
                transaction_collection_index,
                customer_id,
                transaction_type:"Debit",
                transaction_amount:add_payment,
                opening_balance,
                closing_balance,
                date:tdate
            });
        }
        
            console.log(customer_transaction)
           

        }catch(error){
            console.log(error)
        }

}

async function updateCustomerBalance(customer_id,closing_balance,res){
    try{
        const updatecaccount = await SaleCustomer.findOneAndUpdate({customer_id:customer_id},{$set :{account_balance:closing_balance}});
        if(updatecaccount){
            res.send("transaction is good")
        }
       
    }catch(error){
        console.log(error)
    }
    

}

module.exports = {
    getTransaction,
    addAmountTransaction,
    transactionstorage
}