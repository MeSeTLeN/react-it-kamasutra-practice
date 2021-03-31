import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1" activeClassName={s.active}>
            Sveta
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2" activeClassName={s.active}>
            Sasha
          </NavLink>
        </div>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/3" activeClassName={s.active}>
            Andrey
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4" activeClassName={s.active}>
            Misha
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5" activeClassName={s.active}>
            Max
          </NavLink>
        </div>
      </div>
      <div className={s.dialogs__messages}>
        <div className={s.message}>Hello</div>
        <div className={s.message}>this is test</div>
        <div className={s.message}>12345</div>
      </div>
    </div>
  )
}

export default Dialogs
