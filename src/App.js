import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Feed from './components/Feed/Feed'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route path="/profile">
              <Profile
                state={props.state.profilePage}
                dispatch={props.dispatch}
              />
            </Route>

            <Route path="/dialogs">
              <Dialogs
                state={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
            </Route>

            <Route path="/feed">
              <Feed />
            </Route>

            <Route path="/music">
              <Music />
            </Route>

            <Route path="/settings">
              <Settings />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
