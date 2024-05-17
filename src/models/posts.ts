import mongoose from "mongoose";
const postSchema=new mongoose.Schema({
    title:String,
    description:{
        type:String
    },
    cover_url:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})



const Post=mongoose.models.post || mongoose.model("post",postSchema)
export default Post