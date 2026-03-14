const {Router}= require("express");
const userRoute= Router();
const {userModel} = require("../db");

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
userRoute.post('/signin',(request, response)=>{
    response.json({
        message: "SignIn Endpoint"
    })
})

//Purchase course list
userRoute.get('/purchases',(request, response)=>{
    response.json({
        message: "Purchased course list"
    })
})

module.exports={
    userRoute: userRoute
}