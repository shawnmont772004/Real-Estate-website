import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./Routes/user.route.js";
import authRouter from "./Routes/auth.route.js";


dotenv.config()
const app=express();

app.use(express.json());//for undefined part of post that is req.body

mongoose
    .connect(process.env.REAL_ESTATE_DB)
    .then(()=>{console.log("Connected to the database!")})
    .catch((err) => {console.log(err)})

app.listen(3000, () => {
    console.log("Server is runnning on 3000");
})

//app.get('/test',(req,res) => {
//    res.send("Hello brother")}) this is not effiecient practice as it is lengthy 

app.use('/api/Routes',userRouter);
app.use('/api/auth',authRouter);