import React from 'react'
import Cell from './Cell'

export default class OpponentTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = { shotTable: shotTable }
        this.socket = this.props.socket
    }

    changeTable = table => {
        this.setState({ shotTable: table })
    }

    componentWillUnmount = () => {
        this.setState({ shotTable: shotTable })
    }

    render() {
        return(
            <div style={{ marginLeft: '1vw' }}>
                <p style={style}>OPPONENT</p>
                <div className='gameDiv' id='dp2'>
                {this.state.shotTable.map(row => {
                    return (
                    <div key={this.state.shotTable.indexOf(row)}>
                        {Object.keys(row).map(key => {
                            return (<Cell coord={key} shot={row[key]} key={key + ' opponent'} changeTable={this.changeTable}
                            socket={this.props.socket} room={this.props.room} shotTable={this.state.shotTable}
							disabled={this.props.disabled} ship='none'/>)
                        })}
                    </div>)
                })}  
                </div>
            </div>
        );
    }
}

const style = {
    fontFamily: "'Press Start 2P', cursive",
    width: 'inherit',
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
    marginBottom: 0,
    marginTop: 20
}

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