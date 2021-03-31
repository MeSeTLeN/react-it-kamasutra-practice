import React from 'react'
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = ({ name, id }) => {
  let path = '/dialogs/' + id

  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        {name}
      </NavLink>
    </div>
  )
}

export default Dialog
