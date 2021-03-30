import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
  return (
    <div>
      <div>My Posts</div>
      <div>
        <input type="text" />
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts
