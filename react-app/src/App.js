import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './views/Menu';
import RoomList from './views/RoomList'
import Game from './views/Game';

class App extends Component {
  render() {
    return (
      <div id='container'>
          <Game/>
      </div>
    );
  }
}

export default App;
