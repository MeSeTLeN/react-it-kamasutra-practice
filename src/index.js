import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './redux/state'

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)
