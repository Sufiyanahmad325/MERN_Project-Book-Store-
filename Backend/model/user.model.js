import mongoose from "mongoose";


const userSchema= mongoose.Schema({
    fullname:{
        type:String,
        required:[true , "name is required"]
    },
    email:{
        type:String,
        required:[true , "email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true , "password is required"]
    }
}, { timestamps: true }
);

const User = mongoose.model("User" , UserSchema)

export default User