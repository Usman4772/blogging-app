import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const jwt=req.cookies.get("jwt")

if(jwt!==undefined && jwt?.value!==""){
    return NextResponse.json({"mssg":true})
}
return NextResponse.json({"mssg":false})
}