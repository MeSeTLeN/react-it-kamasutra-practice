import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
  let postData = [
    { id: 1, message: 'Hello', like: 25 },
    { id: 2, message: 'Its first post', like: 5 },
    { id: 3, message: 'React JS', like: 2 },
  ]

  return (
    <div>
      <div>My Posts</div>
      <div>
        <input type="text" />
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} like={postData[0].like} />
        <Post message={postData[1].message} like={postData[1].like} />
        <Post message={postData[2].message} like={postData[2].like} />
      </div>
    </div>
  )
}

export default MyPosts
