const express = require('express');
const app = express();
const { success, error, validation } = require("../../../helpers/apiResponse");
const { CleanData } = require("../../../helpers/cleanEmptyData");
const SaleProductCategroy = require('../../../models/sale/sale-product-categroy');
const SaleProductType = require('../../../models/sale/sale-product-type');
const SaleProductPacking = require('../../../models/sale/sale-product-packing');
const SaleProductUnit = require('../../../models/sale/sale-product-unit');
const SaleProductSize = require('../../../models/sale/sale-product-size');
const SaleProductName = require('../../../models/sale/sale-product-name');
const SaleProduct = require('../../../models/sale/sale-product');



const addSaleProduct = async function (req, res){    
    try {
        console.log("this is sale product ")

            const {cable_name,cable_categroy,cable_type,cable_packing_length,packing_type,packing_measurement_unit,sale_price,cable_amp,cable_size_no_wire,cable_size_in_mm,cable_color,cable_status,quantity} = req.body;
            const cableList = await SaleProduct.find();
            console.log(cableList.length)
            if (cableList.length ==0 ){
                cable_collection_index = 0;
                console.log(cable_collection_index)
            }else{
                Robject =cableList.slice(-1).pop()
                cable_collection_index  =Robject.cable_collection_index ;
            }
            console.log(cable_collection_index)
            var cable_id = 'un-cable--'+(Number(cable_collection_index)+1);
                console.log(cable_id)
                cable_collection_index = (Number(cable_collection_index)+1)
            console.log(cable_collection_index)
            
            
            var user = await SaleProduct.create({
                cable_id,
                cable_collection_index,
                cable_name,
                cable_categroy,
                cable_type,
                cable_packing_length,
                packing_type,
                packing_measurement_unit,
                sale_price,
                cable_amp,
                cable_size_no_wire,
                cable_size_in_mm,
                cable_color,
                cable_status,
                quantity

            });

            res.status(200).json(success("Success",
                                            user,
                                    res.statusCode));
    } catch (error) { 
        res.send(error)   
    }
}

