const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config");

function userMiddleware(request, response, next){
    const token = req.headers.token;
    const decoded= jwt.verify(token,JWT_USER_PASSWORD);

    if(decoded){
        request.userId = decoded.id;
        next();
    } else{
        response.status(403).json({
            message: "You are not signed in"
        })
    }
}

module.exports={
    userMiddleware: userMiddleware
}