const express = require('express');
const app = express();
const { success, error, validation } = require("../../../helpers/apiResponse");
const { CleanData } = require("../../../helpers/cleanEmptyData");
const Product = require('../../../models/product/product');
const ProductCategroy = require('../../../models/product/categroy')
const ProductColor = require('../../../models/product/color');
const Vendors = require('../../../models/product/vendor')
const ProductUnit = require('../../../models/product/unit')

const addProductTitle = async function (req, res){    
    try {
        console.log("this is product Title")

        const {product_title,product_description,product_unit} = req.body;
            const productList = await Product.find();
            console.log(productList.length)
            if (productList.length ==0 ){
                product_collection_index = 0;
                console.log(product_collection_index)
            }else{
                Robject =productList.slice(-1).pop()
                product_collection_index  =Robject.product_collection_index ;
            }
            console.log(product_collection_index)
            var product_id = 'un-title-'+(Number(product_collection_index)+1);
                console.log(product_id)
                product_collection_index = (Number(product_collection_index)+1)
            console.log(product_collection_index)
            
            
            
            var user = await Product.create({
                product_id,
                product_collection_index,
                product_title,
                product_unit,
                product_description,
            });


            res.status(200).json(success("Success",
                                            user,
                                    res.statusCode));
    } catch (error) { 
        res.send(error)   
    }
}

const addProductCategroy = async function (req, res){    
    try {
        console.log("this is product categroy")

        const {category_title,category_description} = req.body;
            const categroyList = await ProductCategroy.find();
            console.log(categroyList.length)
            if (categroyList.length ==0 ){
                category_collection_index = 0;
                console.log(category_collection_index)
            }else{
                Robject =categroyList.slice(-1).pop()
                category_collection_index  =Robject.category_collection_index ;
            }
            console.log(category_collection_index)
            var category_id = 'un-categroy-'+(Number(category_collection_index)+1);
                console.log(category_id)
                category_collection_index = (Number(category_collection_index)+1)
            console.log(category_collection_index)
            
            
            
            var user = await ProductCategroy.create({
                category_id,
                category_collection_index,
                category_title,
                category_description,
            });


            res.status(200).json(success("Success",
                                            user,
                                    res.statusCode));
    } catch (error) { 
        res.send(error)   
    }
}
const addProductColor = async function (req, res){    
    try {
        console.log("this is product color")

        const {color_title,color_description} = req.body;
            const colorList = await ProductColor.find();
            console.log(colorList.length)
            if (colorList.length ==0 ){
                color_collection_index = 0;
                console.log(color_collection_index)
            }else{
                Robject =colorList.slice(-1).pop()
                color_collection_index  =Robject.color_collection_index ;
            }
            console.log(color_collection_index)
            var color_id = 'un-color-'+(Number(color_collection_index)+1);
                console.log(color_id)
                color_collection_index = (Number(color_collection_index)+1)
            console.log(color_collection_index)
            
            
            
            var user = await ProductColor.create({
                color_id,
                color_collection_index,
                color_title,
                color_description,
            });


            res.status(200).json(success("Success",
                                            user,
                                    res.statusCode));
    } catch (error) { 
        res.send(error)   
    }
}

const addProductVendor = async function (req, res){    
    try {
        console.log("this is create Vendor")
         console.log(req.body)
        const {first_name,last_name,email,phone_number,account_balance} = req.body
            const SupplierList = await Vendors.find();
            console.log(SupplierList.length)
            if (SupplierList.length ==0 ){
                vendor_collection_index = 0;
                console.log(vendor_collection_index)
            }else{
                Robject =SupplierList.slice(-1).pop()
                vendor_collection_index  =Robject.vendor_collection_index ;
            }
           console.log(vendor_collection_index)
            var vendor_id = 'ss-vendor-'+(Number(vendor_collection_index)+1);
                console.log(vendor_id)
                vendor_collection_index = (Number(vendor_collection_index)+1)
                console.log(vendor_collection_index)
            var supplier = await Vendors.create({
                vendor_id,
                vendor_collection_index,
                first_name,
                last_name,
                email,
                phone_number,
                account_balance     
            });


            res.status(200).json(success("Success",
                                        supplier,
                                    res.statusCode));
    } catch (error) { 
        res.send(error)   
    }
}

const getvendors = async function (req, res){    
    try {
        const supplierList = await Vendors.find();
        res.send (supplierList)
    } catch (error) { 
        res.send(error)   
    }
}

const getvendorsDetails = async function (req, res){    
    try {
        const {vendor_id} = req.body
        const vendorList = await Vendors.find({vendor_id:vendor_id});
        res.send (vendorList)
    } catch (error) { 
        res.send(error)   
    }
}


const getProduct = async function (req, res){    
    try {
        const productList = await Product.find();
        res.send (productList.reverse())
    } catch (error) { 
        res.send(error)   
    }
}
const getProductCategroy = async function (req, res){    
    try {
        const categroyList = await ProductCategroy.find();
        res.send (categroyList)
    } catch (error) { 
        res.send(error)   
    }
}

const getProductColor = async function (req, res){    
    try {
        const colorList = await ProductColor.find();
        res.send (colorList)
    } catch (error) { 
        res.send(error)   
    }
}

const addProductUnit= async function (req, res){    
    try {
        console.log("this is product Unit")

        const {unit_title,unit_description} = req.body;
            const unitList = await ProductUnit.find();
            console.log(unitList.length)
            if (unitList.length ==0 ){
                unit_collection_index = 0;
                console.log(unit_collection_index)
            }else{
                Robject =unitList.slice(-1).pop()
                unit_collection_index  =Robject.unit_collection_index ;
            }
            console.log(unit_collection_index)
            var unit_id = 'un-unit-'+(Number(unit_collection_index)+1);
                console.log(unit_id)
                unit_collection_index = (Number(unit_collection_index)+1)
            console.log(unit_collection_index)
            
            
            
            var user = await ProductUnit.create({
                unit_id,
                unit_collection_index,
                unit_title,
                unit_description,
            });


            res.status(200).json(success("Success",
                                            user,
                                    res.statusCode));
    } catch (error) { 
        res.send(error)   
    }
}

const getProductUnit = async function (req, res){    
    try {
        const unitList = await ProductUnit.find();
        res.send (unitList)
    } catch (error) { 
        res.send(error)   
    }
}
module.exports = {
    addProductTitle,
    addProductCategroy,
    addProductColor,
    addProductVendor,
    getvendors,
    getProduct,
    getProductCategroy,
    getProductColor,
    addProductUnit,
    getProductUnit,
    getvendorsDetails
}