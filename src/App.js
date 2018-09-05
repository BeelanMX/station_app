import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BigCard from './Components/BigCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Beelan Demo</h1>
        </header>
        <BigCard
          payload={180}
          label="Wind Direction"
          />

      </div>
    );
  }
}

export default App;
