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

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <Dialog name={dialogData[0].name} id={dialogData[0].id} />
        <Dialog name={dialogData[1].name} id={dialogData[1].id} />
        <Dialog name={dialogData[2].name} id={dialogData[2].id} />
        <Dialog name={dialogData[3].name} id={dialogData[3].id} />
        <Dialog name={dialogData[4].name} id={dialogData[4].id} />
      </div>
      <div className={s.dialogs__messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
      </div>
    </div>
  )
}

export default Dialogs
