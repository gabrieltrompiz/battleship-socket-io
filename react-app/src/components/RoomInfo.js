import React from 'react';

export default class RoomInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { room: 0}
	}

	componentDidMount = () => {
		this.setState({room: this.props.activeRoom})
	}

	render() {
		return(
			<div id='roomInfo'>
				<p># of Room: {this.props.room}</p>
				<p># of Spectators: 0 {/*this.state.roomSpectators*/}</p>
				<p>Players: 1{/*this.state.players*/}/2</p>
				<button className='tableBtn'>Left Room</button>
			</div>
			);
	}
}