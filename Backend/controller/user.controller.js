import User from "../model/user.model"



export const signup =async(req,res)=>{
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
            success:true,
            message:false
        })
    }

}