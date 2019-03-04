import React from 'react';
import '../styles/styles.css';
import { isNumber } from 'util';


export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.socket = this.props.socket
	}

    createRoom = async () => {
        await this.socket.emit('createRoom');
        this.socket.on('roomCreated', room => {
            this.props.setActiveRoom(room)
        });
        this.props.changeView('Game');
    };

	render() {
		return(
			<div>
				<div id='titleContainer'><p id='title'>SUPER<br />BATTLESHIP</p></div>
				<div id='menuCtn'>
					<button className='menuBtn' style={{marginTop: 20}} onClick={() => this.createRoom()}>Create Room</button><br></br>
					<button className='menuBtn' onClick={() => this.props.requestRoom()}>Join Room</button><br></br>
					<button className='menuBtn' onClick={() => this.props.changeView('Help')}>Help</button><br></br>
				</div>
			</div>
		);
	}
}