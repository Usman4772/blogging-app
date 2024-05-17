
"use client"
import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import Socials from './Socials';
import { FiMenu } from "react-icons/fi";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

function Nav(){
return (
  <div className="w-screen h-[15vh] bg-white border border-slate-300 flex justify-between items-center px-20">
    <Search placeholder="input search text " onSearch={onSearch} style={{ width: 200 }} />  
    <h1 className='font-semibold text-2xl  font-mono'>Blogify</h1>
    <div className='flex items-center h-full'>
    <Socials/>
    <div className='flex items-center cursor-pointer h-full'>
      <FiMenu className='text-2xl'/>
    </div>
    </div>
    </div>
);
}
export default Nav;