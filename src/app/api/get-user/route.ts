import User from "@/models/users"
import { jwtVerify } from "jose"
import { NextRequest, NextResponse } from "next/server"
export async function GET(req:NextRequest){
    try {
        const userId=await getLoggedInUser(req)
        const user=await User.findOne({_id:userId})
        return NextResponse.json(user) 
    } catch (error) {
        console.log(error)
        return NextResponse.json({"Message":"User not logged in"})
    }

}
async function getLoggedInUser(req:NextRequest){
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