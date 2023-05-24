const express = require('express');
const app = express();
const { success, error, validation } = require("../../../helpers/apiResponse");
const { CleanData } = require("../../../helpers/cleanEmptyData");
const Users = require('../../../models/user/user');


// Get user

    const getUser = async function (req, res){    
        try {
            const userList = await Users.find();
            res.send (userList.reverse())
        } catch (error) { 
            res.send(error)   
        }
    }

// create user 

    const createUser = async function (req, res){    
        try {
            console.log("this is creeeateee user")

            const {first_name,last_name,email,phone_number,password,dob,user_status,gender,role} = req.body
                const userList = await Users.find();
                console.log(userList.length)
                if (userList.length ==0 ){
                    user_collection_index = 0;
                    console.log(user_collection_index)
                }else{
                    Robject =userList.slice(-1).pop()
                    user_collection_index  =Robject.user_collection_index ;
                }
                console.log(user_collection_index)
                var user_id = 'st-user-'+(Number(user_collection_index)+1);
                    console.log(user_id)
                    user_collection_index = (Number(user_collection_index)+1)
                console.log(user_collection_index)
                
                
                var user = await Users.create({
                    user_id,
                    user_collection_index,
                    first_name,
                    last_name,
                    email,
                    phone_number,
                    password,
                    dob,
                    user_status,
                    gender,
                    role
                    
                });
                res.status(200).json(success("Success",
                                                user,
                                        res.statusCode));
        } catch (error) { 
            res.send(error)   
        }
    }
 
// Edit user 
    const editUser = async function (req, res){    
        try {
            const data = req.body;
            var cleanData = await CleanData(data);
            /* console.log(req.session.user.user_id)
            const user_id = req.session.user.user_id */
            const {first_name,last_name,email,phone_number,password,dob,role,user_status,gender,user_id} = cleanData;
            const updateduser = await Users.findOneAndUpdate({user_id:user_id},{$set :{first_name:first_name,last_name:last_name,email:email,phone_number:phone_number,password:password,dob:dob,user_status:user_status,gender:gender,role:role}});

            const userList = await Users.find({user_id:user_id});
            res.send (userList)
        } catch (error) { 
            res.send(error)   
        }
    }

    const getUserRole = async function (req, res){ 
        console.log("this is get user role")
        console.log(req.session.user)   
        try {
            if(req.session.user){
                console.log(req.session.user)
                const user_id = req.session.user.user_id
                const userList = await Users.find({user_id:user_id});
                res.send(userList[0])
            }else{
                res.send("please login")
            }
           
           
        } catch (error) { 
            res.send(error)   
        }
    }



module.exports = {
    getUser,
    createUser,
    editUser,
    getUserRole,
}