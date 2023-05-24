const express = require('express');
const app = express();
const { success, error, validation } = require("../../../helpers/apiResponse");
const { CleanData } = require("../../../helpers/cleanEmptyData");
const Purchase = require('../../../models/purchase/purchase');
const PurchaseVendor = require('../../../models/product/vendor');
const VendorTransaction = require('../../../models/purchase/accounts/vendor-transaction')


const AddPurchase = async function (req, res){    
    try {
        console.log("this is creeeateee purchase")
        console.log(req.body)

        const {product_name,purchase_amount,vendor,purchase_status,reference_number,purchase_date,product_color,product_category,product_quantity,product_unit} = req.body;

            if(req.body.vendor !== "vendor" ){
                const vendorList = await PurchaseVendor.find({vendor_id:vendor});
                console.log(vendorList)
                var opening_balance = parseInt(vendorList[0].account_balance);
                console.log(opening_balance)
                /* var vendor_name = vendorList[0].first_name;
                var vendor_phone = vendorList[0].phone_number; */
            }
            console.log("this is purchse started")
            const purchaseList = await Purchase.find();
            console.log(purchaseList.length)
            if (purchaseList.length ==0 ){
                purchase_collection_index = 0;
                console.log(purchase_collection_index)
            }else{
                Robject =purchaseList.slice(-1).pop()
                purchase_collection_index  =Robject.purchase_collection_index ;
            }
            console.log(purchase_collection_index)
            var purchase_id = 'un-cable-'+(Number(purchase_collection_index)+1);
                console.log(purchase_id)
                purchase_collection_index = (Number(purchase_collection_index)+1)
                console.log(purchase_collection_index)
            
            console.log(purchase_collection_index)
            console.log(purchase_id)
            var purchaseData = await Purchase.create({
                purchase_id,
                purchase_collection_index,
                product_name,
                purchase_amount,
                vendor,
                purchase_status,
                reference_number,
                purchase_date,
                product_color,
                product_category,
                product_quantity,
                product_unit
            });

            /* res.status(200).json(success("Success",
                                    purchaseData,
                                    res.statusCode)); */

            var addtrans = await HandleTransaction(vendor,purchase_id,purchase_amount,opening_balance,res)

    } catch (error) { 
        res.send(error)   
    }
}

async function HandleTransaction(vendor,purchase_id,purchase_amount,opening_balance,res){
    console.log("this is transaction strated" )
        try{
        const transactionList = await VendorTransaction.find();

        console.log(transactionList.length)
        if (transactionList.length ==0 ){
            transaction_collection_index = 0;
            console.log(transaction_collection_index)
        }else{
            Robject =transactionList.slice(-1).pop()
            transaction_collection_index  =Robject.transaction_collection_index ;
        }
       
        var transaction_id = 'c-transaction-'+(Number(transaction_collection_index)+1);
        console.log(transaction_id)
        transaction_collection_index = (Number(transaction_collection_index)+1)
        console.log(transaction_collection_index)

        var closing_balance = (parseInt(opening_balance)+parseInt(purchase_amount))
        /* console.log(closing_balance +"this closing balance")
        console.log(customer_id +"this is custumer")
        console.log(order_id + "this is order id")
        console.log(total_amount + "this is transaction amount")
        console.log(opening_balance + "this is opening") */
           
        var customer_transaction = await VendorTransaction.create({
                transaction_id,
                transaction_collection_index,
                vendor_id:vendor,
                purchase_id,
                transaction_type:"Credit",
                transaction_amount:purchase_amount,
                opening_balance,
                closing_balance,
        });
            console.log(customer_transaction)
           var upadteaccount= await updateVendorBalance(vendor,closing_balance,res)

        }catch(error){
            console.log(error)
        }


}

async function updateVendorBalance(vendor,closing_balance,res){
    try{
        const updatecaccount = await PurchaseVendor.findOneAndUpdate({vendor_id:vendor},{$set :{account_balance:closing_balance}});
        res.send("transaction success")
    }catch(error){
        console.log(error)
    }
    

}

// Get purchase

const getPurchase = async function (req, res){    
    try {
        const purchaseList = await Purchase.find();
        res.send (purchaseList.reverse())
    } catch (error) { 
        res.send(error)   
    }
}

module.exports = {
    AddPurchase,
    getPurchase
}