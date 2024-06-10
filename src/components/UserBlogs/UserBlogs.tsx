
import Link from "next/link"
import NextTopLoader from "nextjs-toploader"
import { BsPostcard } from "react-icons/bs";
function UserBlogs({blogs,user}:any) {
  return (
    <div className="w-screen h-max flex items-center justify-center flex-wrap mt-12 flex-col gap-8">
        <h1 className="text-2xl relative after:absolute after:bg-[#ff2256] after:w-full after:origin-center after:h-[2px] after:left-0 after:bottom-[-5px] "><BsPostcard/></h1>
    <div className="w-screen flex gap-4 justify-center items-center flex-wrap">
    {blogs && blogs.length>0?blogs.map((blog:any,i:number)=>{
        return <Link href={`/posts/${blog._id}`} key={i} className="w-[400px] h-[450px] bg-white rounded cursor-pointer  flex justify-start items-start flex-col overflow-hidden gap-4">
        <NextTopLoader color="#31caae"/>
        <img src={blog.cover_url} className="w-full h-[250px] object-cover rounded-lg"/>
        <h2 className="font-bold font-sans text-xl overflow-hidden whitespace-nowrap text-ellipsis w-full ">{blog.title}</h2>
        <p className="text-sm text-gray-700">{blog.description.replace(/<[^>]*>/g, '').slice(0,100)}...</p>
       <div className="flex gap-2 items-center justify-center ">
    <img src={user.profileImage} className="w-[2rem] h-[2rem]" style={{borderRadius:"50%"}}/>
    <h2>{user.username}</h2>
       </div>
    </Link>
    }):<div className="w-screen h-max py-24 text-2xl flex items-center justify-center font-semibold font-mono">No Posts Available!!!</div>}
    </div>
    </div>
  )
}

export default UserBlogs