const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
  postData: [
    { id: 1, message: 'Hello', like: 25 },
    { id: 2, message: 'Its first post', like: 5 },
    { id: 3, message: 'React JS', like: 2 },
  ],
  newPostText: 'Type here',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: 0,
      }

      state.postData.push(newPost)
      state.newPostText = ''

      return state

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText

      return state

    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export default profileReducer
