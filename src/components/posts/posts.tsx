"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Spin } from 'antd';
import Link from "next/link";
function Posts() {
    const [posts,setPosts]=useState([])
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
    <div className="w-screen flex gap-4 justify-center items-center flex-wrap">{
        posts && posts.length>0?posts.map((post)=>{
            return <Link href={`/posts/${post._id}`} className="w-[400px] h-[250px] bg-gray-200 rounded cursor-pointer"></Link>
        }):null
        }
        </div>
  )
}

export default Posts