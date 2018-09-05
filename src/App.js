import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import BigCard from './Components/BigCard';
import TinyCard from './Components/TinyCard';

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

        <div className="App_cardsContainer">
          <TinyCard
            payload={80}
            label="Wind Speed"
            unit="mp/h"
            iconName="windspeed"
            />
        </div>
      </div>
    );
  }
}

export default App;
