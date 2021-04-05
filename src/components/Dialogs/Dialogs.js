import React from 'react'
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs_reducer'
import Dialog from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
  const state = props.store.getState().dialogsPage

  let dialogsElements = state.dialogData.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ))

  let messagesElements = state.messageData.map((message) => (
    <Message message={message.message} id={message.id} />
  ))

  const send = () => {
    props.store.dispatch(addMessageActionCreator())
  }

  const onMessageChange = (e) => {
    let text = e.target.value
    props.store.dispatch(updateNewMessageTextActionCreator(text))
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
          <button onClick={() => send()}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
