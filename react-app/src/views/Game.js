import React from 'react';
import Chat from '../components/Chat'
import PlayerTable from '../components/PlayerTable'
import '../styles/styles.css';
import OpponentTable from '../components/OpponentTable';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props.room)
        return(
          <div id='gameTables'>
              <PlayerTable />
              <OpponentTable />

              <Chat socket={this.props.socket} room={this.props.room}/>

{/* 
              <div id='roomInfo'>
                  <button>Give Up</button>
              </div> */}
          </div>
        );
    }
}
