

"use client"

import axios from "axios"
import { ChangeEvent, FormEvent, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "antd"
import { UploadOutlined } from '@ant-design/icons';
import { useRouter } from "next/navigation"

function page() {
const [profileImage,setProfileImage]=useState<File|null>()
const [registerLoading,setRegisterLoading]=useState(false)
const usernameRef=useRef<HTMLInputElement>(null)
const passwordRef=useRef<HTMLInputElement>(null)
const emailRef=useRef<HTMLInputElement>(null)
const fileInputRef=useRef<HTMLInputElement>(null)
const [error,setError]=useState("")
const router=useRouter()
function handleOnChange(e:ChangeEvent<HTMLInputElement>){
  if(e.target.files){
    setProfileImage(e.target.files[0])
  }
}

function selectFile(){
  fileInputRef.current?.click()
}
async function handleSubmit(){
  
  const username=usernameRef.current?.value || ""
  const email=emailRef.current?.value || ""
  const password=passwordRef.current?.value || ""
  if(username=="" || email=="" || password=="" || profileImage==undefined){
    setError("Please Fill all the fileds!")
    return
  }
  setRegisterLoading(prev=>!prev)
  const formData=new FormData()
  formData.append("username",username)
  formData.append("email",email)
  formData.append("password",password)
  if(profileImage){
    formData.append("image",profileImage)
  }
  const response=await axios.post("api/register",formData)
if(response.data.message=="success"){
  setError("")
  setRegisterLoading(false)
  router.push("/")
}else{
  setError(response.data.message)
  setRegisterLoading(false)
  router.push("/register")


}

}
  return (
    <div className='w-screen h-screen flex md:justify-between justify-center px-4 items-center'>
     <img src="https://img.freepik.com/premium-vector/data-security-concept-illustration_251005-467.jpg?w=740" alt='Register' className='w-[40%] hidden md:block'/>
     <div className='w-screen md:w-[60%]  h-full flex items-center justify-center '>
     <form className=' w-full md:w-[30vw] h-[95vh]  rounded-md md:border md:border-gray-400 flex items-center justify-center md:justify-start flex-col py-9 gap-5 relative ' onSubmit={handleSubmit}>
        <h1 className='font-bold text-2xl font-mono'>Register to <Link href="/" className="text-[#31caae]">Blogify</Link></h1>
        {error?<p className="text-red-600 text-sm font-semibold ">{error}</p>:null}
        <div className='w-full flex flex-col px-8 gap-4'>
            <label className='font-xl font-semibold text-gray-900'>Username</label>
            <input type='text' name='username' className='border border-gray-400 py-1 px-4 rounded-md' placeholder='Username' ref={usernameRef} required ></input>
            <label className='font-xl font-semibold text-gray-900'>Email</label>
            <input type='email' name='email'  className='border border-gray-400 py-1 px-4 rounded-md' placeholder='Email' ref={emailRef} required/>
            <label className='font-xl font-semibold text-gray-900'>Password</label>
            <input type='password' name='password'  className='border border-gray-400 py-1 px-4 rounded-md' placeholder='Password' ref={passwordRef} required/>
            <input type='file' name="profileImage" onChange={handleOnChange} hidden ref={fileInputRef} accept="image/jpg,image/jpeg,image/avif" required/>
            <Button icon={<UploadOutlined />} onClick={selectFile}> Profile Image</Button>
        </div>
     <Button  className='absolute bottom-12 md:bottom-4 bg-[#31caae] text-white text-sm py-2 px-8 font-semibold cursor-pointer rounded-md flex items-center justify-center' loading={registerLoading} onClick={handleSubmit}>Regsiter</Button>
     <p>Already have account? <Link href="/login" className="text-[#31caae]">Login</Link></p>
     </form>
     </div>
    </div>
  )
}

export default page