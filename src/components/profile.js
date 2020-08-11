import React from "react";

const Profile = () => {
  return (
    <div className="profile">
      <a>Its CONTENT</a>
      <div className='profile-bg'>profile bg</div>
      <div className='profile-ava'>profile ava</div>
      <div className='profile-descr'>Jhon K.</div>
      <br/>
      <div className='profile-posts'>
        Profile posts
        <div className='new-post'>
          <div>Whats new?</div>
          <div>send</div>
        </div>
        <div>My post #1</div>
      <div>My post #2</div>
      <div>My post #3</div>
      <div>My post #4</div>
      </div>

    </div>
  );
};

export default Profile;
