import React from 'react';
import '../styles/styles.css';

export default class RoomList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return(
			<table id='RoomList'>
				<tr>
					<td>Room ID</td>
					<td>Players</td>
					<td>Spectate</td>
				</tr>
				<tr>
					<td>4060</td>
					<td>1/2</td>
					<td><button>O</button></td>
				</tr>
			</table>
			);
	}
}