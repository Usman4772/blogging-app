import connectDB from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";
import Post from "@/models/posts"
import { verifyAuth } from "@/lib/auth";
import { jwtVerify } from "jose";
import User from "@/models/users";
import { uploadImages } from "@/lib/upload-images";

export async function POST(req){
    connectDB()
try {
  const data=await req.formData()
  const title=data.get("title")
  const description=data.get("description")
  const category=data.get("category")
  console.log(category)
  const image=data.get("image")
  const imageData=await uploadImages(image,"blogging-app-images")
const userId=await getLoggedInUser(req)
const user=await User.findOne({_id:userId})
const post=await Post.create({
title:title,
description:description,
cover_url:imageData.secure_url,
category:category,
user:user._id
})
user.blogs.push(post._id)
await user.save()
return NextResponse.json({"message":"success"})

} catch (error) {
    console.log(error)
    return NextResponse.json({"message":"failure"})
}

}


export async function GET(){
    connectDB()
    const posts=await Post.find().populate("user").exec()
    return NextResponse.json({"posts":posts})

}


async function getLoggedInUser(req){
    const token=req.cookies.get("jwt")?.value
if(token){
    const verifiedToken=await token && jwtVerify(token,new TextEncoder().encode("my secret"))
    if(verifiedToken){
       const token=await verifiedToken
       const id=token.payload.id
       return id
    }
}
}