import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className="profile-posts">
      My Posts
      <div className="new-post">
        <textarea>Whats new?</textarea>
        <button>send</button>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
