const {Router}= require("express");
const adminRouter = Router();
const {adminModel}= require("../db");

//bcrypt, zod, jsonwebtoken

// SignUp endpoint
adminRouter.post("/signup",(request, response)=>{
    response.send("Signup endpoint");
})

//Signin Endpoint
adminRouter.post("/signIn",(request, response)=>{
    response.send("SignIn endpoint");
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