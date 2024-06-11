"use client"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Spin } from 'antd';
import Link from "next/link";
import { GlobalContext } from "../GlobalContext/Context";
import Toast from "../Toasts/Toast";
import NextTopLoader from 'nextjs-toploader';
import {Pagination} from "antd";
function Posts() {
    const {posts,setPosts}=useContext(GlobalContext)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("")
    const [categories,setCategories]=useState<Array<string>>([])
    const [allPosts,setAllPosts]=useState([])//for filtereing
    const [currentFilteredIndex,setCurrentFilteredIndex]=useState<number | null>(null)
    const [currentPage,setCurrentPage]=useState<number>(1)
    const productsPerPage=3;
    function handleSetCategory(posts:any){
if(posts.length>0){
    const allCategories=new Set<string>()
    posts.forEach((post:any)=>{
        if(post.category!=="all"){
            allCategories.add(post.category)
        }
    })
    setCategories(Array.from(allCategories))
}
    }
    async function getAllPosts(){
try{
    setLoading(true)
    const res=await axios.get("http://localhost:3000/api/posts")   

slicePosts(res.data.posts)
 setAllPosts(res.data.posts)
 handleSetCategory(res.data.posts)
 setLoading(false)
   
}catch(e:any){
    setLoading(false)
    setError(e.message)
}

    }
    useEffect(()=>{
        getAllPosts()
    },[])
    function slicePosts(posts:any){
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentPosts = posts.slice(indexOfFirstProduct, indexOfLastProduct);
setPosts(currentPosts)
    }
    useEffect(()=>{
slicePosts(allPosts)
    },[currentPage])

    function filterPosts(category:string,i:number){
        handleFilterStyles(i)
const filteredPosts=allPosts.filter((post:any)=>post.category===category)
setPosts(filteredPosts)
    }
    function handleAll(e:any){
        getAllPosts()
setCurrentFilteredIndex(null)
    }
    function handleFilterStyles(i:number){
categories.forEach((_,index)=>{
    if(index==i){
        setCurrentFilteredIndex(index)
    }

})
    }


    function handlePaginatioin(page:number){
        setCurrentPage(page)
    }
  
if(loading)return <div className="w-screen h-[70vh] flex justify-center items-center"><Spin size="large" /></div>
if(error) return <div className="w-screen h-[70vh] flex justify-center items-center">Something Went wrong!!</div>
  return (
    <div className="w-screen flex flex-col">
        <div className="w-screen flex justify-center items-center gap-6 md:gap-8">
            <h1 onClick={handleAll} className="capitalize cursor-pointer relative after:content-[''] after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] hover:after:w-full after:bg-[#31caae] " style={{color:currentFilteredIndex !==null?"black":'aqua'}}>All</h1>
  {categories && categories.length>0 ? categories.map((categ:any,i:number)=>{
    return <h1 style={{color:i==currentFilteredIndex?"aqua":"black"}} className="capitalize cursor-pointer relative after:content-[''] after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] hover:after:w-full after:bg-[#31caae] " onClick={()=>filterPosts(categ,i)} key={i}>{categ}</h1>
  }):null}
        </div>
    <div className="w-screen flex gap-4 justify-center items-center flex-wrap py-4 ">
        {
        posts && posts.length>0?posts.map((post:any,i:number)=>{
            return <Link href={`/posts/${post._id}`} key={i} className="w-[380px] md:w-[400px] h-[450px] bg-white rounded cursor-pointer  flex justify-start items-start flex-col overflow-hidden gap-4">
                <NextTopLoader color="#31caae"/>
                <img src={post.cover_url} className="w-full h-[250px] object-cover rounded-lg"/>
                <h2 className="font-bold font-sans text-xl overflow-hidden whitespace-nowrap text-ellipsis w-full ">{post.title}</h2>
                <p className="text-sm text-gray-700">{post.description.replace(/<[^>]*>/g, '').slice(0,100)}...</p>
               <div className="flex gap-2 items-center justify-center ">
            <img src={post.user.profileImage} className="w-[2rem] h-[2rem] object-cover" style={{borderRadius:"50%"}}/>
            <h2>{post.user.username}</h2>
               </div>
            </Link>
        }):<div className="w-screen h-[80vh] text-2xl flex items-center justify-center font-semibold font-mono">No Posts Found!!!</div>
        }
        <Toast/>
        </div>
        <Pagination defaultCurrent={1} total={allPosts.length} onChange={(page)=>handlePaginatioin(page)} defaultPageSize={productsPerPage} current={currentPage} className="w-screen flex justify-center py-4"/>
        </div>
  )
}

export default Posts