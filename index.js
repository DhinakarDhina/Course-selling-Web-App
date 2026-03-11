const express = require("express");
const mongoose = require("mongoose");

const app= express();

const { userRoute}= require("./routes/user");
const{courseRouter}= require("./routes/course");
const {adminRouter}= require("./routes/admin");

app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){
    await mongoose.connect("mongodb+srv://2k23csbs09_db_user:1ysz8XZatYtWhmA9@cluster0.3gzyqgl.mongodb.net/coursera-app")
    app.listen(3000);
    console.log("Listening on port 3000");
}

main();