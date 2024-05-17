import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        required:true,
        
    },
    blogs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"post"
        }
    ]
})

const User=mongoose.models.user || mongoose.model("user",userSchema)
export default User