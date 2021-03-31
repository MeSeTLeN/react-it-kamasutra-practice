import React from 'react'
import s from './Post.module.css'

function Post({ message, like }) {
  return (
    <div className={s.item}>
      <img
        src="https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2016/11/cdc5d5a5062014-12-02_SoT-1920x1200.jpg"
        alt=""
      />
      <span>{message}</span>
      <button>like {like}</button>
    </div>
  )
}

export default Post
