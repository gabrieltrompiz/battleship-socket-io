import React from 'react';

export default class RoomInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { roomInfo: {}, playing: false, time: 4 };
		this.socket = this.props.socket;
		this.socket.on('roomUpdate', room => {
			this.setState({ roomInfo: room });
		});
		this.socket.on('getRoomInfo', roomInfo => {
			this.setState({ roomInfo: roomInfo });
		});
		this.socket.emit('getRoomInfo', this.props.room);

		this.socket.on('gameStarted', () => {
			this.setState({ playing: true }, () => this.tick());
		});

		this.socket.on('setTurn', turn => {
			this.setState({ time: 4 });
			this.props.setTurn(turn);
		});
	}

	tick = () => {
		this.interval = setInterval(() => {
			if(this.state.time > 0) {
				this.setState(() => ({ time: this.state.time - 1 }))
			} else {
				if(this.props.turn) {
					this.props.setTurn(false);
					this.socket.emit('setTurn', this.props.room);
					this.setState({ time: 4 });
				}
			}
		}, 1000);		
	};

	leaveRoom = () => {
		this.socket.emit('leaveRoom', this.props.room);
		this.props.changeView('Menu')
	};

	setReady = (ready) => {
		this.socket.emit('ready', this.props.room, ready);
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
					<p id='readyLabel'>{this.state.time}</p>}
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