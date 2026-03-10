const express = require("express");
const app= express();

const {createUserRoutes, userRoute}= require("./routes/user");
const{createCourseRoutes}= require("./routes/course");

app.use("/user", userRoute);
app.use("/course", courseRouter);

//calling the user routes
createUserRoutes(app);
//calling course routes
createCourseRoutes(app);

app.listen(3000);