const addSaleProductCategroy = async function (req, res){    
    try {
        console.log("this is sale product categroy")

        const {category_title,category_description} = req.body;
            const categroyList = await SaleProductCategroy.find();
            console.log(categroyList.length)
            if (categroyList.length ==0 ){
                sale_category_collection_index = 0;
                console.log(sale_category_collection_index)
            }else{
                Robject =categroyList.slice(-1).pop()
                sale_category_collection_index  =Robject.sale_category_collection_index ;
            }
            console.log(sale_category_collection_index)
            var sale_category_id = 'un-sale-categroy-'+(Number(sale_category_collection_index)+1);
                console.log(sale_category_id)
                sale_category_collection_index = (Number(sale_category_collection_index)+1)
            console.log(sale_category_collection_index)
            
            
            var user = await SaleProductCategroy.create({
                sale_category_id,
                sale_category_collection_index,
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

const addSaleProductType = async function (req, res){    
    try {
        console.log("this is sale product type")

        const {type_title,type_description} = req.body;
            const typeList = await SaleProductType.find();
            console.log(typeList.length)
            if (typeList.length ==0 ){
                sale_type_collection_index = 0;
                console.log(sale_type_collection_index)
            }else{
                Robject =typeList.slice(-1).pop()
                sale_type_collection_index  =Robject.sale_type_collection_index ;
            }
            console.log(sale_type_collection_index)
            var sale_type_id = 'un-sale-type-'+(Number(sale_type_collection_index)+1);
                console.log(sale_type_id)
                sale_type_collection_index = (Number(sale_type_collection_index)+1)
            console.log(sale_type_collection_index)
            
            
            var user = await SaleProductType.create({
                sale_type_id,
                sale_type_collection_index,
                type_title,
                type_description,
            });


            res.status(200).json(success("Success",
                                            user,
                                    res.statusCode));
    } catch (error) { 
        res.send(error)   
    }
}
const addSalePacking = async function (req, res){    
    try {
        console.log("this is sale packing")

        const {packing_title,packing_description} = req.body;
            const packingList = await SaleProductPacking.find();
            console.log(packingList.length)
            if (packingList.length ==0 ){
                sale_packing_collection_index = 0;
                console.log(sale_packing_collection_index)
            }else{
                Robject =packingList.slice(-1).pop()
                sale_packing_collection_index  =Robject.sale_packing_collection_index ;
            }
            console.log(sale_packing_collection_index)
            var sale_packing_id = 'un-sale-pack-'+(Number(sale_packing_collection_index)+1);
                console.log(sale_packing_id)
                sale_packing_collection_index = (Number(sale_packing_collection_index)+1)
            console.log(sale_packing_collection_index)
            
            
            var user = await SaleProductPacking.create({
                sale_packing_id,
                sale_packing_collection_index,
                packing_title,
                packing_description,
            });


            res.status(200).json(success("Success",
                                            user,
                                    res.statusCode));
    } catch (error) { 
        res.send(error)   
    }
}
const addSaleUnit = async function (req, res){    
    try {
        console.log("this is sale unit!!!!!!!!!!!!!!!!")

        const {unit_title,unit_description} = req.body;
            const unitList = await SaleProductUnit.find();
            console.log(unitList.length)
            if (unitList.length ==0 ){
                sale_unit_collection_index = 0;
                console.log(sale_unit_collection_index)
            }else{
                Robject =unitList.slice(-1).pop()
                sale_unit_collection_index  =Robject.sale_unit_collection_index ;
            }
            console.log(sale_unit_collection_index)
            var sale_unit_id = 'un-sale-unit-'+(Number(sale_unit_collection_index)+1);
                console.log(sale_unit_id)
                sale_unit_collection_index = (Number(sale_unit_collection_index)+1)
            console.log(sale_unit_collection_index)
            
            
            var user = await SaleProductUnit.create({
                sale_unit_id,
                sale_unit_collection_index,
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
const addSaleProductSize = async function (req, res){    
    try {
        console.log("this is sale unit!!!!!!!!!!!!!!!!")

        const {size_according_wires,size_according_mm} = req.body;
            const unitList = await SaleProductSize.find();
            console.log(unitList.length)
            if (unitList.length ==0 ){
                sale_size_collection_index = 0;
                console.log(sale_size_collection_index)
            }else{
                Robject =unitList.slice(-1).pop()
                sale_size_collection_index  =Robject.sale_size_collection_index ;
            }
            console.log(sale_size_collection_index)
            var sale_size_id = 'un-sale-size-'+(Number(sale_size_collection_index)+1);
                console.log(sale_size_id)
                sale_size_collection_index = (Number(sale_size_collection_index)+1)
            console.log(sale_size_collection_index)
            
            
            var user = await SaleProductSize.create({
                sale_size_id,
                sale_size_collection_index,
                size_according_wires,
                size_according_mm,
            });


            res.status(200).json(success("Success",
                                            user,
                                    res.statusCode));
    } catch (error) { 
        res.send(error)   
    }
}
const addSaleProductName = async function (req, res){    
    try {
        console.log("this is sale name!!!!!!!!!!!!!!!!")

        const {sale_product_title,sale_product_description} = req.body;
            const unitList = await SaleProductName.find();
            console.log(unitList.length)
            if (unitList.length ==0 ){
                sale_name_collection_index = 0;
                console.log(sale_name_collection_index)
            }else{
                Robject =unitList.slice(-1).pop()
                sale_name_collection_index  =Robject.sale_name_collection_index ;
            }
            console.log(sale_name_collection_index)
            var sale_name_id = 'un-sale-name-'+(Number(sale_name_collection_index)+1);
                console.log(sale_name_id)
                sale_name_collection_index = (Number(sale_name_collection_index)+1)
            console.log(sale_name_collection_index)
            
            
            var user = await SaleProductName.create({
                sale_name_id,
                sale_name_collection_index,
                sale_product_title,
                sale_product_description,
            });


            res.status(200).json(success("Success",
                                            user,
                                    res.statusCode));
    } catch (error) { 
        res.send(error)   
    }
}

const getSaleProductCategroy = async function (req, res){    
    try {
        const purchaseList = await SaleProductCategroy.find();
        res.send (purchaseList)
    } catch (error) { 
        res.send(error)   
    }
}
const getSaleProductType = async function (req, res){  
    console.log("i am here")  
    try {
        const purchaseList = await SaleProductType.find();
        res.send (purchaseList)
    } catch (error) { 
        res.send(error)   
    }
}
const getSaleProductUnit = async function (req, res){  
    console.log("i am here")  
    try {
        const purchaseList = await SaleProductUnit.find();
        res.send (purchaseList)
    } catch (error) { 
        res.send(error)   
    }
}

const getSaleProductPacking = async function (req, res){  
    console.log("i am here")  
    try {
        const purchaseList = await SaleProductPacking.find();
        res.send (purchaseList)
    } catch (error) { 
        res.send(error)   
    }
}
const getSaleProductSize = async function (req, res){  
    console.log("i am here")  
    try {
        const purchaseList = await SaleProductSize.find();
        res.send (purchaseList)
    } catch (error) { 
        res.send(error)   
    }
}
const getSaleProductName = async function (req, res){  
    console.log("i am here")  
    try {
        const purchaseList = await SaleProductName.find();
        res.send (purchaseList)
    } catch (error) { 
        res.send(error)   
    }
}
const getSaleProduct = async function (req, res){  
    console.log("i am here")  
    try {
        const purchaseList = await SaleProduct.find();
        res.send (purchaseList)
    } catch (error) { 
        res.send(error)   
    }
}
module.exports = {
    addSaleProductCategroy,
    addSaleProductType,
    getSaleProductCategroy,
    getSaleProductType,
    addSalePacking,
    addSaleUnit,
    getSaleProductUnit,
    getSaleProductPacking,
    addSaleProductSize,
    getSaleProductSize,
    addSaleProductName,
    getSaleProductName,
    addSaleProduct,
    getSaleProduct,
    
}