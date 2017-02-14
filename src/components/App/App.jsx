import React from 'react'
import Logo from '../Logo/Logo.jsx'
import Game from '../Game/Game.jsx'
import './App.css'

const App = () => (
  <div className="App">
    <div className="App-header">
      <Logo />
      <p className="App-title">React + Redux</p>
    </div>
    <div className="App-content">
      <Game />
    </div>
  </div>
)

export default App
