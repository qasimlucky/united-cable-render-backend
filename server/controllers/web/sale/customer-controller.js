const express = require('express');
const app = express();
const { success, error, validation } = require("../../../helpers/apiResponse");
const { CleanData } = require("../../../helpers/cleanEmptyData");
const Customer = require('../../../models/sale/customer');

const addCustomer = async function (req, res){    
    try {
        console.log("this is sale Customer!!!!!!!!!!!!!!!!")

        const {first_name,last_name,email,phone_number,customer_status,account_balance} = req.body;
            const customerList = await Customer.find();
            console.log(customerList.length)
            if (customerList.length ==0 ){
                customer_collection_index = 0;
                console.log(customer_collection_index)
            }else{
                Robject =customerList.slice(-1).pop()
                customer_collection_index  =Robject.customer_collection_index ;
            }
            console.log(customer_collection_index)
            var customer_id = 'un-customer-'+(Number(customer_collection_index)+1);
                console.log(customer_id)
                customer_collection_index = (Number(customer_collection_index)+1)
            console.log(customer_collection_index)
            
            
            var user = await Customer.create({
                customer_id,
                customer_collection_index,
                first_name,
                last_name,
                email,
                phone_number,
                customer_status,
                account_balance
            });

            res.status(200).json(success("Success",
                                            user,
                                    res.statusCode));
    } catch (error) { 
        res.send(error)   
    }
}
const getCustomer = async function (req, res){    
    try {
        const customerList = await Customer.find();
        res.send(customerList.reverse())
    } catch (error) { 
        res.send(error)   
    }
}

module.exports = {
    addCustomer,
    getCustomer
}