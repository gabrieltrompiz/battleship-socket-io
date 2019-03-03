import React from 'react';
import '../styles/styles.css';

export default class RoomList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return(
			<div id='tableCtn'>
				<table id='RoomList'>
					<tr>
						<td>Room ID</td>
						<td>Players</td>
						<td>Join</td>
						<td>Spectate</td>
						<td>Spectators</td>
					</tr>
					<tr>
						<td>4061</td>
						<td>2/2</td>
						<td><button>O</button></td>
						<td><button>O</button></td>
						<td>0</td>
					</tr>
					<tr>
						<td>4062</td>
						<td>1/2</td>
						<td><button>O</button></td>
						<td><button>O</button></td>
						<td>0</td>
					</tr>
					<tr>
						<td>4063</td>
						<td>2/2</td>
						<td><button>O</button></td>
						<td><button>O</button></td>
						<td>0</td>
					</tr>
				</table>
				<div>
					<button className='tableBtn' style={{ marginLeft: '55vw', marginRight: '3vw' }} onClick={() => this.props.changeView('Menu')}>Back</button>
					<button className='tableBtn' style={{ marginRight: 0 }}>Refresh</button>
				</div>
			</div>
			);
	}
}