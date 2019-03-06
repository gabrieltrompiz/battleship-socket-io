import React from 'react';

export default class RoomInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { roomInfo: {}, playing: false };
		this.socket = this.props.socket;
		this.socket.on('roomUpdate', room => {
			this.setState({ roomInfo: room });
		});
		this.socket.on('getRoomInfo', roomInfo => {
			this.setState({ roomInfo: roomInfo });
		});
		this.socket.emit('getRoomInfo', this.props.room);
		this.socket.on('gameStarted', () => {
			this.setState({ playing: true });
		});
	}

	leaveRoom = () => {
		this.socket.emit('leaveRoom', this.props.room)
		this.props.changeView('Menu')
	}

	setReady = (ready) => {
		this.socket.emit('ready', this.props.room, ready)
	}

	render() {
		return(
			<div id='roomInfo'>
				<p>Room ID: {this.props.room}</p>
				<p># of Spectators: 0</p>
				<p>Players: {this.state.roomInfo.length}/2</p>
				<button className='tableBtn' onClick={this.leaveRoom}>Leave Room</button>
				<div id='readyDiv'>
					{!this.state.playing &&
					<button id='readyBtn' onClick={() => this.setReady(true)}>READY</button>}
					{!this.state.playing &&
					<p id='readyLabel'>Press when you're ready</p>}
					{(this.props.turn && this.state.playing) &&
					<p id='readyLabel'>Your turn</p>}
					{(!this.props.turn && this.state.playing) &&
					<p id='readyLabel'>Opponent's turn</p>}
				</div>
			</div>
			);
	}
}