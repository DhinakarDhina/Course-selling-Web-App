const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app= express();

// Importing the files from the route

const { userRoute}= require("./routes/user");
const{courseRouter}= require("./routes/course");
const {adminRouter}= require("./routes/admin");


// Routes with version
app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(process.env.PORT,()=>{
        console.log("Server is running on port "+ process.env.PORT);
    });
}

main();