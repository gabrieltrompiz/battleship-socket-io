import React from 'react';

export default class RoomInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { roomInfo: {} }
		this.socket = this.props.socket
		this.socket.on('roomUpdate', room => {
			this.setState({ roomInfo: room })
		})
		this.socket.on('getRoomInfo', roomInfo => {
			this.setState({ roomInfo: roomInfo })
		})
		this.socket.emit('getRoomInfo', this.props.room)
	}


	render() {
		return(
			<div id='roomInfo'>
				<p>Room ID: {this.props.room}</p>
				<p># of Spectators: 0</p>
				<p>Players: {this.state.roomInfo.length}/2</p>
				<button className='tableBtn'>Leave Room</button>
			</div>
			);
	}
}