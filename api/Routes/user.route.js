import express from "express";
import { userTest } from "../controller/user.controller.js";
const userRouter= express.Router();

//userRouter.get('/test',(req,res) => {
//    res.json({
//        "bot":"hello",
//    });
//});

userRouter.get('/test',userTest);

export default userRouter;