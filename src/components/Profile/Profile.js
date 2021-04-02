import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
  return (
    <div className={s.profile}>
      <ProfileInfo />

      <MyPosts postData={props.state.postData} addPost={props.addPost} />
    </div>
  )
}

export default Profile
