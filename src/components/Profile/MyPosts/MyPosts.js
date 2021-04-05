import React, { createRef } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
  const postsElements = props.postData.map((post) => (
    <Post message={post.message} like={post.like} id={post.id} />
  ))

  const newPostElement = createRef()

  const onAddPost = () => {
    props.addPost()
  }

  const onPostChange = () => {
    const text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div>
      <div>My Posts</div>
      <div>
        <input
          value={props.newPostText}
          onChange={onPostChange}
          ref={newPostElement}
          type="text"
        />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
