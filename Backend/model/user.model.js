import mongoose from "mongoose";
import bcryptjs from 'bcryptjs'


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
)


userSchema.pre("save" , async function(next){
    if(!this.isModified("password")) return next()
        this.password = await bcryptjs.hash(this.password , 10)
})



userSchema.methods.isPasswordCorrect = async function(password){
    bcryptjs.compare(password , this.password)
}




const User = mongoose.model("User" , userSchema)

export default User