let store = {
  _state: {
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
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('state changed')
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      like: 0,
    }

    this._state.profilePage.postData.push(newPost)
    this._state.profilePage.newPostText = ''

    this._callSubscriber()
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText

    this._callSubscriber()
  },
  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText,
    }

    this._state.dialogsPage.messageData.push(newMessage)
    this._state.dialogsPage.newMessageText = ''

    this._callSubscriber()
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText

    this._callSubscriber()
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
}

export default store
