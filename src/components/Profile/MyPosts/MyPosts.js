import React, { createRef } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts({ postData }) {
  let postsElements = postData.map((post) => (
    <Post message={post.message} like={post.like} id={post.id} />
  ))

  let newPostElement = createRef()

  const addPost = () => {
    let text = newPostElement.current.value
    alert(text)
  }

  return (
    <div>
      <div>My Posts</div>
      <div>
        <input ref={newPostElement} type="text" />
        <button onClick={() => addPost()}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
