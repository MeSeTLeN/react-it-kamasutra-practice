import React from "react";
import logo from "./logo.svg";
import "./sass/App.scss";
import "./sass/style.scss";
import Nav from "./components/nav";
import Header from "./components/header";
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Profile />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
