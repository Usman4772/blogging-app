import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import Post from "@/models/posts"
import { error } from "console";




 export async function GET(req){
    connectDB()
const id=req.url.split("/")[4]
const post=await Post.findOne({_id:id})
console.log(post)
if(!post){
    return NextResponse.json({error:"Post not found"})
}


    return NextResponse.json({post})

}


