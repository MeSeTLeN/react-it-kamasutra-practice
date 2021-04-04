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
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      like: 0,
    }

    this._state.profilePage.postData.push(newPost)
    this._state.profilePage.newPostText = ''

    this._callSubscriber()
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText

    this._callSubscriber()
  },

  _addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText,
    }

    this._state.dialogsPage.messageData.push(newMessage)
    this._state.dialogsPage.newMessageText = ''

    this._callSubscriber()
  },
  _updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText

    this._callSubscriber()
  },

  dispatch(action) {
    switch (action.type) {
      case 'ADD_POST':
        this._addPost()

        break

      case 'UPDATE_NEW_POST_TEXT':
        this._updateNewPostText(action.newText)

        break

      case 'ADD_MESSAGE':
        this._addMessage()

        break

      case 'UPDATE_NEW_MESSAGE_TEXT':
        this._updateNewMessageText(action.newText)

        break

      default:
        break
    }
  },
}

export default store
