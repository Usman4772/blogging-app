"use client"
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from 'antd'

function Menu() {
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
  return (
    <div className='w-[20vw] h-[80vh] bg-white border border-gray-400 fixed top-[15vh] right-0 flex items-center justify-center rounded-md z-40'>
<ul className='w-full h-full flex flex-col justify-start items-center gap-4 py-24'>
<Link href="/" className='relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:bg-[#31caae] after:w-0 after:h-[2px] hover:after:w-full transition-all ease-in '>Home</Link>
<Link href="/about" className='relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:bg-[#31caae] after:w-0 after:h-[2px] hover:after:w-full transition-all ease-in '>About</Link>
<Link href="/contact" className='relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:bg-[#31caae] after:w-0 after:h-[2px] hover:after:w-full transition-all ease-in '>Contact Us</Link>
{isLoggedIn?(<><Button className='py-1 px-12  rounded  font-semibold text-sm' onClick={logout} loading={logoutLoading}>Logout</Button>
<Link href="/create-blog" ><Button className='py-1 px-12 bg-[#31caae] text-white rounded-md font-semibold'>Create Blog</Button></Link></>):<div className='flex gap-2 flex-col justify-center items-center'>
  <Link href="/login"><Button className='px-12' loading={loginLoading}  onClick={()=>setLoginLoading(prev=>!prev)}>Login</Button></Link>
  <Link href="/register"><Button  className='py-1 px-20 bg-[#31caae] rounded text-white' loading={registerLoading} onClick={()=>setRegisterLoading(prev=>!prev)}>Register</Button></Link>
</div>}
</ul>
    </div>
  )
}

export default Menu