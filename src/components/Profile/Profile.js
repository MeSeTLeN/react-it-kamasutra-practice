import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

function Profile() {
  return (
    <div className={s.profile}>
      <img src="https://wallpaperaccess.com/full/30100.jpg" alt="" />

      <div className={s.profile.info}>ava+descr</div>

      <MyPosts />
    </div>
  )
}

export default Profile
