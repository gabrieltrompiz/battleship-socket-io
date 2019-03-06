import React from 'react'

export default class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selected: 'chat', message: '', messageList: [] }
        this.socket = this.props.socket
    }

    componentDidMount = () => {
        this.socket.on('chat message', message => {
            const fixedMessage = <span><span style={{ color: 'red' }}>OPPONENT: </span>{message}</span>
            const joined = this.state.messageList.concat(fixedMessage)
            this.setState({ messageList: joined })
        })
    }

    handleChange = (e) => {
        this.setState({ message: e.target.value })
    }

    sendMessage = e => {
        if(this.state.message !== '') {
            const message = <span><span style={{ color: 'blue' }}>YOU: </span>{this.state.message}</span>
            const joined = this.state.messageList.concat(message)
            this.socket.emit('chat message', this.props.room, this.state.message);
            this.setState({ message: '', messageList: joined })
        }
    }

    handleKey = e => {
        if(e.key === 'Enter') {
            this.sendMessage(e)
        }
    }

    render() {
        return(
            <div id='chat'>
                <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <button id='chatBtn'>CHAT</button>
                    <button id='logBtn'>LOG</button>
                </div>       
                {this.state.selected === 'chat' &&
                <div>
                     <ul id="messages">
                        {this.state.messageList.map(value => {
                            return <li key={this.state.messageList.indexOf(value)}>{value}</li>
                        })}
                    </ul>
                </div>}
                <input autoComplete="off" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKey}/>
                <button onClick={this.sendMessage} id='sendBtn'>SEND</button>
            </div>
        );
    }
}