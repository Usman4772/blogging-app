"use client"

import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Spin } from 'antd';
import Link from "next/link";
import { GlobalContext } from "../GlobalContext/Context";
import Toast from "../Toasts/Toast";


function Posts() {
    const {posts,setPosts}=useContext(GlobalContext)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("")
    async function getAllPosts(){
try{
    setLoading(true)
    const res=await axios.get("http://localhost:3000/api/posts")   
 setPosts(res.data.posts)
 setLoading(false)
   
}catch(e:any){
    setLoading(false)
    setError(e.message)
console.log(e)
}

    }
    useEffect(()=>{
        getAllPosts()
    },[])
  
if(loading)return <div className="w-screen h-[70vh] flex justify-center items-center"><Spin size="large" /></div>
if(error) return <div className="w-screen h-[70vh] flex justify-center items-center"></div>

  return (
    <div className="w-screen flex gap-4 justify-center items-center flex-wrap py-4 ">{
        posts && posts.length>0?posts.map((post:any,i:number)=>{
            return <Link href={`/posts/${post._id}`} key={i} className="w-[400px] h-[250px] bg-gray-200 rounded cursor-pointer  flex justify-start items-start flex-col overflow-hidden gap-1">
                <img src={post.cover_url} className="w-full h-[70%] object-cover "/>
                <h2 className="font-semibold text-xl overflow-hidden whitespace-nowrap text-ellipsis w-full px-4">{post.title}</h2>
               <div className="flex gap-2 items-center justify-center px-4">
            <img src={post.user.profileImage} className="w-[2rem] h-[2rem]" style={{borderRadius:"50%"}}/>
            <h2>{post.user.username}</h2>
               </div>
            </Link>
        }):<div className="w-screen h-[80vh] text-2xl flex items-center justify-center font-semibold font-mono">No Posts Found!!!</div>
        }
        <Toast/>
        </div>
  )
}

export default Posts