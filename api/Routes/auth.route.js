import express from "express";
import { SignUp, SignIn, google} from "../controller/auth.controller.js";


const authRouter= express.Router();

authRouter.post('/SignUp', SignUp);
authRouter.post('/SignIn', SignIn);
authRouter.post('/google', google);

export default authRouter;