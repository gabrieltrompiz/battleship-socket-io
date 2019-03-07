import React from 'react';
import Chat from '../components/Chat';
import PlayerTable from '../components/PlayerTable';
import '../styles/styles.css';
import OpponentTable from '../components/OpponentTable';
import RoomInfo from '../components/RoomInfo';
import Controls from '../components/Controls'

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = { turn: false, ready: false, shipTable: shipTable, shipSelected: 'none' };
        this.socket = this.props.socket;
		this.socket.on('initGame', () => {
			this.setState({ turn: true });
		});
		this.socket.on('setTurn', (turn) => {
			this.setState({ turn: turn })
		});
        this.socket.on('ready', ready => {
            this.setState({ ready: ready })
        });
	}

	setTurnFalse = () => {
		this.socket.emit('setTurn', this.props.room);
		this.setState({ turn: false });
	};

	setShipSelected = ship => { 
		this.setState({ shipSelected: ship })
	}

	setShipTable = table => {
		this.setState({ shipTable: table })
	}

	render() {
		return(
			<div id='gameTables'>
				<PlayerTable socket={this.socket} room={this.props.room} shipTable={this.state.shipTable} shipSelected={this.state.shipSelected}/>
				<OpponentTable socket={this.socket} room={this.props.room} disabled={!this.state.turn}/>
				<Chat socket={this.socket} room={this.props.room} turn={this.state.turn}/>
				<RoomInfo socket={this.socket} room={this.props.room} changeView={this.props.changeView}
				turn={this.state.turn} ready={this.state.ready} setTurn={this.setTurnFalse}/>
				<Controls hidden={this.state.ready} setShipSelected={this.setShipSelected} shipTable={this.state.shipTable} setShipTable={this.setShipTable}
				selected={this.state.shipSelected}/>
			</div>
		);
	}
}

const shipTable = [
    { A1: 'carrier', B1: 'none', C1: 'btship', D1: 'none', E1: 'cruiser', F1: 'none', G1: 'sub', H1: 'none', I1: 'destroyer', J1: 'none' },
    { A2: 'carrier', B2: 'none', C2: 'btship', D2: 'none', E2: 'cruiser', F2: 'none', G2: 'sub', H2: 'none', I2: 'destroyer', J2: 'none' },
    { A3: 'carrier', B3: 'none', C3: 'btship', D3: 'none', E3: 'cruiser', F3: 'none', G3: 'sub', H3: 'none', I3: 'none', J3: 'none' },
    { A4: 'carrier', B4: 'none', C4: 'btship', D4: 'none', E4: 'none', F4: 'none', G4: 'none', H4: 'none', I4: 'none', J4: 'none' },
    { A5: 'carrier', B5: 'none', C5: 'none', D5: 'none', E5: 'none', F5: 'none', G5: 'none', H5: 'none', I5: 'none', J5: 'none' },
    { A6: 'none', B6: 'none', C6: 'none', D6: 'none', E6: 'none', F6: 'none', G6: 'none', H6: 'none', I6: 'none', J6: 'none' },
    { A7: 'none', B7: 'none', C7: 'none', D7: 'none', E7: 'none', F7: 'none', G7: 'none', H7: 'none', I7: 'none', J7: 'none' },
    { A8: 'none', B8: 'none', C8: 'none', D8: 'none', E8: 'none', F8: 'none', G8: 'none', H8: 'none', I8: 'none', J8: 'none' },
    { A9: 'none', B9: 'none', C9: 'none', D9: 'none', E9: 'none', F9: 'none', G9: 'none', H9: 'none', I9: 'none', J9: 'none' },
    { A10: 'none', B10: 'none', C10: 'none', D10: 'none', E10: 'none', F10: 'none', G10: 'none', H10: 'none', I10: 'none', J10: 'none' }
]

