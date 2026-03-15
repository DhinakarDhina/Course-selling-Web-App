const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "aladld123"


function userMiddleware(request, response, next){
    const token = req.headers.token;
    const decoded= jwt.verify(token,)

}

module.exports={
    userMiddleware: userMiddleware
}