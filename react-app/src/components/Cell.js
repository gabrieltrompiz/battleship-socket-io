import React from 'react'

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shoot: false };
        this.socket = this.props.socket;
    }

    shoot = () => {
    	if(!this.state.shoot) {
			const table = [...this.props.shotTable];
			const row = parseInt(this.props.coord.substring(1), 10);
			table[row - 1][this.props.coord] = true;
			this.props.changeTable(table);
			this.socket.emit('fire', this.props.room, this.props.coord);
			this.setState({ shoot: true });
		}
    };

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
                    {!this.props.disabled &&
                    <div style={{ backgroundColor: color, opacity: 0.8, width: '2.7vw', height: '2.7vw', borderWidth: 1, borderColor: 'black', borderStyle: 'solid',
                    cursor: this.state.shoot ? 'auto' : 'pointer' }} className='shootable' onClick={() => this.shoot()}>
                    </div>}
                    {this.props.disabled &&
                    <div style={{ backgroundColor: color, opacity: 0.8, width: '2.7vw', height: '2.7vw', borderWidth: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        {this.props.ship !== 'none' &&
                        <div style={{ backgroundColor: '#acabc9', width: '1.7vw', height: '1.7vw', marginTop: this.props.selected ? '0.35vw' : '0.5vw', 
                        marginLeft: this.props.selected ? '0.35vw' : '0.5vw', border: this.props.selected ? '0.15vw blue dashed' : 'none', opacity: 1 }}></div>}
                    </div>}
                </div>               
            </div>
            
        );
    }
}