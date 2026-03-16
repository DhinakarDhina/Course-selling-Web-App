const {Router}= require("express");
const adminRouter = Router();
const {adminModel}= require("../db");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD}= require("../config");
const {adminMiddleware} = require ("../middleware/admin");

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
adminRouter.post("/course", adminMiddleware , async (request, response)=>{
    const adminId = req.userId;

    const {title, description, imageUrl , price}= request.body;

    const course = await courseModel.create({
        title: title,
        description: description ,
        imageUrl: imageUrl ,
        price: price, 
        creatorId: adminId

    })

    response.json({
        message: "Course created",
        courseId: course._id
    })
})

//Updating the new course
adminRouter.put("/course",(request, response)=>{
    response.json({
        message: "Updating course Endpoint"
    })
})

//Displaying all the course
adminRouter.get("course/bulk",(request, response)=>{
    response.json({
        message: "Displaying course Endpoint"
    })
})

module.exports={
    adminRouter:adminRouter
}