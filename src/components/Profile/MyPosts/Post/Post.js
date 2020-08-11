import React from "react";
import Like from "./Like";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post-ava"></div>
      <div>{props.message}</div>
      <Like />
    </div>
  );
};

export default Post;
