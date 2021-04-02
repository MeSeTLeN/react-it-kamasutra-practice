import React, { createRef } from 'react'
import Dialog from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogData.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ))

  let messagesElements = props.state.messageData.map((message) => (
    <Message message={message.message} id={message.id} />
  ))

  let newPostElement = createRef()

  const send = () => {
    let text = newPostElement.current.value
    alert(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.dialogs__messages}>
        {messagesElements}
        <div className={s.messageInput}>
          <input type="text" ref={newPostElement} />
          <button onClick={() => send()}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
