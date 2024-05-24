import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest){
   cookies().set("jwt","")
    return NextResponse.redirect(new URL("/",req.url))
}