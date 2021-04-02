import { rerenderEntireTree } from '../render'

let state = {
  profilePage: {
    postData: [
      { id: 1, message: 'Hello', like: 25 },
      { id: 2, message: 'Its first post', like: 5 },
      { id: 3, message: 'React JS', like: 2 },
    ],
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
  },
}

export const addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    like: 0,
  }

  state.profilePage.postData.push(newPost)
  rerenderEntireTree(state)
}

export default state
