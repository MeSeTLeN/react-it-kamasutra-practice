import React from 'react'
import s from './Profile.module.css'

function Profile() {
  return (
    <div className={s.profile}>
      <img src="https://wallpaperaccess.com/full/30100.jpg" alt="" />

      <div className={s.profile.info}>ava+descr</div>

      <div className={s.profile.posts}>
        <div>My Posts</div>
        <div>New post</div>
        <div>
          <div className={s.profile.item}>post 1</div>
          <div className={s.profile.item}>post 2</div>
          <div className={s.profile.item}>post 3</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
