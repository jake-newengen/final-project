import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    (async () => {
      let res = await fetch("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          username: "jake",
          password: "test",
          confirmation: "test"
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      let json = await res.json()
      console.log(json);
    })()
  }, [])
  return (
    <div className="App">
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
