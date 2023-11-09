import express from "express";
import { SignUp } from "../controller/auth.controller.js";

const authRouter= express.Router();

authRouter.post('/SignUp', SignUp);
export default authRouter;