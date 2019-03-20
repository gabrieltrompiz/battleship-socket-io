import React from 'react'

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: 'chat', message: '', messageList: [], logList: [] };
        this.socket = this.props.socket
        this.socket.on('endOfGame', () => {
            this.setState({ messageList: [], logList: [] })
        })
        this.socket.on('opponentLeft', () => {
            this.setState({ messageList: [], logList: [] })
        })
    }

    componentDidMount = () => {
        this.socket.on('chat message', message => {
            const fixedMessage = <span><span style={{ color: 'red' }}>OPPONENT: </span>{message}</span>
            const joined = this.state.messageList.concat(fixedMessage);
            this.setState({ messageList: joined });
        });

        this.socket.on('logFire', (coord, player) => {
        	const fixedLog = <span>{this.props.turn ? 'Opponent':'You'} shot at: {coord}</span>;
        	const joined = this.state.logList.concat(fixedLog);
        	this.setState({ logList: joined });
		});

        this.socket.on('shoot', (coord, shoot, sank, shooter) => {
        	const fixedLog = <span>{shooter ? 'You' : 'Opponent'} shot at {coord} <span style={{ color: shoot === 'none' ? 'blue' : sank ? 'red' : 'orange' }}>
        	{shoot !== 'none' ? ' and hit a ship' + (sank ? ' and it sank.': '.') : 'and it didn\'t hit anything.'}</span></span>;
			//const fixedLog = <span>{this.props.turn ? 'Opponent':'You'} shoot at: {shoot}</span>;
			const joined = this.state.logList.concat(fixedLog);
			this.setState({ logList: joined });
		});
    };

    handleChange = (e) => {
        this.setState({ message: e.target.value })
    };

    sendMessage = e => {
        if(this.state.message !== '') {
            const message = <span><span style={{ color: 'blue' }}>YOU: </span>{this.state.message}</span>;
            const joined = this.state.messageList.concat(message);
            this.socket.emit('chat message', this.props.room, this.state.message);
            this.setState({ message: '', messageList: joined })
        }
    };

    handleKey = e => {
        if(e.key === 'Enter') {
            this.sendMessage(e)
        }
    };

    render() {
        return(
            <div id='chat'>
                <div style={{ height: '6vh'}}>
                    <button id='chatBtn' style={{ backgroundColor: this.state.selected === 'chat' ? '#eaeaea' : 'transparent' }}
                    onClick={() => this.setState({ selected: 'chat' })}>CHAT</button>
                    <button id='logBtn' style={{ backgroundColor: this.state.selected === 'log' ? '#eaeaea' : 'transparent' }}
                    onClick={() => this.setState({ selected: 'log' })}>LOG</button>
                </div>       
                {this.state.selected === 'chat' &&
                <div>
                     <ul id="messages">
                        {this.state.messageList.map(value => {
                            return <li key={this.state.messageList.indexOf(value)}>{value}</li>
                        })}
                    </ul>
                </div>}
                {this.state.selected === 'log' && 
                <div>
                    <ul id="messages">
                        {this.state.logList.map(value => {
                            return <li key={this.state.logList.indexOf(value)}>{value}</li>
                        })}
                    </ul>
                </div>}
                <input autoComplete="off" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKey}/>
                <button onClick={this.sendMessage} id='sendBtn'>SEND</button>
            </div>
        );
    }
}