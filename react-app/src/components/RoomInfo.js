import React from 'react';

export default class RoomInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { roomInfo: {}, playing: false, time: '15' };
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
		this.socket.emit('leaveRoom', this.props.room);
		this.props.changeView('Menu')
	};

	setReady = (ready) => {
		this.socket.emit('ready', this.props.room, ready)
	};

	timing = () => {
		let interval = setInterval(() => {
			if(this.state.time > 0) {
				this.state.time--;
				return this.state.time;
			}
			else {
				this.props.setTurn('false');
				this.socket.emit('setTurn', this.props.room);
				clearInterval(interval);
			}
		}, 1000);
	};

	render() {
		return(
			<div id='roomInfo'>
				<p>Room ID: {this.props.room}</p>
				<p># of Spectators: 0</p>
				<p>Players: {this.state.roomInfo.length}/2</p>
				<button className='tableBtn' onClick={this.leaveRoom}>Leave Room</button>
				<div id='readyDiv'>
					{!this.state.playing &&
					<button id='readyBtn' style={{ backgroundColor: this.props.ready ? 'red' : 'green' }} 
					onClick={() => this.setReady(!this.props.ready)}>{this.props.ready ? 'NOT READY' : 'READY'}</button>}
					{this.state.playing &&
					<p id='readyLabel'>{this.timing()}</p>}
					{!this.state.playing &&
					<p id='readyLabel'>{!this.props.ready ? 'Press when you\'re ready' : 'Waiting for opponent to be ready...'}</p>}
					{(this.props.turn && this.state.playing) &&
					<p id='readyLabel'>Your turn</p>}
					{(!this.props.turn && this.state.playing) &&
					<p id='readyLabel'>Opponent's turn</p>}
				</div>
			</div>
			);
	}
}