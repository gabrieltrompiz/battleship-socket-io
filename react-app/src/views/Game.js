import React from 'react';
import Chat from '../components/Chat';
import PlayerTable from '../components/PlayerTable';
import '../styles/styles.css';
import OpponentTable from '../components/OpponentTable';
import RoomInfo from '../components/RoomInfo';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = { turn: false};
		this.props.socket.on('initGame', () => {
			this.setState({turn: true});
		});

		this.props.socket.on('setTurn', (turn) => {
			this.setState({ turn: turn })
		});

	}

	render() {
		return(
			<div id='gameTables'>
				<PlayerTable socket={this.props.socket} room={this.props.room}/>
				<OpponentTable socket={this.props.socket} room={this.props.room} disabled={!this.state.turn}/>

				<Chat socket={this.props.socket} room={this.props.room}/>
				<RoomInfo socket={this.props.socket} room={this.props.room} changeView={this.props.changeView}/>
			</div>
		);
	}
}
