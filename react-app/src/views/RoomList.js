import React from 'react';
import '../styles/styles.css';
import { isNumber } from 'util';

export default class RoomList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return(
			<div id='tableCtn'>
				<table id='RoomList'>
					<tbody>
						<tr>
							<td>Room ID</td>
							<td>Players</td>
							<td>Join</td>
							<td>Spectate</td>
							<td>Spectators</td>
						</tr>
						{this.props.rooms.map(room => {
							const key = Object.keys(room) // maps roomID
							return(
								<tr>
									<td>{key}</td>
									<td>{room[key].length + "/2"}</td>
									<td>O</td> { /*TODO: Buttons to join and spectate*/ }
									<td>O</td>
									<td>0</td>
								</tr>
							)
						})}
					</tbody>
				</table>
				<div>
					<button className='tableBtn' style={{ marginLeft: '55vw', marginRight: '3vw' }} onClick={() => this.props.changeView('Menu')}>Back</button>
					<button className='tableBtn' style={{ marginRight: 0 }} onClick={() => this.props.refresh()}>Refresh</button>
				</div>
			</div>
			);
	}
}