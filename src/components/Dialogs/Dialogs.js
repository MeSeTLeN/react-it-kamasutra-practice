import React from 'react'
import Dialog from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <Dialog name="Sveta" id="1" />
        <Dialog name="Sasha" id="2" />
        <Dialog name="Andrey" id="3" />
        <Dialog name="Misha" id="4" />
        <Dialog name="Max" id="5" />
      </div>
      <div className={s.dialogs__messages}>
        <Message message="Hello" />
        <Message message="this is test" />
        <Message message="12345" />
      </div>
    </div>
  )
}

export default Dialogs
