import React from 'react'

export default class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = { carrier: initialCarrierPos, btship: initialBtshipPos, cruiser: initialCruiserPos, sub: initialSubPos, destroyer: initialDestPos }
    }

    moveDown = () => {
        if(this.props.selected !== 'none') {
            const forbidden = ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10']
            const initialPos = [...this.state[this.props.selected]]
            const nextPosition = []
            let nextTable = [...this.props.shipTable]
            if(forbidden.every(cell => {
                return !initialPos.includes(cell)
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
                return !initialPos.includes(cell)
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
            if(forbidden.every(cell => {
                return !initialPos.includes(cell)
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
            if(forbidden.every(cell => {
                return !initialPos.includes(cell)
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

    changeRotation = () => {
        if(this.props.selected !== 'none') {
            let nextTable = [...this.props.shipTable]
            let initialPos = [...this.state[this.props.selected]]
            const horizontal = initialPos[0].charAt(0) === initialPos[1].charAt(0)
            const vertical = initialPos[0].substring(1) === initialPos[1].substring(1)
            const nextPosition = []
            const size = this.state[this.props.selected].length
            let rotable = false;
            if(horizontal) {
                const forbidden = []
                let letters = String.fromCharCode('K'.charCodeAt(0) - size + 1)
                while(letters.charCodeAt(0) !== 'K'.charCodeAt(0)) {
                    forbidden.push(letters)
                    letters = String.fromCharCode(letters.charCodeAt(0) + 1)
                }
                if(forbidden.every(cell => {
                    return !initialPos[0].startsWith(cell)
                })){
                    rotable = true
                    const firstRow = parseInt(initialPos[0].substring(1), 10) - 1
                    nextTable[firstRow][initialPos[0]] = 'none'
                    nextPosition.push(initialPos[0])
                    initialPos = initialPos.slice(1, initialPos.length)
                    initialPos.forEach((position, index) => {
                        let nextLetter = position.charAt(0)
                        let nextNumber = parseInt(position.substring(1), 10)
                        for(let i = index; i >= 0; i--) {
                            nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1)
                            nextNumber--
                        }
                        nextPosition.push(nextLetter + nextNumber)
                        const row = parseInt(position.substring(1), 10) - 1
                        nextTable[row][position] = 'none'
                    })
                }
            }
            if(vertical) {
                const forbidden = []
                let numbers = 12 - size
                while(numbers !== 11) {
                    forbidden.push(numbers)
                    numbers++
                }
                if(forbidden.every(cell => {
                    return parseInt(initialPos[0].substring(1), 10) !== cell
                })) {
                    rotable = true
                    const firstRow = parseInt(initialPos[0].substring(1), 10) - 1
                    nextTable[firstRow][initialPos[0]] = 'none'
                    nextPosition.push(initialPos[0])
                    initialPos = initialPos.slice(1, initialPos.length)
                    initialPos.forEach((position, index) => {
                        let nextLetter = position.charAt(0)
                        let nextNumber = parseInt(position.substring(1), 10)
                        for(let i = index; i >= 0; i--) {
                            nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) - 1)
                            nextNumber++
                        }
                        nextPosition.push(nextLetter + nextNumber)
                        const row = parseInt(position.substring(1), 10) - 1
                        nextTable[row][position] = 'none'
                    })
                }
            }
            if(nextPosition.every(position => { return nextTable[parseInt(position.substring(1), 10) - 1][position] === 'none' }) && rotable) {
                nextPosition.forEach(position => {
                    const index = parseInt(position.substring(1), 10) - 1
                    nextTable[index][position] = this.props.selected
                })
                this.setState({ [this.props.selected]: nextPosition })
                this.props.setShipTable(nextTable)
            }
        }
    }

    render() {
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
                    <button style={{ fontSize: '0.9vw' }} onClick={this.changeRotation}>Change Rotation</button>
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