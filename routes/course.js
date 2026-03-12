const Router = require("express");
const courseRouter= Router();

courseRouter.post('/user/purchases',(request,response)=>{
    response.send("Course purchased successfully");
})

courseRouter.get('/preview', (request, response)=>{
    response.send("Course list");
})

module.exports={
    courseRouter: courseRouter
}