const express = require("express");
const app= express();

app.post('/user/signup', (request, response)=>{
    response.send("Signup Successfully");
})

app.post('/user/signin',(request, response)=>{
    response.send("Sign Successful");
})

app.get('/course/purchase',(request,response)=>{
    response.send("Course purchased successfully");
})

app.get('/courses', (request, response)=>{
    response.send("Course list");
})

app.get('/user/purchases',(request, response)=>{
    response.send("Purchased course list");
})

app.listen(3000);