import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import Comment from "@/models/comment";
import User from "@/models/users";
import Post from "@/models/posts";
export async function POST(req:NextRequest){

    const formData=await req.formData()
  const commentBody=formData.get("value")
  const postId=formData.get("postId")
  const userId=await getLoggedInUser(req)
  const user=await User.findOne({_id:userId})
if(user){
    const post=await Post.findOne({_id:postId})
    let comment=await Comment.create({
        comment:commentBody,
        user:user._id,
        blog:post._id
    })
    post.comments.push(comment)
    await post.save()
    comment=await comment.populate("user")
    return NextResponse.json({"Message":"Comment Added Successfully!","newComment":comment})
}else{
    return NextResponse.json({"Message":"You need to Login First"})
}

}
export async function GET(req:NextResponse){
    console.log("here")
console.log(req)
return NextResponse.json({"Message":"All comments"})
}
async function getLoggedInUser(req:any){
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