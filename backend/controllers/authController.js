import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async(req,res)=>{
    try {
        const salt = bcrypt.getSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password)
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            photo:req.body.photo,
        })
        await newUser.save();
        res.status(200).json({success:true,message:"Successfully Created Account!"})
    } catch (error) {
        res.status(500).json({success:false,message:"Account Creation Failed!"})
    }
}


export const login = async(req,res)=>{
    const email = req.body.email;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({success:false,message:"User Not Found!"})
        }
        const checkCorrectPassword = await bcrypt.compare(req.body.password,user.password)
        if(!checkCorrectPassword){
            return res.status(401).json({success:false,message:"Incorrect Credentials!"})
        }

        const {password,role,...rest} = user._doc
        const token = jwt.sign({id:user,role:user.role},process.env.JWT_SECRECT_KEY,{expiresIn:"15d"})
        res.cookie('accessToken',token,{
            httpOnly:true,
            expires:token.expiresIn
        }).status(200).json({success:true,message:"Successful Login",data:{...rest},role})
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to Login!"})
    }
}