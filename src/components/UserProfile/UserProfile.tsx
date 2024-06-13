import React from 'react'

function UserProfile({user}:any) {

  return (
    <div className='pt-24 w-screen flex justify-center'>
    <main className="profile">
    <div className="profile-bg"></div>
    <section className="container">
      <aside className="profile-image">
      </aside>
      <section className="profile-info">
        <img src={user?.profileImage} className='w-[5rem] h-[5rem] rounded-full'/>
        <h2>{user?.username}</h2>
        <p>{user?.email}</p>
      </section>
    </section>
    <section className="statistics">
      <button className="icon arrow left"></button>
      <button className="icon arrow right"></button>
      <p className='w-full text-center '><strong>Posts</strong>({user?.blogs.length})</p>
    </section>
    <button className="icon close"></button>
  </main>
  </div>
  )
}

export default UserProfile