import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const app=express();

mongoose
    .connect(process.env.REAL_ESTATE_DB)
    .then(()=>{console.log("Connected to the database!")})
    .catch((err) => {console.log(err)})
app.listen(3000, () => {
    console.log("Server is runnning on 3000");
})