import express from "express";
import { SignUp, SignIn } from "../controller/auth.controller.js";

const authRouter= express.Router();

authRouter.post('/SignUp', SignUp);
authRouter.post('/SignIn', SignIn);

export default authRouter;