"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'antd'
import axios from 'axios'
import Toast from '../Toasts/Toast'
function CommentSection({postId}:any) {
    const commentRef=useRef<HTMLInputElement>(null)
    const [comments,setComments]=useState<Array<Object>>([])
    const [toast,setToast]=useState(null)
    const [showToast,setShowToast]=useState<Boolean>(false)
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [commentLoading,setCommentLoading]=useState(false)
   async  function handleAddComment(){
const commentValue=commentRef.current?.value || ""
const formData=new FormData()
formData.append("value",commentValue)
formData.append("postId",postId)
setCommentLoading(true)
const res=await axios.post("/api/add-comment",formData)
if(res.data){
    setToast(res.data.Message)
    setShowToast(true)
    setCommentLoading(false)
    setComments(prev=>[...prev,res.data.newComment])
    
}
    }

    async function getPostComments(){

const res=await axios.get(`/api/get-comment/${postId}`)
if(res.data.post){
    setComments(res.data.post.comments)
}

    }

    async function checkUser(){
        const res=await axios.get("/api/check-user")
        setIsLoggedIn(res.data.mssg)
    }
    useEffect(()=>{
getPostComments()
checkUser()
    },[])
  return (
    <div className='w-screen h-max py-8 flex flex-col gap-4 px-8 relative before:absolute before:content-[""] before:w-[90vw] before:h-[2px] before:bg-black before:top-4'>
        <Toast toastVal={toast} showToast={showToast}/>
<h1 className='text-2xl font-semibold text-center w-full font-mono'>Comment Section</h1>
<section className='w-screen flex items-center justify-start flex-col'>
    <form className='flex gap-4' onSubmit={(e)=>e.preventDefault()}>
<input type='text' placeholder='Enter a comment...' className='w-[70vw] h-[2rem] py-1 px-4 rounded-md border border-gray-300 text-sm' ref={commentRef}/>
<Button className='bg-[#31caae] text-white' onClick={handleAddComment} disabled={!isLoggedIn} loading={commentLoading}>send</Button>
    </form>
    <div className='w-full h-max py-4 relative before:absolute before:content-[""] before:w-[95%]  before:h-[1px] before:bg-gray-400 flex flex-col items-center justify-start px-4  '>
        {/* comments */}
        {comments && comments.length>0?comments.map((comment:any,i)=>{
            return <div className='w-[80vw] min-h-[4rem] py-2 px-4 bg-gray-300 mt-4 rounded-md flex items-start justify-center flex-col gap-2' key={i}>
            <div className='flex justify-center items-center gap-4'>
            <img src={comment.user.profileImage} className='w-[2rem] h-[2rem] object-cover rounded-full' />
            <h3 className='font-semibold'>{comment.user.username}</h3>
            </div>  
            <p className='text-gray-600 text-sm'>{comment.comment}</p> 
            </div>
        }):<div className='w-screen h-[20vh] flex justify-center items-center font-mono font-semibold text-xl'>This post has no comments!</div> }

    </div>
</section>

    </div>
  )
}

export default CommentSection