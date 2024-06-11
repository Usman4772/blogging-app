"use client"
import React, { ChangeEvent, useContext, useState } from 'react'
import { useRef } from 'react';
import {Editor} from "@tinymce/tinymce-react"
import axios from 'axios';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Nav from '@/components/NavBar/Nav';
import { GlobalContext } from '@/components/GlobalContext/Context';
import Menu from '@/components/Menu/Menu';
import Toast from '@/components/Toasts/Toast';
import { useRouter } from 'next/navigation';
import Category from '@/components/Category/Category';
function BlogForm() {
  const [image,setImage]=useState<File |null>()
  const titleRef=useRef<HTMLInputElement>(null)
  const editorRef=useRef<any>(null)
  const fileInputRef=useRef<HTMLInputElement>(null)
  const {showMenu}=useContext(GlobalContext)
  const [showToast,setShowToast]=useState(false)
  const [toastValue,setToastValue]=useState("")
  const [error,setError]=useState("")
  const [btnLoading,setBtnLoading]=useState(false)
  const router=useRouter()
  const [category,setCategory]=useState("all")

    
  function handleOnChange(e:ChangeEvent<HTMLInputElement>){
if(e.target.files){
  setImage(e.target.files[0])
}
  }

  async function handleData(){
      const desc=editorRef.current?.getContent() 
      const title=titleRef.current?.value || ""
      if(desc=="" || title=="" || image==null){
        setError("Please fill all fields!")
        return
      }
      const formData=new FormData()
      formData.append('title',title)
      formData.append('description',desc)
        formData.append('category',category)
      if(image){
        formData.append("image",image)
      }
setBtnLoading(true)
      const res=await axios.post("/api/posts",formData)
      if(res.data.message=="success"){
        setError("")
        setBtnLoading(false)
        setToastValue("Blog Uploaded Successfully!")
        setShowToast(true)
        setTimeout(()=>{
          router.push("/")

        },500)


      }else{
     setError("")
     setBtnLoading(false)
        setToastValue("Something Went Wrong!")
        setShowToast(true)
        setTimeout(()=>{
          router.push("/create-blog")
        },500)
 
      }

  }
  function selectFile(){
fileInputRef.current?.click()
  }
  function getCategory(value:string){
setCategory(value)
  }
  return (
    <div>
      <Nav showSearchBar={false}></Nav>
{showMenu?<Menu></Menu>:null}
<h1 className='w-full flex justify-center font-semibold text-2xl py-8'>Create Blogs</h1>
<form className='w-full min-h-screen flex items-center justify-center flex-col gap-4 pb-4' onSubmit={(e)=>e.preventDefault()}> 
<div className='w-full flex flex-col gap-2 justify-center items-center '>
  <input type='text' className='w-[90%] md:w-[70%] rounded-sm px-4 py-2 border border-gray-400' placeholder='Blog title ...' ref={titleRef} required></input>
</div>
<div className=' w-[90vw] md:w-[70vw]'>
<Editor
    apiKey='ttpfj097hsr6g3kfgtuxddsc3tuwulv3j1uys2q10mns7r9l'
    onInit={(event,editor)=>editorRef.current=editor}
    init={{
      plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount    linkchecker',
      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
      tinycomments_mode: 'embedded',
      tinycomments_author: 'Author name',
      mergetags_list: [
        { value: 'First.Name', title: 'First Name' },
        { value: 'Email', title: 'Email' },
      ],
      ai_request: (request:any, respondWith:any) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
    }}
    initialValue="Write your Blog Content Here!"
  />
</div>
{error?<p className='text-red-500'>{error}</p>:null}
<div className='w-screen flex gap-4 justify-center items-center'>
  <h2 className='font-sans text-md font-semibold'>Select Category</h2>
  <Category category={getCategory}/>
</div>
<Button icon={<UploadOutlined />} onClick={selectFile} className='px-24'>Upload Cover</Button>
<input type='file' onChange={handleOnChange} hidden ref={fileInputRef} accept="image/jpg,image/jpeg,image/avif" required/>
<Button className='bg-[#31caae] text-white rounded  px-32 py-1 mb-8' onClick={handleData} disabled={showToast} loading={btnLoading}>Submit</Button>
</form>
<Toast toastVal={toastValue} showToast={showToast}/>
    </div>
  )
}

export default BlogForm