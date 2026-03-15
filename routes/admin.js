const {Router}= require("express");
const adminRouter = Router();
const {adminModel}= require("../db");
const JWT_ADMIN_PASSWORD = "123ldl2345";
const jwt = require("jsonwebtoken");


//bcrypt, zod, jsonwebtoken

// SignUp endpoint
adminRouter.post("/signup",async(request, response)=>{
    const{email, password, firstName, lastName}= request.body;
    //TODO: hash the password so plaintext pw is not stored in the DB
    try{
        await adminModel.create({
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

//Signin Endpoint
adminRouter.post("/signIn",async(request, response)=>{
    const{email, password}= request.body;

    //TODO : ideally password should be hashed, and hence  you compare the user provided password and the database password

    const admin = await adminModel.findOne({
        email: email,
        password: password
    });
    
    if(admin){
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

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

//Adding new course
adminRouter.post("/course",(request, response)=>{
    response.send("Adding new course endpoint");
})

//Updating the new course
adminRouter.put("/course",(request, response)=>{
    response.send("Updating course content endpoint");
})

//Displaying all the course
adminRouter.get("course/bulk",(request, response)=>{
    response.send("Displaying all the course endpoint");
})



module.exports={
    adminRouter:adminRouter
}