import React, { Component } from 'react';
import './App.css';
import Greeting from './components/FunctionalComponent/Greeting';
import Blanket from './components/ClassComponentWithProps/Blanket';
import Children from './components/NestedComponentsWithState/Children';
import Twitter from './components/ComponentNesting/Twitter';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">CS5 Intensive</h1>
        <Greeting />
        <Blanket blanket = "Blanky" />
        <Children />
        <Twitter />
      </div>
    );
  }
}

export default App;