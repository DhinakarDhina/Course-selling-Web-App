const Router = require("express");
const courseRouter= Router();
const {userMiddleware} = require ("../middleware/user");
const { purchaseModel, courseModel } = require("../db");


//Course purchase list
courseRouter.post('/purchases',userMiddleware,async(request,response)=>{
    const userId = request.userId;
    const courseId= request.body.courseId;
    
    await purchaseModel.create({
        userId,
        courseId
    
    })
    response.json({
        message: "You have successfully bought the course"
    })
})

//course list
courseRouter.get('/preview', async (request, response)=>{
    const courses= await courseModel.find({});
    response.json({
        courses
    })
})

module.exports={
    courseRouter: courseRouter
}