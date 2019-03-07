import React from 'react'

export default class Controls extends React.Component {
    constructor(props) {
        super(props)
        this.state = { carrier: initialCarrierPos, btship: initialBtshipPos, cruiser: initialCruiserPos, sub: initialSubPos, destroyer: initialDestPos }
    }

    moveDown = () => {
        if(this.props.selected !== 'none') {
            const forbidden = ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10']
            const initialPos = [...this.state[this.props.selected]]
            const nextPosition = []
            let nextTable = [...this.props.shipTable]
            if(forbidden.every(cell => {
                return nextTable[9][cell] !== this.props.selected
            })) {
                initialPos.forEach(position => {
                    const nextLetter = position.charAt(0) === 'J' ? 'J' : String.fromCharCode(position.charCodeAt(0) + 1)
                    nextPosition.push(nextLetter + position.substring(1))
                    const index = parseInt(position.substring(1), 10) - 1
                    nextTable[index][position] = 'none'
                })
                if(nextPosition.every(position => { return nextTable[parseInt(position.substring(1), 10) - 1][position] === 'none' })) {
                    nextPosition.forEach(position => {
                        const index = parseInt(position.substring(1), 10) - 1
                        nextTable[index][position] = this.props.selected
                    })
                    this.setState({ [this.props.selected]: nextPosition })
                    this.props.setShipTable(nextTable)
                }
            }   
        } 
    }

    moveUp = () => {
        if(this.props.selected !== 'none') {
            const forbidden = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10']
            const initialPos = [...this.state[this.props.selected]]
            const nextPosition = []
            let nextTable = [...this.props.shipTable]
            if(forbidden.every(cell => {
                return nextTable[0][cell] !== this.props.selected
            })) {
                initialPos.forEach(position => {
                    const nextLetter = String.fromCharCode(position.charCodeAt(0) - 1)
                    nextPosition.push(nextLetter + position.substring(1))
                    const index = parseInt(position.substring(1), 10) - 1
                    nextTable[index][position] = 'none'
                })
                if(nextPosition.every(position => { return nextTable[parseInt(position.substring(1), 10) - 1][position] === 'none' })) {
                    nextPosition.forEach(position => {
                        const index = parseInt(position.substring(1), 10) - 1
                        nextTable[index][position] = this.props.selected
                    })
                    this.setState({ [this.props.selected]: nextPosition })
                    this.props.setShipTable(nextTable)
                }
            }
        } 
    }

    moveLeft = () => {
        if(this.props.selected !== 'none') {
            const forbidden = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1']
            const initialPos = [...this.state[this.props.selected]]
            const nextPosition = []
            let nextTable = [...this.props.shipTable]
            if(nextTable.every((row, index) => {
                return forbidden.every(forbiddenCell => {
                    return row[forbiddenCell] !== this.props.selected
                })
            })) {
                 initialPos.forEach(position => {
                    const nextNumber = parseInt(position.substring(1), 10) - 1
                    nextPosition.push(position.charAt(0) + nextNumber)
                    const index = parseInt(position.substring(1), 10) - 1
                    nextTable[index][position] = 'none'
                })
                if(nextPosition.every(position => { return nextTable[parseInt(position.substring(1), 10) - 1][position] === 'none' })) {
                    nextPosition.forEach(position => {
                        const index = parseInt(position.substring(1), 10) - 1
                        nextTable[index][position] = this.props.selected
                    })
                    this.setState({ [this.props.selected]: nextPosition })
                    this.props.setShipTable(nextTable)
                }
            }
        } 
    }

    moveRight = () => {
        if(this.props.selected !== 'none') {
            const forbidden = ['A10', 'B10', 'C10', 'D10', 'E10', 'F10', 'G10', 'H10', 'I10', 'J10']
            const initialPos = [...this.state[this.props.selected]]
            const nextPosition = []
            let nextTable = [...this.props.shipTable]
            if(nextTable.every((row, index) => {
                return forbidden.every(forbiddenCell => {
                    return row[forbiddenCell] !== this.props.selected
                })
            })) {
                 initialPos.forEach(position => {
                    const nextNumber = parseInt(position.substring(1), 10) + 1
                    nextPosition.push(position.charAt(0) + nextNumber)
                    const index = parseInt(position.substring(1), 10) - 1
                    nextTable[index][position] = 'none'
                })
                if(nextPosition.every(position => { return nextTable[parseInt(position.substring(1), 10) - 1][position] === 'none' })) {
                    nextPosition.forEach(position => {
                        const index = parseInt(position.substring(1), 10) - 1
                        nextTable[index][position] = this.props.selected
                    })
                    this.setState({ [this.props.selected]: nextPosition })
                    this.props.setShipTable(nextTable)
                }
            }
        }
    }

    render() {
        console.log(this.state)
        return(
            <div id='controls' style={{ display: this.props.hidden ? 'none' : 'flex' }}>
                <div style={{ width: '50%' }}>
                    <button onClick={() => this.props.setShipSelected('carrier')}>Move Carrier</button>
                    <button onClick={() => this.props.setShipSelected('btship')}>Move Battleship</button>
                    <button onClick={() => this.props.setShipSelected('cruiser')}>Move Cruiser</button>
                    <button onClick={() => this.props.setShipSelected('sub')}>Move Submarine</button>
                    <button onClick={() => this.props.setShipSelected('destroyer')}>Move Destroyer</button>
                </div>
                <div style={{ width: '50%' }}>
                    <button style={{ fontSize: '0.8vw', fontWeight: '900', transform: 'rotate(270deg)' }} onClick={this.moveUp}>{'>'}</button><br />
                    <button style={{ fontSize: '0.8vw', fontWeight: '900' }} onClick={this.moveLeft}>{'<'}</button>
                    <button style={{ fontSize: '0.8vw', fontWeight: '900', marginLeft: '2vw' }} onClick={this.moveRight}>{'>'}</button><br />
                    <button style={{ fontSize: '0.8vw', fontWeight: '900', transform: 'rotate(270deg)' }} onClick={this.moveDown}>{'<'}</button><br />
                    <button style={{ fontSize: '0.9vw' }}>Change Rotation</button>
                </div>
            </div>
        );
    }
}

const initialCarrierPos = ['A1', 'A2', 'A3', 'A4', 'A5']
const initialBtshipPos = ['C1', 'C2', 'C3', 'C4']
const initialCruiserPos = ['E1', 'E2', 'E3']
const initialSubPos = ['G1', 'G2', 'G3']
const initialDestPos = ['I1', 'I2']