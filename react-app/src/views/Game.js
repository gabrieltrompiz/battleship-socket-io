import React from 'react';
import Chat from '../components/Chat';
import PlayerTable from '../components/PlayerTable';
import '../styles/styles.css';
import OpponentTable from '../components/OpponentTable';
import RoomInfo from '../components/RoomInfo';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = { turn: false, ready: false };
        this.socket = this.props.socket;
		this.socket.on('initGame', () => {
			this.setState({ turn: true });
		});
		this.socket.on('setTurn', (turn) => {
			this.setState({ turn: turn })
		});
        this.socket.on('ready', ready => {
            this.setState({ ready: ready })
        });
	}

	setTurnFalse = () => {
		this.socket.emit('setTurn', this.props.room);
		this.setState({ turn: false });
	};

	render() {
		return(
			<div id='gameTables'>
				<PlayerTable socket={this.socket} room={this.props.room}/>
				<OpponentTable socket={this.socket} room={this.props.room} disabled={!this.state.turn}/>
				<Chat socket={this.socket} room={this.props.room} turn={this.state.turn}/>
				<RoomInfo socket={this.socket} room={this.props.room} changeView={this.props.changeView}
				turn={this.state.turn} ready={this.state.ready} setTurn={this.setTurnFalse}/>
			</div>
		);
	}
}
