import React, { Component } from 'react';

import {Mqtt} from './modules/mqtt';
import logo from './logo.svg';
import './App.css';
import BigCard from './Components/BigCard';
import TinyCard from './Components/TinyCard';
// REACT_APP_MQTT_IP=107.170.231.29 REACT_APP_MQTT_PORT=9001 npm run build
const STATION_DEV_EUI = '1245';

class App extends Component {
  componentDidMount() {
    const mqttClient = new Mqtt();
    // example subs
      mqttClient.subscribe(`application/2/device/${STATION_DEV_EUI}/rx`);
    //
    mqttClient.on('message', this.handleMessages);
    mqttClient.on('close', this.handlerDisconnection);
    this.setState({mqttClient});
  }
  handlerDisconnection = () => {
    console.error('Disconection of MQTT Refres page :,(');
  }

handleMessages = (topic, message) => {
    console.log(topic);
    console.log(message);
    const data = JSON.parse(message.toString());
    console.log('DATA', data);

    // Do something with the message
    // :)
    this.helperMarkMessage(data)
  }
helperMarkMessage = (data) => {
  console.log(data)
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Beelan Weather Demo</h1>
        </header>
        <div className="App_cardsContainer">
          <BigCard
            payload={180}
            label="Wind Direction"
            iconName="rain"
            />
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
