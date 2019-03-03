import React from 'react';
import '../styles/styles.css';


export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return(
		<div id='menuCtn'>
			<div id='titleContainer'><p id='title'>Battleship</p></div>
			<button className='menuBtn' style={{marginTop: 20}}>Create Room</button><br></br>
			<button className='menuBtn' onClick={() => this.props.changeView('RoomList')}>Join Room</button><br></br>
			<button className='menuBtn'>Help</button><br></br>
		</div>);
	}
}