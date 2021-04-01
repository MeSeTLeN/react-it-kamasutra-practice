import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts({ postData }) {
  let postsElements = postData.map((post) => (
    <Post message={post.message} like={post.like} id={post.id} />
  ))

  return (
    <div>
      <div>My Posts</div>
      <div>
        <input type="text" />
        <button>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
