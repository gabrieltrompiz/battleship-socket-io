import React from 'react';

export default class Help extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return(
			<div>
				<div>Battleship (also Battleships or Sea Battle) is a guessing game for two players.
					It is played on ruled grids (paper or board) on which each players fleet of ships (including battleships) are marked.
					The locations of the fleets are concealed from the other player.
					Players alternate turns calling "shots" at the other player's ships,
					and the objective of the game is to destroy the opposing player's fleet. <br></br><br></br>

					Battleship is known worldwide as a pencil and paper game which dates from World War I.
					It was published by various companies as a pad-and-pencil game in the 1930s,
					and was released as a plastic board game by Milton Bradley in 1967.

					<h1>Description</h1>
					The game is played on four grids, two for each player. The grids are typically square – usually 10×10 – and the individual squares in the grid are identified by letter and number.[7] On one grid the player arranges ships and records the shots by the opponent. On the other grid the player records their own shots.

					Before play begins, each player secretly arranges their ships on their primary grid.
					Each ship occupies a number of consecutive squares on the grid, arranged either horizontally or vertically.
					The number of squares for each ship is determined by the type of the ship.
					The ships cannot overlap (i.e., only one ship can occupy any given square in the grid).
					The types and numbers of ships allowed are the same for each player. These may vary depending on the rules.

					<h3>The 1990 Milton Bradley version of the rules specify the following ships:</h3>
					Carrier
					Battleship
					Cruiser
					Submarine
					Destroyer

				</div>
				<button onClick={() => this.props.changeView('Menu')}>Back</button>
			</div>
		);
	}
}
