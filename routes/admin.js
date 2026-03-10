const {Router}= require("express");
const adminRouter = Router();


adminRouter.post("/signup",(request, response)=>{
    response.send("Signup endpoint");
})

adminRouter.post("./signIn",(request, response)=>{
    response.send("SignIn endpoint");
})

adminRouter.post("./course",(request, response)=>{
    response.send("Adding new course endpoint");
})

adminRouter.put("./course",(request, response)=>{
    response.send("Updating course content endpoint");
})

adminRouter.get("./course/bulk",(request, response)=>{
    response.send("Displaying all the course endpoint");
})

adminRouter.delete("./course/remove",(request, response)=>{
    response.send("Deleted the course");
})

module.exports={
    adminRouter:adminRouter
}