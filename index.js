const express = require("express");
const app= express();

const {createUserRoutes}= require("./routes/user");
const{createCourseRoutes}= require("./routes/course");

//calling the user routes
createUserRoutes(app);
//calling course routes
createCourseRoutes(app);

app.listen(3000);