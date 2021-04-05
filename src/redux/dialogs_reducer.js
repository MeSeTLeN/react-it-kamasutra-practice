const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      }

      state.messageData.push(newMessage)
      state.newMessageText = ''

      return state

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText

      return state

    default:
      return state
  }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
})

export default dialogsReducer
