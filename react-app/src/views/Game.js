import React from 'react';
import Chat from '../components/Chat';
import PlayerTable from '../components/PlayerTable';
import '../styles/styles.css';
import OpponentTable from '../components/OpponentTable';
import RoomInfo from '../components/RoomInfo';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return(
			<div id='gameTables'>
				<PlayerTable socket={this.props.socket} room={this.props.room}/>
				<OpponentTable socket={this.props.socket} room={this.props.room}/>

				<Chat socket={this.props.socket} room={this.props.room}/>
				<RoomInfo room={this.props.room}/>
			</div>
		);
	}
}
