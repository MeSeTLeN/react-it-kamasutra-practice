import React from "react";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className="profile">
      <a>Its CONTENT</a>
      <div className='profile-bg'>profile bg</div>
      <div className='profile-ava'>profile ava</div>
      <div className='profile-descr'>Jhon K.</div>
      <br/>
      <MyPosts/>

    </div>
  );
};

export default Profile;
