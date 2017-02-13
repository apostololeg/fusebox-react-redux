import React, { Component } from 'react';
import Logo from '../Logo/Logo.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo />
          <p className="App-title">TODO: React + Redux</p>
        </div>
        <p className="App-content">
          // Todo list goes here
        </p>
      </div>
    );
  }
}

export default App;
