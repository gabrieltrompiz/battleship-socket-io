import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './views/Menu';
import RoomList from './views/RoomList'
import Game from './views/Game';
import GameSpectator from './views/GameSpectator';
import * as io from 'socket.io-client'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {view: 'Game'};
    }

    changeView = view => {
        this.setState({ view: view })
    };

    getView(view) {
        switch(view) {
            case 'Menu':
                return <Menu changeView={this.changeView} socket={socket}/>;

            case 'RoomList':
                return <RoomList changeView={this.changeView} socket={socket}/>;

            case 'Game':
                return <Game changeView={this.changeView} socket={socket}/>;

            case 'GameSpectator':
                return <GameSpectator changeView={this.changeView} socket={socket}/>;

            default:
                return null;
        }
    }

    render() {
        return (
            <div id='container'>
                {this.getView(this.state.view)}
            </div>
        );
    }
}

export default App;

const socket = io('http://localhost:8080')
