function createCourseRoutes(app){
app.get('/course/purchase',(request,response)=>{
    response.send("Course purchased successfully");
})

app.get('/course/preview', (request, response)=>{
    response.send("Course list");
})
}
module.exports={
    createCourseRoutes: createCourseRoutes
}