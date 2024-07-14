import User from "../model/user.model.js"
import asyncHandler from "../utils/asyncHandler.js"



export const signup =asyncHandler(async(req,res)=>{
    const {fullname , email , password} = req.body

    if([fullname , email , password].some(field=> field.trim() == "")){
       return res.status(400).json({
            success:false,
            message:"Every field are required"
        })
    }


    const existUser =await User.findOne({
        email,
    })

    if(existUser){
        return res.status(400).json({
            success:false,
            message:false
        })
    }

    const createUser = await User.create({
        fullname,
        email,
        password
    })

    const user = await User.findById(createUser._id).select("-password")

    res.status(200).json({
        success:true , 
        message:"user create successfully",
        data:user
    })

})




