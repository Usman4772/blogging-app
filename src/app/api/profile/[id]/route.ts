import connectDB from "@/lib/connectDB";
import User from "@/models/users";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(req:NextRequest){
    connectDB()
    const id=req.url.split("/")[5]
    try {
        const user=await User.findOne({_id:id}).populate("blogs")
        if(user){
  return NextResponse.json({"user":user})
        }
    } catch (error) {
        return NextResponse.json({"error":"something Went Wrong!"})
    }
}