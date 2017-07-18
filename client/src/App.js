import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import userId from 'uuid';

class App extends Component {
  componentWillMount() {
    this.setState({ socket: window.io() });
    this.setState({ user: userId() });
  }

  componentDidMount() {
    this.state.socket.emit('randomSocketEvent', 'Hi I am the client!');
    this.state.socket.on('randomSocketEvent', (data) => {
      console.log(`Incoming server message: ${data}`);
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
