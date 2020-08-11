import React from "react";
import s from '../sass/modules/nav.module.scss'
console.log(s)
const Nav = () => {
  return (
    <nav className="nav">
      <a className={`${s.link} ${s.active}`}>Its NAVBAR</a>
      <br/>
      <br/>
      <div className={`${s.link} ${s.active}`}><a href="#">Profile</a></div>
      <div><a href="#">Messages</a></div>
      <div><a href="#">News</a></div>
      <div><a href="#">Music</a></div>
      <br/>
      <br/>
      <div><a href="#">Settings</a></div>
    </nav>
  );
};

export default Nav;
