import React from 'react';
import '../styles/styles.css';

export default class RoomList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.socket = this.props.socket
	}

	joinRoom = room => {
		this.socket.emit('joinRoom', parseInt(room, 10))
		this.props.setActiveRoom(parseInt(room, 10))
		this.props.changeView('Game')
	}

	render() {
		return(
			<div id='tableCtn'>
				<table id='roomTable'>
					<tbody>
						<tr>
							<td>Room ID</td>
							<td>Players</td>
							<td>Spectators</td>
							<td colSpan={2}>Actions</td>
						</tr>
						{this.props.rooms.map(room => {
							const key = Object.keys(room) // maps roomID
							return(
								<tr>
									<td>{key}</td>
									<td>{room[key].length + "/2"}</td>
									<td>0</td>
									<td>
										<button onClick={() => this.joinRoom(key)} className='tableBtn'>JOIN</button>
									</td>
									<td>
										<button onClick={() => this.joinRoom(key)} className='tableBtn'>SPECTATE</button> {/* FIXME: spectate method */}
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
				<div>
					<button className='tableBtn' style={{ marginLeft: '55vw', marginRight: '3vw', marginTop: '1vh' }} onClick={() => this.props.changeView('Menu')}>Back</button>
					<button className='tableBtn' style={{ marginRight: 0 }} onClick={() => this.props.refresh()}>Refresh</button>
				</div>
			</div>
			);
	}
}