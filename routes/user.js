const {Router}= require("express");
const userRoute= Router();

// Signup from user
userRoute.post('/signup', (request, response)=>{
    response.send("Signup Successfully");
})


//Signin from user
userRoute.post('/signin',(request, response)=>{
    response.send("Sign Successful");
})

//Purchase course list
userRoute.get('/purchases',(request, response)=>{
    response.send("Purchased course list");
})

module.exports={
    userRoute: userRoute
}