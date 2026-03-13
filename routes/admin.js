const {Router}= require("express");
const adminRouter = Router();
const {adminModel}= require("../db");

// SignUp endpoint
adminRouter.post("/signup",(request, response)=>{
    response.send("Signup endpoint");
})

//Signin Endpoint
adminRouter.post("/signIn",(request, response)=>{
    response.send("SignIn endpoint");
})

//Adding new course
adminRouter.post("/",(request, response)=>{
    response.send("Adding new course endpoint");
})

//Updating the new course
adminRouter.put("/",(request, response)=>{
    response.send("Updating course content endpoint");
})

//Displaying all the course
adminRouter.get("/bulk",(request, response)=>{
    response.send("Displaying all the course endpoint");
})


//Deleting the course endpoint
adminRouter.delete("/course/remove",(request, response)=>{
    response.send("Deleted the course");
})

module.exports={
    adminRouter:adminRouter
}