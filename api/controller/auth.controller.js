import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

    //console.log(req.body) gives the json data like username, password and emaill that is typed in the body which is client req
export const SignUp = async(req,res) =>{
        const { userName, Password, Email } = req.body;
        const hashPassword = bcryptjs.hashSync(Password,10);
        const newUser = new User({userName,Password : hashPassword ,Email}); 
        try{
            await newUser.save(); //saves the data and await is to save the data first and then proceed forward
            res.status(201).json("User created Succesfully");
        }
        catch(error)
        {
            res.status(500).json(error.message);
        }
};
