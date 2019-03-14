import React from 'react';

export default class GameSpectator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {turn: null, shipTableP1: null, shipTableP2: null};
        this.socket = this.props.socket;
        this.socket.on('getGameStatus', (tableP1, tableP2, turn) => {
        	this.setState({ turn: turn, shipTableP1: tableP1, shipTableP2: tableP2 });
		});
    }

    componentDidMount = () => {
    	this.socket.emit('getGameStatus', this.props.room);
	};

    render() {
    	return(
    		<div>
				<PlayerTable/>
				<PlayerTable/>
			</div>
		);
	}
}
