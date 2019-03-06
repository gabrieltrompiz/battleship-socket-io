import React from 'react';

export default class RoomInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { roomInfo: {}, stateMsg: 'Press when you\'re ready', playing: false };
		this.socket = this.props.socket;
		this.socket.on('roomUpdate', room => {
			this.setState({ roomInfo: room });
		});
		this.socket.on('getRoomInfo', roomInfo => {
			this.setState({ roomInfo: roomInfo });
		});
		this.socket.emit('getRoomInfo', this.props.room);
	}

	leaveRoom = () => {
		this.socket.emit('leaveRoom', this.props.room)
		this.props.changeView('Menu')
	}

	setReady = () => {
		this.socket.emit('playerReady');
		if(this.state.roomInfo.length === 1) this.setState({stateMsg: 'Waiting for Opponent'});
	};

	render() {
		return(
			<div id='roomInfo'>
				<p>Room ID: {this.props.room}</p>
				<p># of Spectators: 0</p>
				<p>Players: {this.state.roomInfo.length}/2</p>
				<button className='tableBtn' onClick={this.leaveRoom}>Leave Room</button>
				<div id='readyDiv'>
					<button id='readyBtn' onClick={() => this.setReady()}>READY</button>
					<p id='readyLabel'>{this.state.stateMsg}</p>
				</div>
			</div>
			);
	}
}