import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

let postData = [
  { id: 1, message: 'Hello', like: 25 },
  { id: 2, message: 'Its first post', like: 5 },
  { id: 3, message: 'React JS', like: 2 },
]

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

ReactDOM.render(
  <React.StrictMode>
    <App
      postData={postData}
      dialogData={dialogData}
      messageData={messageData}
    />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
