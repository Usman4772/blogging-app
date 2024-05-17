
import React from 'react'
function page() {

  return (
    <div className='w-screen h-screen flex justify-between px-4 items-center'>
     <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg?t=st=1715689820~exp=1715693420~hmac=f97d47356607d1af5650469a5ca1fc30a0de97feba4bb596e0bc088699fa0e9a&w=740" alt='Register Here' className='w-[40%]'/>
     <div className='w-[60%]  h-full flex items-center justify-center'>
     <form className='w-[30vw] h-[75vh] rounded-md border border-gray-400 flex items-center justify-start flex-col py-9 gap-8 relative' action="/api/login" method='post'  >
        <h1 className='font-bold text-2xl font-mono'>Login to Blogify</h1>
        <div className='w-full flex flex-col px-8 gap-4'>
            <label className='font-xl font-semibold text-gray-900'>Email</label>
            <input type='email' name='email'  className='border border-gray-400 py-1 px-4 rounded-md' placeholder='Email'/>
            <label className='font-xl font-semibold text-gray-900'>Password</label>
            <input type='password' name='password'  className='border border-gray-400 py-1 px-4 rounded-md' placeholder='Password'/>

        </div>
     <button type='submit' className='absolute bottom-4 bg-[#31caae] text-white text-sm py-2 px-8 font-semibold cursor-pointer rounded-md'>Login</button>
     </form>
     </div>
    </div>
  )
}

export default page