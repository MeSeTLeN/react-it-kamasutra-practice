import React from "react";
import s from '../sass/modules/profile.module.scss'

const Profile = () => {
  return (
    <div className="profile">
      <a>Its CONTENT</a>
      <div className={s.profile_bg}>profile bg</div>
      <div className={s.profile_ava}>profile ava</div>
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
