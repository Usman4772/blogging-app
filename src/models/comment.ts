import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

const Comment=mongoose.models.comment || mongoose.model("comment",commentSchema)
export default Comment