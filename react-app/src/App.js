import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './views/Menu';
import RoomList from './views/RoomList'
import Game from './views/Game';
import GameSpectator from './views/GameSpectator';
import Help from './views/Help'
import * as io from 'socket.io-client';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { endpoint: 'localhost:8080', view: 'Menu', rooms: [], activeRoom: 0 };
        this.rooms = {};
    }

    roomRequest = async () => {
        socket.emit('getRooms');
        socket.on('returnRooms', rooms => {
			const keys = Object.keys(rooms)
			const roomList = []
			keys.forEach(key => {
				let json = {}
				if(!isNaN(key)) { // if room is actually a game room and not a socket
					json[key] = rooms[key]
					roomList.push(json)
				}
			})
			this.setState({ rooms: roomList, view: 'RoomList' })
        });
    };

    changeView = view => {
        this.setState({ view: view})
    };

    setActiveRoom = room => {
        this.setState({ activeRoom: room })
    }

    getView(view) {
        switch(view) {
            case 'Menu':
                return <Menu changeView={this.changeView} socket={socket} setActiveRoom={this.setActiveRoom} requestRoom={this.roomRequest}/>;

            case 'RoomList':
                return <RoomList changeView={this.changeView} socket={socket} rooms={this.state.rooms} refresh={this.roomRequest}/>;

            case 'Game':
                return <Game changeView={this.changeView} socket={socket} room={this.state.activeRoom}/>;

            case 'GameSpectator':
                return <GameSpectator changeView={this.changeView} socket={socket}/>;

            case 'Help':
                return <Help changeView={this.changeView}/>

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