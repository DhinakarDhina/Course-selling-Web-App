const {Router}= require("express");
const userRoute= Router();


userRoute.post('/user/signup', (request, response)=>{
    response.send("Signup Successfully");
})

userRoute.post('/user/signin',(request, response)=>{
    response.send("Sign Successful");
})

userRoute.get('/user/purchases',(request, response)=>{
    response.send("Purchased course list");
})

module.exports={
    userRoute: userRoute
}