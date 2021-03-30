import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="" />
      </header>
      <nav className="nav">
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Messages</a>
        </div>
        <div>
          <a href="">News</a>
        </div>
        <div>
          <a href="">Music</a>
        </div>
        <div>
          <a href="">Settings</a>
        </div>
      </nav>
      <div className="content">
        <img src="https://wallpaperaccess.com/full/30100.jpg" alt="" />

        <div className="content__user">
          <div className="content__info">ava+descr</div>

          <div className="content__posts">
            <div>My Posts</div>
            <div>New post</div>
            <div>
              <div>post 1</div>
              <div>post 2</div>
              <div>post 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
