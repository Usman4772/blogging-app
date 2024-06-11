"use client"
import CommentSection from '@/components/Comments/CommentSection'
import Nav from '@/components/NavBar/Nav'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Spin } from 'antd'


 function PostDetails({params}:any) {
    const id=params.id
    const [data,setData]=useState<any>()
    const [error,setError]=useState<any>("")
    const [loading,setLoading]=useState<Boolean>(false)
async function getDetails(id:any){
  try{
  setLoading(true)
   const res=await axios.get(`/api/${id}`)
 if(res.data){
  setLoading(false)
  setData(res)
 }
  }catch(e){
   setLoading(false)
   setError(e)
  }
   }
useEffect(()=>{
  getDetails(id)
},[id])
if(loading)return <div className="w-screen h-screen flex justify-center items-center"><Spin size="large" /></div>
if(error) return <div className="w-screen h-[70vh] flex justify-center items-center">Something Went wrong!!</div>
return (
      <div className='w-screen h-max flex flex-col gap-4'>
        <Nav showSearchBar={false}/>
        <div className='flex items-center justify-center h-max rounded-lg '>
<img src={data?.data?.post?.cover_url} className='w-[80%] md:w-[50%] h-[30vh] md:h-[50vh] object-cover relative top-32 md:top-24 rounded-lg'/>
</div>
<div className='flex flex-col justify-center items-center gap-4 mt-32 md:mt-24'>
<h2 className='font-semibold font-mono text-xl'>Posted By:</h2>
  <div className='flex items-center justify-center gap-4'>
    <img src={data?.data.post.user?.profileImage} className='w-[2rem] h-[2rem] rounded-full' />
    <h3>  {data?.data.post.user?.username}</h3>
  </div>

</div>
     <h2 className='w-screen text-center py-8 text-3xl  font-sans font-bold'>{data?.data?.post?.title}</h2>
      <div dangerouslySetInnerHTML={{__html:data?.data?.post?.description}} className='w-screen h-max py-2 px-12 font-sans text-gray-500'></div>
      <CommentSection postId={id}/>
      </div>
    )
  }
  export default PostDetails