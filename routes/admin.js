const {Router}= require("express");
const adminRouter = Router();
const {adminModel}= require("../db");


adminRouter.post("/signup",(request, response)=>{
    response.send("Signup endpoint");
})

adminRouter.post("/signIn",(request, response)=>{
    response.send("SignIn endpoint");
})

adminRouter.post("/",(request, response)=>{
    response.send("Adding new course endpoint");
})

adminRouter.put("/",(request, response)=>{
    response.send("Updating course content endpoint");
})

adminRouter.get("/bulk",(request, response)=>{
    response.send("Displaying all the course endpoint");
})

adminRouter.delete("/course/remove",(request, response)=>{
    response.send("Deleted the course");
})

module.exports={
    adminRouter:adminRouter
}