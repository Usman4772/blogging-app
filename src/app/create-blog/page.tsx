"use client"
import React, { ChangeEvent, useState } from 'react'
import { useRef } from 'react';
import {Editor} from "@tinymce/tinymce-react"
import axios from 'axios';

function BlogForm() {
  const [image,setImage]=useState<File |null>()
  const titleRef=useRef<HTMLInputElement>(null)
  const editorRef=useRef<any>(null)
    
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

      const mssg=await axios.post("http://localhost:3000/api/posts",formData)
console.log(mssg.data.mssg)
  }
  return (
    <div>
<h1 className='w-full flex justify-center font-semibold text-xl py-8'>Create Blogs</h1>
<form className='w-full min-h-screen flex items-center justify-center flex-col gap-4 pb-4' onSubmit={(e)=>e.preventDefault()}> 
<div className='w-full flex flex-col gap-2 justify-center items-center '>
  <label className='font-semibold'>Title</label>
  <input type='text' className='w-[40%] rounded-sm px-4 py-3 border border-gray-400' placeholder='Blog title ...' ref={titleRef}></input>
</div>
<div>
<Editor
    apiKey='ttpfj097hsr6g3kfgtuxddsc3tuwulv3j1uys2q10mns7r9l'
    onInit={(event,editor)=>editorRef.current=editor}
    init={{
      plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
      tinycomments_mode: 'embedded',
      tinycomments_author: 'Author name',
      mergetags_list: [
        { value: 'First.Name', title: 'First Name' },
        { value: 'Email', title: 'Email' },
      ],
      ai_request: (request:any, respondWith:any) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
    }}
    initialValue="Welcome to TinyMCE!"
  />
</div>
<input type='file' onChange={handleOnChange}/>
<button className='bg-black text-white rounded  px-8 py-1' onClick={handleData}>Submit</button>

</form>

    </div>
  )
}

export default BlogForm