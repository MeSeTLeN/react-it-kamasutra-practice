import React from "react";
import { NavLink } from "react-router-dom";
import s from './_nav.module.scss'

const Nav = () => {
  return (
    <nav className={s.nav}>
      <a>Its NAVBAR</a>
      <br/>
      <br/>
      <NavLink to="/profile" activeClassName={s.active_link}>Profile</NavLink>
      <NavLink to="/dialogs" activeClassName={s.active_link}>Dialogs</NavLink>
      <NavLink to="/news" activeClassName={s.active_link}>News</NavLink>
      <NavLink to="/music" activeClassName={s.active_link}>Music</NavLink>
      <br/>
      <br/>
      <NavLink to="/settings" activeClassName={s.active_link}>Settings</NavLink>
    </nav>
  );
};

export default Nav;
