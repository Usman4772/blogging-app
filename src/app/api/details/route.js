import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import Post from "@/models/posts"
import IsLoggedIn from "@/middleware/authMiddleware"



 async function GET(req,res){
    connectDB()
    console.log("here")
    const posts=await Post.find()
    return res.json({"posts":posts})

}

export default IsLoggedIn(GET)