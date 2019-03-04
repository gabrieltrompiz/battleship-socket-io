import React from 'react';
import Cell from '../components/Cell'
import Chat from '../components/Chat'
import '../styles/styles.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
          <div id='gameTables'>
            <div className='gameDiv' id='dp1'>
                <div>
                    <Cell coord="A1" socket={this.props.socket}/>
                    <Cell coord="B1"/>
                    <Cell coord="C1"/>
                    <Cell coord="D1"/>
                    <Cell coord="E1"/>
                    <Cell coord="F1"/>
                    <Cell coord="G1"/>
                    <Cell coord="H1"/>
                    <Cell coord="I1"/>
                    <Cell coord="J1"/>
                </div>
                <div>
                    <Cell coord="A2" />
                    <Cell coord="B2" />
                    <Cell coord="C2"/>
                    <Cell coord="D2"/>
                    <Cell coord="E2"/>
                    <Cell coord="F2"/>
                    <Cell coord="G2"/>
                    <Cell coord="H2"/>
                    <Cell coord="I2"/>
                    <Cell coord="J2"/>
                </div>
                <div>
                    <Cell coord="A3" />
                    <Cell coord="B3" />
                    <Cell coord="C3"/>
                    <Cell coord="D3"/>
                    <Cell coord="E3"/>
                    <Cell coord="F3"/>
                    <Cell coord="G3"/>
                    <Cell coord="H3"/>
                    <Cell coord="I3"/>
                    <Cell coord="J3"/>
                </div>
                <div>
                    <Cell coord="A4" />
                    <Cell coord="B4" />
                    <Cell coord="C4"/>
                    <Cell coord="D4"/>
                    <Cell coord="E4"/>
                    <Cell coord="F4"/>
                    <Cell coord="G4"/>
                    <Cell coord="H4"/>
                    <Cell coord="I4"/>
                    <Cell coord="J4"/>
                </div>
                <div>
                    <Cell coord="A5" />
                    <Cell coord="B5" />
                    <Cell coord="C5"/>
                    <Cell coord="D5"/>
                    <Cell coord="E5"/>
                    <Cell coord="F5"/>
                    <Cell coord="G5"/>
                    <Cell coord="H5"/>
                    <Cell coord="I5"/>
                    <Cell coord="J5"/>
                </div>
                <div>
                    <Cell coord="A6" />
                    <Cell coord="B6" />
                    <Cell coord="C6"/>
                    <Cell coord="D6"/>
                    <Cell coord="E6"/>
                    <Cell coord="F6"/>
                    <Cell coord="G6"/>
                    <Cell coord="H6"/>
                    <Cell coord="I6"/>
                    <Cell coord="J6"/>
                </div>
                <div>
                    <Cell coord="A7" />
                    <Cell coord="B7" />
                    <Cell coord="C7"/>
                    <Cell coord="D7"/>
                    <Cell coord="E7"/>
                    <Cell coord="F7"/>
                    <Cell coord="G7"/>
                    <Cell coord="H7"/>
                    <Cell coord="I7"/>
                    <Cell coord="J7"/>
                </div>
                <div>
                    <Cell coord="A8" />
                    <Cell coord="B8" />
                    <Cell coord="C8"/>
                    <Cell coord="D8"/>
                    <Cell coord="E8"/>
                    <Cell coord="F8"/>
                    <Cell coord="G8"/>
                    <Cell coord="H8"/>
                    <Cell coord="I8"/>
                    <Cell coord="J8"/>
                </div>
                <div>
                    <Cell coord="A9" />
                    <Cell coord="B9" />
                    <Cell coord="C9"/>
                    <Cell coord="D9"/>
                    <Cell coord="E9"/>
                    <Cell coord="F9"/>
                    <Cell coord="G9"/>
                    <Cell coord="H9"/>
                    <Cell coord="I9"/>
                    <Cell coord="J9"/>
                </div>
                <div>
                    <Cell coord="A10" />
                    <Cell coord="B10" />
                    <Cell coord="C10"/>
                    <Cell coord="D10"/>
                    <Cell coord="E10"/>
                    <Cell coord="F10"/>
                    <Cell coord="G10"/>
                    <Cell coord="H10"/>
                    <Cell coord="I10"/>
                    <Cell coord="J10"/>
                </div>
              </div>
              <div className='gameDiv' id='dp2'>
                <div>
                    <Cell coord="A1" />
                    <Cell coord="B1" />
                    <Cell coord="C1"/>
                    <Cell coord="D1"/>
                    <Cell coord="E1"/>
                    <Cell coord="F1"/>
                    <Cell coord="G1"/>
                    <Cell coord="H1"/>
                    <Cell coord="I1"/>
                    <Cell coord="J1"/>
                </div>
                <div>
                    <Cell coord="A2" />
                    <Cell coord="B2" />
                    <Cell coord="C2"/>
                    <Cell coord="D2"/>
                    <Cell coord="E2"/>
                    <Cell coord="F2"/>
                    <Cell coord="G2"/>
                    <Cell coord="H2"/>
                    <Cell coord="I2"/>
                    <Cell coord="J2"/>
                </div>
                <div>
                    <Cell coord="A3" />
                    <Cell coord="B3" />
                    <Cell coord="C3"/>
                    <Cell coord="D3"/>
                    <Cell coord="E3"/>
                    <Cell coord="F3"/>
                    <Cell coord="G3"/>
                    <Cell coord="H3"/>
                    <Cell coord="I3"/>
                    <Cell coord="J3"/>
                </div>
                <div>
                    <Cell coord="A4" />
                    <Cell coord="B4" />
                    <Cell coord="C4"/>
                    <Cell coord="D4"/>
                    <Cell coord="E4"/>
                    <Cell coord="F4"/>
                    <Cell coord="G4"/>
                    <Cell coord="H4"/>
                    <Cell coord="I4"/>
                    <Cell coord="J4"/>
                </div>
                <div>
                    <Cell coord="A5" />
                    <Cell coord="B5" />
                    <Cell coord="C5"/>
                    <Cell coord="D5"/>
                    <Cell coord="E5"/>
                    <Cell coord="F5"/>
                    <Cell coord="G5"/>
                    <Cell coord="H5"/>
                    <Cell coord="I5"/>
                    <Cell coord="J5"/>
                </div>
                <div>
                    <Cell coord="A6" />
                    <Cell coord="B6" />
                    <Cell coord="C6"/>
                    <Cell coord="D6"/>
                    <Cell coord="E6"/>
                    <Cell coord="F6"/>
                    <Cell coord="G6"/>
                    <Cell coord="H6"/>
                    <Cell coord="I6"/>
                    <Cell coord="J6"/>
                </div>
                <div>
                    <Cell coord="A7" />
                    <Cell coord="B7" />
                    <Cell coord="C7"/>
                    <Cell coord="D7"/>
                    <Cell coord="E7"/>
                    <Cell coord="F7"/>
                    <Cell coord="G7"/>
                    <Cell coord="H7"/>
                    <Cell coord="I7"/>
                    <Cell coord="J7"/>
                </div>
                <div>
                    <Cell coord="A8" />
                    <Cell coord="B8" />
                    <Cell coord="C8"/>
                    <Cell coord="D8"/>
                    <Cell coord="E8"/>
                    <Cell coord="F8"/>
                    <Cell coord="G8"/>
                    <Cell coord="H8"/>
                    <Cell coord="I8"/>
                    <Cell coord="J8"/>
                </div>
                <div>
                    <Cell coord="A9" />
                    <Cell coord="B9" />
                    <Cell coord="C9"/>
                    <Cell coord="D9"/>
                    <Cell coord="E9"/>
                    <Cell coord="F9"/>
                    <Cell coord="G9"/>
                    <Cell coord="H9"/>
                    <Cell coord="I9"/>
                    <Cell coord="J9"/>
                </div>
                <div>
                    <Cell coord="A10" />
                    <Cell coord="B10" />
                    <Cell coord="C10"/>
                    <Cell coord="D10"/>
                    <Cell coord="E10"/>
                    <Cell coord="F10"/>
                    <Cell coord="G10"/>
                    <Cell coord="H10"/>
                    <Cell coord="I10"/>
                    <Cell coord="J10"/>
                </div>
              </div>

              <div id='gameHistory'>

              </div>

              <Chat socket={this.props.socket}/>

              <div id='battleships'>

              </div>
          </div>
        );
    }
}