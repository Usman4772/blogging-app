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
function BlogForm() {
  const [image,setImage]=useState<File |null>()
  const titleRef=useRef<HTMLInputElement>(null)
  const editorRef=useRef<any>(null)
  const fileInputRef=useRef<HTMLInputElement>(null)
  const {showMenu}=useContext(GlobalContext)
  const [showToast,setShowToast]=useState(false)

    
  function handleOnChange(e:ChangeEvent<HTMLInputElement>){
if(e.target.files){
  setImage(e.target.files[0])
}
  }

  async function handleData(){
      const desc=editorRef.current?.getContent() || ""
      const title=titleRef.current?.value ||""
      const formData=new FormData()
      formData.append('title',title)
      formData.append('description',desc)
      if(image){
        formData.append("image",image)
      }

      const res=await axios.post("http://localhost:3000/api/posts",formData)
      if(res.status==200){
setShowToast(true)
      }

  }
  function selectFile(){
fileInputRef.current?.click()
  }
  return (
    <div>
      <Nav showSearchBar={false}></Nav>
{showMenu?<Menu></Menu>:null}
<h1 className='w-full flex justify-center font-semibold text-2xl py-8'>Create Blogs</h1>
<form className='w-full min-h-screen flex items-center justify-center flex-col gap-4 pb-4' onSubmit={(e)=>e.preventDefault()}> 
<div className='w-full flex flex-col gap-2 justify-center items-center '>
  <input type='text' className='w-[70%] rounded-sm px-4 py-2 border border-gray-400' placeholder='Blog title ...' ref={titleRef}></input>
</div>
<div className='w-[70vw]'>
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
<Button icon={<UploadOutlined />} onClick={selectFile} className='px-24'>Upload Cover</Button>
<input type='file' onChange={handleOnChange} hidden ref={fileInputRef}/>
<Button className='bg-[#31caae] text-white rounded  px-32 py-1 mb-8' onClick={handleData} disabled={showToast}>Submit</Button>
</form>
<Toast toastVal={"Blog Uploaded"} showToast={showToast}/>
    </div>
  )
}

export default BlogForm