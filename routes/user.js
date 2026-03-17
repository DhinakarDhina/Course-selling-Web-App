const {Router}= require("express");
const userRoute= Router();
const {userModel, purchaseModel} = require("../db");
const jwt = require("jsonwebtoken");
const {userMiddleware} = require ("../middleware/user");

const {JWT_USER_PASSWORD}= require("../config");

// Signup from user
userRoute.post('/signup', async(request, response)=>{
    const{email, password, firstName, lastName}= request.body;
    //TODO: hash the password so plaintext pw is not stored in the DB
    try{
        await userModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
    } catch(e){
        response.json({
            message:"Error"
        })
    }

    response.json({
        message: "Signup Endpoint"
    })
})


//Signin from user
userRoute.post('/signin', async (request, response)=>{
    const{email, password}= request.body;

    //TODO : ideally password should be hashed, and hence  you compare the user provided password and the database password

    const user = await userModel.findOne({
        email: email,
        password: password
    });
    
    if(user){
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

        response.json({
            token : token
        })
    }else{
        response.status(403).json({
            message: "Incorrect credentials"
        })
    }
    

    response.json({
        message: "SignIn Endpoint"
    })
})

//Purchase course list
userRoute.get('/purchases' ,userMiddleware,async (request, response)=>{
    const userId = request.userId
    const purchases = await purchaseModel.find({
        userId,
    })
    response.json({
        purchases
    })
})

module.exports={
    userRoute: userRoute
}