import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

    //console.log(req.body) gives the json data like username, password and emaill that is typed in the body which is client req
export const SignUp = async(req,res,next) =>{
        const { userName, Password, Email } = req.body;
        const hashPassword = bcryptjs.hashSync(Password,10);
        const newUser = new User({userName,Password : hashPassword ,Email}); 
        try{
            await newUser.save(); //saves the data and await is to save the data first and then proceed forward
            res.status(201).json("User created Succesfully");
        }
        catch(error)
        {
            //res.status(500).json(error.message); without next and errorHandler
            next(error);
        }
};


export const SignIn = async (req, res, next) => {
    const { Email, Password } = req.body;
    try {
      const validUser = await User.findOne({ Email : Email });
      if (!validUser) return next(errorHandler(404, 'User not found!'));
      const validPassword = bcryptjs.compareSync(Password, validUser.Password);
      if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);//to generate a cookie for access
      const { Password: pass, ...rest } = validUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
    catch(error)
    {
        next(error);
    }
}
