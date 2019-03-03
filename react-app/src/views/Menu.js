import React from 'react';
import '../styles/styles.css';


export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return(
			<div>
				<div id='titleContainer'><p id='title'>SUPER<br />BATTLESHIP</p></div>
				<div id='menuCtn'>
					<button className='menuBtn' style={{marginTop: 20}} onClick={() => this.props.createRoom()}>Create Room</button><br></br>
					<button className='menuBtn' onClick={() => this.props.roomRequest()}>Join Room</button><br></br>
					<button className='menuBtn' onClick={() => this.props.changeView('Help')}>Help</button><br></br>
				</div>
			</div>
		);
	}
}