
"use client"
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import Socials from './Socials';
import { GlobalContext } from '../GlobalContext/Context';
import axios from 'axios';
import Link from 'next/link';
import DrawerMenu from '../Drawer/Drawer';
import NextTopLoader from 'nextjs-toploader';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);


function Nav({showSearchBar}:any){
const {setPosts}=useContext(GlobalContext)
const [user,setUser]=useState<Object | any>()
const [searchLoading,setSearchLoading]=useState(false)
const [showProfile,setShowProfile]=useState<Boolean>(false)
const onSearch: SearchProps['onSearch'] =async (value)=>{
  const formData=new FormData()
  formData.append("value",value)
  setSearchLoading(true)
const res=await axios.post("api/search",formData)
if(res.data){
  setSearchLoading(false)
setPosts(res.data.posts)
}
}
async function handleOnChange(e:ChangeEvent<HTMLInputElement>){
  if(e.target.value==""){
    const res=await axios.get("/api/posts")  
    if(res.data){
      setPosts(res.data.posts)

    }
  }

}
async function getLoggedInUser(){
const res=await axios.get("/api/get-user")
if(res.status==200){
  setUser(res.data)
  setShowProfile(true)
}
}
useEffect(()=>{
getLoggedInUser()
},[])

return (
  <div className="w-screen h-[15vh] bg-white border border-slate-300 flex  gap-12 justify-between items-center px-10 md:px-20 z-50 fixed">
    {showProfile && user ?<Link href={`profile/${user._id}`} className='flex items-center justify-center gap-3'>
    <NextTopLoader color='#31caae'/>
<img src={user?.profileImage} className='w-[2rem] h-[2rem] rounded-full object-cover'/>
  <h3>{user?.username}</h3>
  </Link>:null}
    {showSearchBar?<Search placeholder="Search here " onSearch={onSearch} style={{ width: 200 }} onChange={handleOnChange} loading={searchLoading} className='hidden md:block'/>  :null}
    <Link href="/"><h1 className='font-semibold text-xl md:text-2xl  font-mono'>Blogify</h1></Link>


    <div className='flex items-center h-full'>
    <Socials/>
    <div className='flex items-center cursor-pointer h-full'>
      <DrawerMenu onSearch={onSearch} handleOnChange={handleOnChange} searchLoading={searchLoading} showSearchBar={showSearchBar}/>
    </div>
    </div>
    </div>
);
}
export default Nav;