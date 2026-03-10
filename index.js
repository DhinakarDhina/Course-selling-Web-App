const express = require("express");
const app= express();

const { userRoute}= require("./routes/user");
const{courseRouter}= require("./routes/course");
const {adminRouter}= require("./routes/admin");

app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

app.listen(3000);