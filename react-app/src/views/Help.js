import React from 'react';

export default class Help extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return(
			<div>
				<button onClick={() => this.props.changeView('Menu')}>Back</button>
			</div>
		);
	}
}