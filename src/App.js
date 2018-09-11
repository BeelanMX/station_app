import React, { Component } from 'react';

import {Mqtt} from './modules/mqtt';
import logo from './logo.svg';
import './App.css';
import BigCard from './Components/BigCard';
import TinyCard from './Components/TinyCard';
// REACT_APP_MQTT_IP=107.170.231.29 REACT_APP_MQTT_PORT=9001 npm run build
const STATION_DEV_EUI = '1245';

class App extends Component {
  state = {
    temperature: 28,
    windspeed: 100,
    rain: 30,
    humedity: 90,
    dayrain: 10,
    ilumination: 19,
  }
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
    const {temperature, windspeed, rain, humedity, dayrain, ilumination} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Beelan Weather Demo</h1>
        </header>
        <div className="App_cardsContainer">
          <BigCard
            payload={temperature}
            label="Temperature"
            iconName="temperature"
            iconSize='m'
            unit='º'
            />
          <TinyCard
            payload={windspeed}
            label="Wind Speed"
            unit="mp/h"
            iconName="windspeed"
            />
          <TinyCard
            payload={rain}
            label="Rainin"
            unit="%"
            iconName="rain"
            />
          <TinyCard
            payload={humedity}
            label="Humidity"
            unit="%"
            iconName="humedity"
            />
          <TinyCard
            payload={dayrain}
            label="Daily Raining"
            unit="%"
            iconName="dayrain"
            />
          <TinyCard
            payload={ilumination}
            label="Light level"
            unit="%"
            iconName="ilumination"
            />
        </div>
      </div>
    );
  }
}

export default App;
