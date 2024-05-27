import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import User from "@/models/users";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
import { uploadImages } from "@/lib/upload-images";

export async function POST(req:any){
    connectDB()
try {
    const formData=await req.formData()
const username=formData.get("username")
const email=formData.get("email")
const password=formData.get("password")
const imageData=formData.get("image")
const image=await uploadImages(imageData,"blogging-app-images") as any
const image_url=image?.secure_url
const hashedPassword=await hashPassword(password)
    const user=await User.create({username,email,password:hashedPassword,profileImage:image_url})
    const token=createToken(user._id)
cookies().set("jwt",token)
return NextResponse.json({"message":"success"})
} catch (error) {
    console.log(error)
    return NextResponse.json({"message":"failure"})
}

}






async function hashPassword(pass:any){
    const salt=await bcrypt.genSaltSync(10)
    const hashPassword=await bcrypt.hash(pass,salt)
   return hashPassword
}
function createToken(id:any){
    return jwt.sign({id},"my secret")
}

