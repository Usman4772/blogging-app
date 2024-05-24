import Post from "@/models/posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
  try {
    const postId=req.url.split("/")[5]
    const post=await Post.findOne({_id:postId}).populate("user").populate({
        path: "comments",
        populate: {
          path: "user",
        },
      })
        return NextResponse.json({"post":post})
  } catch (error) {
    console.log(error)
    return NextResponse.json({"Message":error})
  }

}