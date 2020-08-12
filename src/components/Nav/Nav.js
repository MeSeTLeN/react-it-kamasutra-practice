import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <a>Its NAVBAR</a>
      <br/>
      <br/>
      <div><a href="/profile">Profile</a></div>
      <div><a href="/dialogs">Dialogs</a></div>
      <div><a href="/news">News</a></div>
      <div><a href="/music">Music</a></div>
      <br/>
      <br/>
      <div><a href="/settings">Settings</a></div>
    </nav>
  );
};

export default Nav;
