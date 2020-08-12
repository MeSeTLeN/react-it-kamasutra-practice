import React from "react";
import s from "./DialogUserName.module.scss";
import { NavLink } from "react-router-dom";

const DialogUserName = () => {
  return (
    <div className={s.dialog_user_name}>
      <NavLink to="/dialogs/Andrey" activeClassName={s.active_link}>
        Andrey
      </NavLink>
      <NavLink to="/dialogs/Dima" activeClassName={s.active_link}>
        Dima
      </NavLink>
      <NavLink to="/dialogs/Anny" activeClassName={s.active_link}>
        Anny
      </NavLink>
      <NavLink to="/dialogs/Roman" activeClassName={s.active_link}>
        Roman
      </NavLink>
      <NavLink to="/dialogs/Nikita" activeClassName={s.active_link}>
        Nikita
      </NavLink>
      <NavLink to="/dialogs/Max" activeClassName={s.active_link}>
        Max
      </NavLink>
      <NavLink to="/dialogs/Mars" activeClassName={s.active_link}>
        Mars
      </NavLink>
    </div>
  );
};

export default DialogUserName;
