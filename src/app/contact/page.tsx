import React from 'react'
import { InstagramOutlined } from '@ant-design/icons'
import { FacebookOutlined } from '@ant-design/icons'
import { GithubFilled } from '@ant-design/icons'
import { PhoneAndroid } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import Link from 'next/link'
import Nav from '@/components/NavBar/Nav'

function Contact() {
  return (
  <div>
          <Nav showSearchBar={false}/>
    <div className='w-screen h-[80vh] relative top-[20vh]  bg-white flex items-center justify-start flex-col gap-12 py-8'>
   <h1 className='text-2xl font-semibold'>Social Links</h1>
    <div className='w-full h-full  flex items-start justify-start flex-col gap-4 px-8 py-8 '>
    <Link className="w-full h-[20%] flex items-center justify-start gap-4 hover:text-customYellow" href={"https://www.instagram.com/mani________47/"} >
    <InstagramOutlined className='text-black  text-xl'/>
    <div>Instagram</div>
    </Link>
    <Link className="w-full h-[20%] flex items-center justify-start gap-4 hover:text-customYellow" href={"https://www.facebook.com/usmam.usman.7165"}>
    <FacebookOutlined className='text-black text-xl'/>
    <div>Facebook</div>
    </Link>
    <Link className="w-full h-[20%] flex items-center justify-start gap-4 hover:text-customYellow" href={"https://github.com/Usman4772"}>
    <GithubFilled className='text-black text-xl'/>
    <div>Github</div>
    </Link>
    <div className="w-full h-[20%] flex items-center justify-start gap-4 hover:text-customYellow cursor-default">
    <PhoneAndroid className='text-black text-xl'/>
    <div>03035808043</div>
    </div>
    <div  className="w-full h-[20%] flex items-center justify-start gap-4 hover:text-customYellow cursor-default">
    <Email className='text-black text-xl'/>
    <div>usmanali477275@gmail.com</div>
    </div>
    
    </div>
    </div>
    </div>
  )
}

export default Contact