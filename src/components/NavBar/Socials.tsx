"use client"
import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
function Socials() {
  return (
    <div className='w-[20vw] h-[14vh] flex items-center justify-center gap-4 bg-white'>
<Link href=""><FaFacebookF/></Link>
<Link href="https://www.instagram.com/mani________47/"><FaInstagram/></Link>
<Link href="https://github.com/Usman4772"><AiFillGithub/></Link>
    </div>
  )
}

export default Socials