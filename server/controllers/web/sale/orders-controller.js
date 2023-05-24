const express = require('express');
const app = express();
const { success, error, validation } = require("../../../helpers/apiResponse");
const { CleanData } = require("../../../helpers/cleanEmptyData");

const Orders = require('../../../models/sale/sale-orders');
const SaleProduct = require('../../../models/sale/sale-product');
const SaleCustomer = require('../../../models/sale/customer');
const CustomerTransaction = require('../../../models/sale/accounts/customer-transaction');

const getOrders = async function (req, res){    
    try {
        const orderList = await Orders.find();
        res.send(orderList.reverse())
    } catch (error) { 
        res.send(error)   
    }
}


const AddOrders = async function (req, res){    
    try {
            console.log("this is orders")

            const {total_amount,no_of_items,customer_id,order_items,date,time} = req.body;
            // customer details
            console.log(customer_id)
            if(req.body.customer_id !== "Customer" ){
                const customerList = await SaleCustomer.find({customer_id:customer_id});
                console.log(customerList)
                var opening_balance = parseInt(customerList[0].account_balance);
                var customer_name = customerList[0].first_name;
                var customer_phone = customerList[0].phone_number;
            }


            //
            const orderList = await Orders.find();
           // console.log(orderList.length)
            if (orderList.length ==0 ){
                order_collection_index = 0;
                //console.log(order_collection_index)
            }else{
                Robject =orderList.slice(-1).pop()
                order_collection_index  =Robject.order_collection_index ;
            }
            console.log(order_collection_index)
            var order_id = 'un-order-'+(Number(order_collection_index)+1);
                //console.log(order_id)
                order_collection_index = (Number(order_collection_index)+1)
           console.log(order_collection_index)
            
            if(req.body.customer_id == "Customer" ){
                var order = await Orders.create({
                    order_id,
                    order_collection_index,
                    total_amount,
                    no_of_items,
                    order_items,
                    date,
                    time
                });
            }else{
                var order = await Orders.create({
                    order_id,
                    order_collection_index,
                    total_amount,
                    no_of_items,
                    customer_name, 
                    customer_phone,
                    order_items,
                    date,
                    time
                });
            }



            if(req.body.customer_id !== "Customer"){
                var quantityChange = await DecreaseQuantityOfItems(order_items);
                var addtrans = await HandleTransaction(customer_id,order_id,total_amount,opening_balance)
            }
        
                res.status(200).json(success("Success",
                                                order,
                                        res.statusCode));

    } catch (error) { 
        res.send(error)   
    }
}



async function DecreaseQuantityOfItems(order_items){
    try{
        for (let i = 0; i < order_items.length; i++) {
            var cable_id = order_items[i].cable_id;
            var sell_quantity = order_items[i].sell_quantity
                console.log(cable_id)
                console.log(sell_quantity)
    
            var ChangeQuantity  = SaleProduct.updateOne({ cable_id : cable_id  },
                { "$inc": { "quantity": -sell_quantity} }, function (err, doc) {
                if (err) return new Error(err);
                if (doc) {
                console.log(" Invoice updated with Payment info.", doc);
                } else {
                console.log("Something went wrong while payment info updation.")
                }
            });
            //console.log(ChangeQuantity)
        }
    }catch(error){
        console.log(error)
    }
 
}

async function HandleTransaction(customer_id,order_id,total_amount,opening_balance){
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
        console.log(order_collection_index)
        var transaction_id = 'c-transaction-'+(Number(transaction_collection_index)+1);
        console.log(transaction_id)
        transaction_collection_index = (Number(transaction_collection_index)+1)
        console.log(transaction_collection_index)

        var closing_balance = (parseInt(opening_balance)+parseInt(total_amount))
        /* console.log(closing_balance +"this closing balance")
        console.log(customer_id +"this is custumer")
        console.log(order_id + "this is order id")
        console.log(total_amount + "this is transaction amount")
        console.log(opening_balance + "this is opening") */
           
        var customer_transaction = await CustomerTransaction.create({
                transaction_id,
                transaction_collection_index,
                customer_id,
                order_id,
                transaction_type:"Credit",
                transaction_amount:total_amount,
                opening_balance,
                closing_balance,
        });
            console.log(customer_transaction)
           var upadteaccount= await updateCustomerBalance(customer_id,closing_balance)

        }catch(error){
            console.log(error)
        }


}

async function updateCustomerBalance(customer_id,closing_balance){
    try{
        const updatecaccount = await SaleCustomer.findOneAndUpdate({customer_id:customer_id},{$set :{account_balance:closing_balance}});
    }catch(error){
        console.log(error)
    }
    

}

module.exports = {
    getOrders,
    AddOrders
}