import { NextResponse,type NextRequest } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(req:NextRequest){
    // if(req.nextUrl.pathname.startsWith("/posts")){
        if(req.nextUrl.pathname=="/create-blog"){

 const token=req.cookies.get("jwt")?.value
// we will create a function in lib folder named as auth.ts and import this function from here
if(token){
    const verifiedToken=await token && verifyAuth(token).catch(err=>{
        console.log(err)
    })
    console.log(verifiedToken)
   if(!verifiedToken){
    return NextResponse.redirect(new URL("/login",req.url))
   }
}else{
    return NextResponse.redirect(new URL("/login",req.url))
}

}




}