import { combineReducers, createStore } from 'redux'
import profileReducer from './profile_reducer'
import dialogsReducer from './dialogs_reducer'
import sidebarReducer from './sidebar_reducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
})

const store = createStore(reducers)

export default store
