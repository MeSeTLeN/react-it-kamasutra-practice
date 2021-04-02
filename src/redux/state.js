import { rerenderEntireTree } from '../render'

let state = {
  profilePage: {
    postData: [
      { id: 1, message: 'Hello', like: 25 },
      { id: 2, message: 'Its first post', like: 5 },
      { id: 3, message: 'React JS', like: 2 },
    ],
    newPostText: 'Type here',
  },
  dialogsPage: {
    dialogData: [
      { id: 1, name: 'Sveta' },
      { id: 2, name: 'Sasha' },
      { id: 3, name: 'Andrey' },
      { id: 4, name: 'Misha' },
      { id: 5, name: 'Max' },
    ],
    messageData: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'this is test' },
      { id: 3, message: '12345' },
    ],
    newMessageText: 'Type new message here',
  },
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    like: 0,
  }

  state.profilePage.postData.push(newPost)
  state.profilePage.newPostText = ''

  rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText

  rerenderEntireTree(state)
}

export const addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText,
  }

  state.dialogsPage.messageData.push(newMessage)
  state.dialogsPage.newMessageText = ''

  rerenderEntireTree(state)
}

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText

  rerenderEntireTree(state)
}

export default state
