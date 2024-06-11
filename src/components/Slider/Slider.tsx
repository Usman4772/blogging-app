"use client"
import {  useEffect, useState } from 'react';
import { Carousel } from 'antd';
import Link from 'next/link';
import NextTopLoader from 'nextjs-toploader';
import axios from 'axios';
import { Spin } from 'antd';
const Slider: React.FC = () => {
const [loading,setLoading]=useState<Boolean>(false)
const [allPosts,setAllPosts]=useState<Array<Object>|null>([])
const [error,setError]=useState("")
async function getAllPosts(){
  try{
      setLoading(true)
      const res=await axios.get("/api/posts")   
   setAllPosts(res.data.posts)
   setLoading(false)
     
  }catch(e:any){
      setLoading(false)
      setError(e.message)
  }
  
      }
useEffect(()=>{
  getAllPosts()
},[])
if(loading)return <div className="w-screen h-[70vh] flex justify-center items-center"><Spin size="large" /></div> 

  return (
    <Carousel autoplay className='w-[90vw] md:w-[70vw] h-[60vh] rounded-lg overflow-hidden bg-white flex items-center justify-center  slider' fade={true} dots={false} arrows={true}   >
      {allPosts && allPosts.length>0?allPosts.map((post:any,i:number)=>{
        return<div className='w-full h-[60vh]' key={i}>
     <Link href={`/posts/${post._id}`} key={i+1} className="w-full  h-[60vh] bg-white rounded cursor-pointer  flex justify-center md:justify-start  items-center md:items-start overflow-hidden gap-1 md:gap-8 hover:text-black flex-col md:flex-row">
                <NextTopLoader color="#31caae"/>
                <img src={post.cover_url} className="w-full md:w-[50%] h-full object-cover rounded-lg"/>
                <div className='flex items-center md:items-start justify-center gap-4 flex-col w-screen  md:w-[50%] h-full px-4'>
                <h2 className="font-bold text-xl md:text-4xl  w-[80vw] p-0 md:px-4 text-center md:text-start">{post.title}</h2>
                <p className='px-0  overflow-hidden md:px-4 text-start text-gray-700 md:h-full  break-words whitespace-normal hidden md:block'>{post.description.replace(/<[^>]*>/g, '').slice(0,500)}...</p>

               <div className=" flex gap-2 items-center justify-center px-4 ">
            <img src={post.user.profileImage} className="w-[2rem] h-[2rem]" style={{borderRadius:"50%"}}/>
            <h2>{post.user.username}</h2>
               </div>
               </div>
            </Link>
              </div>
      }):null}
    </Carousel>
  );
};

export default Slider;