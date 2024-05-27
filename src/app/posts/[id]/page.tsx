
import CommentSection from '@/components/Comments/CommentSection'
import Nav from '@/components/NavBar/Nav'
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
// console.log(data)
return (
      <div className='w-screen h-max flex flex-col gap-4'>
        <Nav showSearchBar={false}/>
        <div className='flex items-center justify-center h-max rounded-lg '>
<img src={data?.data?.post?.cover_url} className='w-[50%] h-[50vh] object-cover relative top-24 rounded-lg'/>
</div>
<div className='flex flex-col justify-center items-center gap-4'>
<h2 className='font-semibold font-mono text-xl'>Posted By:</h2>
  <div className='flex items-center justify-center gap-4'>
    <img src={data?.data.post.user?.profileImage} className='w-[2rem] h-[2rem] rounded-full' />
    <h3>  {data?.data.post.user?.username}</h3>
  </div>

</div>
     <h2 className='w-screen text-center py-8 text-3xl  font-sans font-bold'>{data?.data?.post?.title}</h2>
      <div dangerouslySetInnerHTML={{__html:data?.data?.post?.description}} className='w-screen h-max py-2 px-12 font-sans text-gray-500'></div>
      <CommentSection postId={id}/>
      </div>
    )
  }
  export default PostDetails