"use client"
import axios from "axios"
import Link from "next/link"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "antd"
function page() {
  const emailRef=useRef<HTMLInputElement>(null)
  const passwordRef=useRef<HTMLInputElement>(null)
  const [error,setError]=useState("")
  const [btnLoading,setBtnLoading]=useState(false)
  const router=useRouter()
async function login(){
  const formData=new FormData()
  const email=emailRef.current?.value || ""
  const password=passwordRef.current?.value|| ""
  formData.append("email",email)
  formData.append("password",password)
  setBtnLoading(true)
  const res=await axios.post("/api/login",formData)
  if(res.data.message=="success"){
    setBtnLoading(false)
    setError("")
router.push('/')

  }else{
    setBtnLoading(false)
setError("Email or Password is wrong!")
    router.push("/login")
  }
}
  return (
    <div className='w-screen h-screen flex justify-center md:justify-between px-4 items-center'>
     <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg?t=st=1715689820~exp=1715693420~hmac=f97d47356607d1af5650469a5ca1fc30a0de97feba4bb596e0bc088699fa0e9a&w=740" alt='Login Here' className='w-[40%] hidden md:block'/>
     <div className='w-ful md:w-[60%]  h-full flex items-center justify-center'>
     <form className='w-full md:w-[30vw] h-[75vh] rounded-md md:border md:border-gray-400 flex items-center justify-center md:justify-start flex-col py-9 gap-8 relative' onSubmit={(e)=>e.preventDefault()} >
        <h1 className='font-bold text-2xl font-mono'>Login to <Link href="/" className="text-[#31caae]">Blogify</Link></h1>
        <div className='w-full flex flex-col px-8 gap-4'>
            <label className='font-xl font-semibold text-gray-900'>Email</label>
            <input type='email' name='email'  className='border border-gray-400 py-1 px-4 rounded-md' placeholder='Email' ref={emailRef}/>
            <label className='font-xl font-semibold text-gray-900'>Password</label>
            <input type='password' name='password'  className='border border-gray-400 py-1 px-4 rounded-md' placeholder='Password' ref={passwordRef}/>
            {error?<div className="font-semibold text-md text-red-700">{error}</div>:null}

        </div>
     <Button  className='absolute bottom-4 bg-[#31caae] text-white text-sm py-2 px-8 font-semibold cursor-pointer rounded-md flex items-center justify-center' onClick={login} loading={btnLoading}>Login</Button>
     <p>Don't have an account yet? <Link href="/register" className="text-[#31caae]">Register</Link></p>
     </form>
     </div>
    </div>
  )
}

export default page