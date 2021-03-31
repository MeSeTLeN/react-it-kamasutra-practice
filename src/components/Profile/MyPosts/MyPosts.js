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
        <Post message="Hello" like={5} />
        <Post message="It's first post" like={2} />
        <Post message="React JS" like={3} />
      </div>
    </div>
  )
}

export default MyPosts
