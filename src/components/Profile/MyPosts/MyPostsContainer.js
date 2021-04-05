import React from 'react'
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile_reducer'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
  const state = props.store.getState().profilePage

  const addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <MyPosts
      addPost={addPost}
      updateNewPostText={onPostChange}
      postData={state.postData}
      newPostText={state.newPostText}
    />
  )
}

export default MyPostsContainer
