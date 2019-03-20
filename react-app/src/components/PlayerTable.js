import React from 'react'
import Cell from './Cell'

export default class PlayerTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shotTable: this.initialTable, carrier: 5, battleship: 4, cruiser: 3, submarine: 3, destroyer: 2, total: 17 };
        this.socket = this.props.socket;
        this.socket.on('fire', coord => {
        	let sank = false;
            const table = [...this.state.shotTable];
            const row = parseInt(coord.substring(1), 10);
            table[row -1][coord] = true;
            this.setState({ shotTable: table });

            switch(this.props.shipTable[row - 1][coord]) {
				case 'none':
					break;

				case 'carrier':
					this.setState({ carrier: this.state.carrier - 1, total: this.state.total - 1 });
					if(this.state.carrier === 0)
						sank = true;
					break;

				case 'btship':
					this.setState({ battleship: this.state.battleship - 1, total: this.state.total - 1 });
					if(this.state.battleship === 0)
						sank = true;
					break;

				case 'cruiser':
					this.setState({ cruiser: this.state.cruiser - 1, total: this.state.total - 1 });
					if(this.state.cruiser === 0)
						sank = true;
					break;

				case 'sub':
					this.setState({ submarine: this.state.submarine - 1, total: this.state.total - 1 });
					if(this.state.submarine === 0)
						sank = true;
					break;

				case 'destroyer':
					this.setState({ destroyer: this.state.destroyer - 1, total: this.state.total - 1 });
					if(this.state.destroyer === 0)
						sank = true;
					break;

				default:
					throw new Error();
			}

			this.socket.emit('shoot', this.props.room, coord, this.props.shipTable[row - 1][coord], sank);
			//Parámetros: Room, Coordenadas del tiro, Descripción del golpe(a qué le dió) y si fue hundido

			if(this.state.total === 0) {
				this.socket.emit('endOfGame', this.props.room);
            }
        });
        this.socket.on('endOfGame', () => {
            this.setState({ shotTable: this.initialTable })
        })
        this.socket.on('opponentLeft', () => {
            this.setState({ shotTable: this.initialTable })
        })
    }

    componentWillUnmount = () => {
        this.setState({ shotTable: this.initialTable })
    };

    render() {
        return(
            <div>
                <p style={style}>YOU</p>
                <div className='gameDiv' id='dp1'>
                {this.state.shotTable.map((row, index) => {
                    return (
                    <div key={this.state.shotTable.indexOf(row)}>
                        {Object.keys(row).map(key => {
                            return (<Cell coord={key} shot={row[key]} key={key + ' player'} disabled ship={this.props.shipTable[index][key]} 
                            selected={this.props.shipTable[index][key] === this.props.shipSelected}/>)
                        })}
                    </div>)
                })}
                </div>
            </div>
        );
    }

     get initialTable() {
        const shotTable = [
            { A1: false, B1: false, C1: false, D1: false, E1: false, F1: false, G1: false, H1: false, I1: false, J1: false },
            { A2: false, B2: false, C2: false, D2: false, E2: false, F2: false, G2: false, H2: false, I2: false, J2: false },
            { A3: false, B3: false, C3: false, D3: false, E3: false, F3: false, G3: false, H3: false, I3: false, J3: false },
            { A4: false, B4: false, C4: false, D4: false, E4: false, F4: false, G4: false, H4: false, I4: false, J4: false },
            { A5: false, B5: false, C5: false, D5: false, E5: false, F5: false, G5: false, H5: false, I5: false, J5: false },
            { A6: false, B6: false, C6: false, D6: false, E6: false, F6: false, G6: false, H6: false, I6: false, J6: false },
            { A7: false, B7: false, C7: false, D7: false, E7: false, F7: false, G7: false, H7: false, I7: false, J7: false },
            { A8: false, B8: false, C8: false, D8: false, E8: false, F8: false, G8: false, H8: false, I8: false, J8: false },
            { A9: false, B9: false, C9: false, D9: false, E9: false, F9: false, G9: false, H9: false, I9: false, J9: false },
            { A10: false, B10: false, C10: false, D10: false, E10: false, F10: false, G10: false, H10: false, I10: false, J10: false }
        ]
        return shotTable
    }
}

const style = {
    fontFamily: "'Press Start 2P', cursive",
    width: 'inherit',
    textAlign: 'center',
    color: 'blue',
    fontSize: 20,
    marginBottom: 0,
    marginTop: 20
}