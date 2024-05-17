  import React from 'react'
  import axios from 'axios'
  async function getDetails(id:any){
 try{
 
  const res=await axios.get(`http://localhost:3000/api/${id}`)
return res
 }catch(e){
  console.log(e)
 }
  }
  async function PostDetails({params}:any) {
    const id=params.id
const data=await getDetails(id)

    return (
      <div>
      {data?.data?.post?.title}
      <div dangerouslySetInnerHTML={{__html:data?.data?.post?.description}}></div>
      </div>
    )
  }
  
  export default PostDetails