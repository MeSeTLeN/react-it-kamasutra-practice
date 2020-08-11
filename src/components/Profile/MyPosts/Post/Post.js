import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post-ava"></div>
      <div>{props.message}</div>
      <span>Like</span>
    </div>
  );
};

export default Post;
