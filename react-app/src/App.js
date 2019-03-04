import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './views/Menu';
import RoomList from './views/RoomList'
import Game from './views/Game';
import GameSpectator from './views/GameSpectator';
import Help from './views/Help'
import SocketIOClient from 'socket.io-client';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {endpoint: 'localhost:8080', view: 'Menu'};
        this.socket = SocketIOClient(this.state.endpoint);
        this.rooms = {};
    }

    changeView = view => {
        this.setState({ view: view})
    };

    roomRequest = async () => {
        await this.socket.emit('getRooms', this.rooms);
        await this.socket.on('returnRoom', rooms => {
            console.log('mardita mierda podeis servir por favor')
            console.log(rooms);
            this.rooms = rooms;
        });
        console.log(this.rooms);
        this.changeView('RoomList');
    };

    createRoom = async () => {
        console.log('Holi');
        await this.socket.emit('createRoom', 'myRoom');
        this.socket.on('roomCreated', (msg) => {
            console.log(msg);
        });
        this.socket.on('errorCreating', (msg) => {
            console.log(msg);
        });
    };

    getView(view) {
        switch(view) {
            case 'Menu':
                return <Menu changeView={this.changeView} roomRequest={this.roomRequest} createRoom={this.createRoom} />;

            case 'RoomList':
                return <RoomList changeView={this.changeView} />;

            case 'Game':
                return <Game changeView={this.changeView} />;

            case 'GameSpectator':
                return <GameSpectator changeView={this.changeView} />;

            case 'Help':
                return <Help changeView={this.changeView}/>

            default:
                return null;
        }
    }

    render() {
        console.log(this.state.view);
        return (
            <div id='container'>
                {this.getView(this.state.view)}
            </div>
        );
    }
}

export default App;
