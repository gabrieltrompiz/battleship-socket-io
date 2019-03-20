import React from 'react'

export default class ModalAlert extends React.Component {
    render() {
        return(
            <div style={styles.container}>
                <div style={styles.alert}>
                    <p style={{ margin: 20 }}>
                        {this.props.children}
                    </p>     
                    <button id='modalBtn' onClick={() => this.props.hide()}>Back</button>           
                </div>    
            </div>
        );
    }
}

const styles = {
    container: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        textAlign: 'center'
    }, 
    alert: {
        display: 'inline-block',
        backgroundColor: 'white',
        width: '30vw',
        height: 'auto',
        borderRadius: '1vw',
        fontFamily: "'Press Start 2P', cursive",
        fontSize: '1.5vw',
        opacity: 1,
        marginTop: '30vh',
        paddingTop: 15
    }
}