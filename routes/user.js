function createUserRoutes(app){
app.post('/user/signup', (request, response)=>{
    response.send("Signup Successfully");
})

app.post('/user/signin',(request, response)=>{
    response.send("Sign Successful");
})

app.get('/user/purchases',(request, response)=>{
    response.send("Purchased course list");
})
}
module.exports={
    createUserRoutes: createUserRoutes
}