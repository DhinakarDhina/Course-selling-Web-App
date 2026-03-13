const Router = require("express");
const courseRouter= Router();

//Course purchase list
courseRouter.post('/user/purchases',(request,response)=>{
    response.send("Course purchased successfully");
})

//course list
courseRouter.get('/preview', (request, response)=>{
    response.send("Course list");
})

module.exports={
    courseRouter: courseRouter
}