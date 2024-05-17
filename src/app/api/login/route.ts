import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import User from "@/models/users";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { withIronSession } from "next-iron-session";
import { cookies } from "next/headers";

export async function POST(req:any,res:NextResponse){
    connectDB()
    try {    
const formData=await req.formData()
const email=formData.get("email")
const password=formData.get("password")

    const user=await login(email,password)
const token=createToken(user._id)
cookies().set("jwt",token)
    return NextResponse.redirect(new URL("/",req.url))
} catch (error) {
    console.log(error)
    return NextResponse.redirect(new URL("/login",req.url))
}

}

async function login(email:string,password:any){
    const user=await User.findOne({email})
    if(user){
        const auth=await bcrypt.compare(password,user.password)
        if(auth){
            return user
        }else{
            throw Error("Incorrect Password!")
        }
    }else{
        throw Error("User does not exist!")
    }
}


function createToken(id:any){
    return jwt.sign({id},"my secret")
}

