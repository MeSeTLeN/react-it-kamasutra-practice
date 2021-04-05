import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Feed from './components/Feed/Feed'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route path="/profile">
              <Profile store={props.store} />
            </Route>

            <Route path="/dialogs">
              <DialogsContainer store={props.store} />
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
