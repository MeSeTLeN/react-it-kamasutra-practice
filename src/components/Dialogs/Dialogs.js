import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <div className={s.dialog}>Sveta</div>
        <div className={s.dialog}>Sasha</div>
        <div className={s.dialog + ' ' + s.active}>Andrey</div>
        <div className={s.dialog}>Misha</div>
        <div className={s.dialog}>Max</div>
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
