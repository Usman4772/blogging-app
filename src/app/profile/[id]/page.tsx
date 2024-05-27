"use client"

import UserProfile from "@/components/UserProfile/UserProfile"
import axios from "axios"
import { useEffect, useState } from "react"
import Nav from "@/components/NavBar/Nav"
import UserBlogs from "@/components/UserBlogs/UserBlogs"


function Profile({params}:any) {
    const [blogs,setBlogs]=useState<Array<Object>>()
    const [user,setUser]=useState()
    const id=params.id
    async function getUserPosts(){
        const res=await axios.get(`/api/profile/${id}`)
if(res.data.user){
    setUser(res.data.user)
    setBlogs(res.data.user.blogs)
}
    }
    useEffect(()=>{
 getUserPosts()
    },[])
  return (
    <div className="">
      <Nav showSearchBar={false}/>
        <UserProfile user={user}/>
        <UserBlogs blogs={blogs} user={user}/>
    </div>
  )
}

export default Profile