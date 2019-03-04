import React from 'react'

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.socket = this.props.socket
    }

    shoot = () => {
        this.socket.emit('fire', this.props.room, this.props.coord)
    }

    render() {
        const color = this.props.shot ? 'red' : 'white';
        const isTop = this.props.coord.charAt(0) === 'A';
        const isLeft = this.props.coord.split(this.props.coord.charAt(0))[1] === '1';
        const styleTop = {
            fontFamily: "'Press Start 2P', cursive", 
            fontSize: '1vw', 
            textAlign: 'center',
            paddingLeft: this.props.coord === 'A1' ? '2vw' : 0
        };

        const styleLeft = {
            fontFamily: "'Press Start 2P', cursive", 
            fontSize: '1vw', 
            textAlign: 'center',
            paddingTop: '1vw',
            paddingRight: '1vw'
        };

        return(
            <div>
                {isTop && <p style={styleTop}>{this.props.coord.split(this.props.coord.charAt(0))}</p>}     
                <div style={{ display: 'flex' }}>
                    {isLeft && <span style={styleLeft}>{this.props.coord.charAt(0)}</span>}
                    {this.props.own && 
                    <button style={{ backgroundColor: color, opacity: 0.8, width: '3vw', height: '3vw', borderWidth: 1, borderColor: 'black', borderStyle: 'solid' }}
                    onClick={() => this.shoot()}>
                    </button>}
                    {!this.props.own && 
                    <div style={{ backgroundColor: color, opacity: 0.8, width: '3vw', height: '3vw', borderWidth: 1, borderColor: 'black', borderStyle: 'solid' }}></div>}
                </div>               
            </div>
            
        );
    }
}