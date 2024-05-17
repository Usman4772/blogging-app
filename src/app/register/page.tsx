

"use client"

import axios from "axios"
import { ChangeEvent, FormEvent, useRef, useState } from "react"

function page() {
const [profileImage,setProfileImage]=useState<File|null>()
const usernameRef=useRef<HTMLInputElement>(null)
const passwordRef=useRef<HTMLInputElement>(null)
const emailRef=useRef<HTMLInputElement>(null)
function handleOnChange(e:ChangeEvent<HTMLInputElement>){
  if(e.target.files){
    setProfileImage(e.target.files[0])
  }
}


async function handleSubmit(e:FormEvent<HTMLFormElement>){
  e.preventDefault()
  const username=usernameRef.current?.value || ""
  const email=emailRef.current?.value || ""
  const password=passwordRef.current?.value || ""
  const formData=new FormData()
  formData.append("username",username)
  formData.append("email",email)
  formData.append("password",password)
  if(profileImage){
    formData.append("image",profileImage)
  }
  const response=await axios.post("api/register",formData)
  console.log(response)

}
  return (
    <div className='w-screen h-screen flex justify-between px-4 items-center'>
     <img src="https://img.freepik.com/premium-vector/data-security-concept-illustration_251005-467.jpg?w=740" alt='Register Here' className='w-[40%]'/>
     <div className='w-[60%]  h-full flex items-center justify-center'>
     <form className='w-[30vw] h-[75vh] rounded-md border border-gray-400 flex items-center justify-start flex-col py-9 gap-8 relative' onSubmit={handleSubmit}>
        <h1 className='font-bold text-2xl font-mono'>Register to Blogify</h1>
        <div className='w-full flex flex-col px-8 gap-4'>
            <label className='font-xl font-semibold text-gray-900'>Username</label>
            <input type='text' name='username' className='border border-gray-400 py-1 px-4 rounded-md' placeholder='Username' ref={usernameRef} required ></input>
            <label className='font-xl font-semibold text-gray-900'>Email</label>
            <input type='email' name='email'  className='border border-gray-400 py-1 px-4 rounded-md' placeholder='Email' ref={emailRef} required/>
            <label className='font-xl font-semibold text-gray-900'>Password</label>
            <input type='password' name='password'  className='border border-gray-400 py-1 px-4 rounded-md' placeholder='Password' ref={passwordRef} required/>
            <input type='file' name="profileImage" onChange={handleOnChange}/>

        </div>
     <button type='submit' className='absolute bottom-4 bg-[#31caae] text-white text-sm py-2 px-8 font-semibold cursor-pointer rounded-md'>Regsiter</button>
     </form>
     </div>
    </div>
  )
}

export default page