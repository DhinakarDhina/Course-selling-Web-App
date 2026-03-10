const Router = require("express");
const useRouter= Router();

useRouter.get('/course/purchase',(request,response)=>{
    response.send("Course purchased successfully");
})

useRouter.get('/course/preview', (request, response)=>{
    response.send("Course list");
})

module.exports={
    createCourseRoutes: createCourseRoutes
}