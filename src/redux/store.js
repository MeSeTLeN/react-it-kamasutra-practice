import profileReducer from './profile_reducer'
import dialogsReducer from './dialogs_reducer'
import sidebarReducer from './sidebar_reducer'

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
    sidebar: {},
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

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  },
}

export default store
