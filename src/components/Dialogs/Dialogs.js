import React from 'react'
import Dialog from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = ({ dialogData, messageData }) => {
  let dialogsElements = dialogData.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ))

  let messagesElements = messageData.map((message) => (
    <Message message={message.message} id={message.id} />
  ))

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.dialogs__messages}>{messagesElements}</div>
    </div>
  )
}

export default Dialogs
