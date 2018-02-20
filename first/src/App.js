import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Blanket from './components/classComp.js';

class App extends Component {
  render() {
    const blanket = 'so tired'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Blanket blanket={blanket} />
        </header>
      </div>
    );
  }
}

export default App;