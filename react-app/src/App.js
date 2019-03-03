import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './views/Menu';
import RoomList from './views/RoomList'

class App extends Component {
  render() {
    return (
      <div id='container'>
          <RoomList/>
      </div>
    );
  }
}

export default App;
