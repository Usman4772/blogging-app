"use client"
import { useContext } from 'react';
import { Carousel } from 'antd';
import Link from 'next/link';
import NextTopLoader from 'nextjs-toploader';
import { GlobalContext } from '../GlobalContext/Context';
const Slider: React.FC = () => {
const {posts}=useContext(GlobalContext)
  return (
    <Carousel  autoplay className='w-[70vw] h-[60vh] rounded-lg overflow-hidden bg-white flex items-center justify-center  slider' fade={true} dots={false} arrows={true}  >
      {posts && posts.length>0?posts.map((post:any,i:number)=>{
        return<div className='w-full h-[60vh]'>
     <Link href={`/posts/${post._id}`} key={i} className="w-full h-[60vh] bg-white rounded cursor-pointer  flex justify-start  items-start overflow-hidden gap-8 hover:text-black">
                <NextTopLoader color="#31caae"/>
                <img src={post.cover_url} className="w-[50%] h-full object-cover rounded-lg"/>
                <div className='flex items-start justify-center gap-4 flex-col w-[50%] h-full px-4'>
                <h2 className="font-bold text-4xl  w-full px-4 ">{post.title}</h2>
                <p className='px-4 text-gray-700'>{post.description.replace(/<[^>]*>/g, '').slice(0,500)}...</p>

               <div className="flex gap-2 items-center justify-center px-4">
            <img src={post.user.profileImage} className="w-[2rem] h-[2rem]" style={{borderRadius:"50%"}}/>
            <h2>{post.user.username}</h2>
               </div>
               </div>
            </Link>
              </div>
      }):null}

    </Carousel>
  );
};

export default Slider;