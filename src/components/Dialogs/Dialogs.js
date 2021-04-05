import React from 'react'
import Dialog from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
  const state = props.dialogsPage

  const dialogsElements = state.dialogData.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ))

  const messagesElements = state.messageData.map((message) => (
    <Message message={message.message} id={message.id} />
  ))

  const onSend = () => {
    props.sendMessage()
  }

  const onMessageChange = (e) => {
    const text = e.target.value
    props.updateNewMessageText(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.dialogs__messages}>
        {messagesElements}
        <div className={s.messageInput}>
          <input
            value={state.newMessageText}
            onChange={onMessageChange}
            type="text"
          />
          <button onClick={onSend}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
