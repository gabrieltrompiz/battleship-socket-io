import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './views/Menu';
import RoomList from './views/RoomList'
import Game from './views/Game';
import GameSpectator from './views/GameSpectator';

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
                return <Menu changeView={this.changeView} />;

            case 'RoomList':
                return <RoomList changeView={this.changeView} />;

            case 'Game':
                return <Game changeView={this.changeView} />;

            case 'GameSpectator':
                return <GameSpectator changeView={this.changeView} />;

            default:
                return null;
        }
    }

    render() {
        console.log(this.state.view)
        return (
            <div id='container'>
                {this.getView(this.state.view)}
            </div>
        );
    }
}

export default App;
