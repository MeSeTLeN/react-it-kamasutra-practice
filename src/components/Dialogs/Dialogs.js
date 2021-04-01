import React from 'react'
import Dialog from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = () => {
  let dialogData = [
    { id: 1, name: 'Sveta' },
    { id: 2, name: 'Sasha' },
    { id: 3, name: 'Andrey' },
    { id: 4, name: 'Misha' },
    { id: 5, name: 'Max' },
  ]

  let messageData = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'this is test' },
    { id: 3, message: '12345' },
  ]

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
