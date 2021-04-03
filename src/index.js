import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import state, {
  addMessage,
  addPost,
  updateNewMessageText,
  updateNewPostText,
  subscribe,
} from './redux/state'

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)
