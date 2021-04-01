import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile({ postData }) {
  return (
    <div className={s.profile}>
      <ProfileInfo />

      <MyPosts postData={postData} />
    </div>
  )
}

export default Profile
