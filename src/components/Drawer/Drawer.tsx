import React, { useState,useEffect } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { FiMenu } from 'react-icons/fi';
import axios from 'axios';
import Link from 'next/link';
import NextTopLoader from 'nextjs-toploader';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
)

function DrawerMenu({onSearch,handleOnChange,searchLoading,showSearchBar}:any) {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
  const [isLoggedIn,setIsLoggedIn]=useState<Boolean>(false)
const [loginLoading,setLoginLoading]=useState(false)
const [registerLoading,setRegisterLoading]=useState(false)
const [logoutLoading,setLogoutLoading]=useState(false)

async function checkUser(){
  const res=await axios.get("/api/check-user")
  if(res.data){
    setIsLoggedIn(res.data.mssg)
  }
}
useEffect(()=>{
checkUser()
},[])
  async function logout(){
    setLogoutLoading(true)
    const res=await axios.get("/api/logout")
    if(res.data){
      setIsLoggedIn(false)
      setLoginLoading(false)
    }

  }

  const showDrawer = () => {
    setOpen(true);
  };


  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button  onClick={showDrawer}>
        <FiMenu className='text-xl' />
        </Button>
      </Space>
      <Drawer
        title="Menu"
        placement={placement}
        width={300}
        onClose={onClose}
        open={open}
      >
<ul className='w-full h-full flex flex-col justify-start items-center gap-4 py-24'>
 {showSearchBar? <Search placeholder="input search text " onSearch={onSearch} style={{ width: 200 }} onChange={handleOnChange} loading={searchLoading} className='md:hidden block'/> :null}
<Link href="/" className='relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:bg-[#31caae] after:w-0 after:h-[2px] hover:after:w-full transition-all ease-in '>Home</Link>
<Link href="/about" className='relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:bg-[#31caae] after:w-0 after:h-[2px] hover:after:w-full transition-all ease-in '>About</Link>
<Link href="/contact" className='relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:bg-[#31caae] after:w-0 after:h-[2px] hover:after:w-full transition-all ease-in '>Contact Us</Link>
{isLoggedIn?(<><Button className='py-1 px-12  rounded  font-semibold text-sm' onClick={logout} loading={logoutLoading}>Logout</Button>
<NextTopLoader color='#31caae'/>
<Link href="/create-blog" ><Button className='py-1 px-12 bg-[#31caae] text-white rounded-md font-semibold'>Create Blog</Button></Link></>):<div className='flex gap-2 flex-col justify-center items-center'>
  <Link href="/login"><Button className='px-12' loading={loginLoading}  onClick={()=>setLoginLoading(prev=>!prev)}>Login</Button></Link>
  <Link href="/register"><Button  className='py-1 px-12 bg-[#31caae] rounded text-white' loading={registerLoading} onClick={()=>setRegisterLoading(prev=>!prev)}>Register</Button></Link>
  <Link href="/login" ><Button className='py-1 px-12 bg-[#31caae] text-white rounded-md font-semibold'>Create Blog</Button></Link>
</div>}
</ul>
      </Drawer>
    </>
  );
};

export default DrawerMenu;