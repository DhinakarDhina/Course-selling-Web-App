const {Router}= require("express");
const userRoute= Router();


userRoute.post('/signup', (request, response)=>{
    response.send("Signup Successfully");
})

userRoute.post('/signin',(request, response)=>{
    response.send("Sign Successful");
})

userRoute.get('/purchases',(request, response)=>{
    response.send("Purchased course list");
})

module.exports={
    userRoute: userRoute
}