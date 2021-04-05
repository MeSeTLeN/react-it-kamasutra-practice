import React from 'react'
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs_reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPage

  const sendMessage = () => {
    props.store.dispatch(addMessageActionCreator())
  }

  const onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text))
  }
  return (
    <Dialogs
      sendMessage={sendMessage}
      updateNewMessageText={onMessageChange}
      dialogsPage={state}
    />
  )
}

export default DialogsContainer
