
"use client"
import React, { ChangeEvent, useContext, useState } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import Socials from './Socials';
import { GlobalContext } from '../GlobalContext/Context';
import axios from 'axios';
import Link from 'next/link';
import DrawerMenu from '../Drawer/Drawer';

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
const onSearch: SearchProps['onSearch'] =async (value)=>{
  const formData=new FormData()
  formData.append("value",value)
const res=await axios.post("api/search",formData)
if(res.data){
setPosts(res.data.posts)
}
}
async function handleOnChange(e:ChangeEvent<HTMLInputElement>){
  if(e.target.value==""){
    const res=await axios.get("http://localhost:3000/api/posts")  
    if(res.data){
      setPosts(res.data.posts)
    }
  }

}



return (
  <div className="w-screen h-[15vh] bg-white border border-slate-300 flex justify-between items-center px-20 z-50 fixed">
    {showSearchBar?<Search placeholder="input search text " onSearch={onSearch} style={{ width: 200 }} onChange={handleOnChange}  />  :null}
    <Link href="/"><h1 className='font-semibold text-2xl  font-mono'>Blogify</h1></Link>
    <div className='flex items-center h-full'>
    <Socials/>
    
    <div className='flex items-center cursor-pointer h-full'>
      <DrawerMenu/>
    </div>
    </div>
    </div>
);
}
export default Nav;