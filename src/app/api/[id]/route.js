import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import Post from "@/models/posts"





 export async function GET(req){
    connectDB()
const id=req.url.split("/")[4]
const post=await Post.findOne({_id:id}).populate("user")
// console.log(post.user.username)

if(!post){
    if(post.user.username){
        const user=post.user
        return NextResponse.json(post,{"user":user})
    }
    return NextResponse.json({error:"Post not found"})
}


    return NextResponse.json({post})

}


