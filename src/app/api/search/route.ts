import connectDB from "@/lib/connectDB";
import Post from "@/models/posts";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    connectDB()
    try {
        const formData=await req.formData()
        const value=formData.get("value")
        if(typeof value == "string"){
            const posts = await Post.find({ title: { $regex: new RegExp(value, "i") } });
            return NextResponse.json({posts})
        }
   
    } catch (error) {
        
        return NextResponse.json({"posts":[]})
    }

}