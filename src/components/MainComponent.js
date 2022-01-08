import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Game from './GameComponent';
import GameDetail from './GameDetailComponent';
import { GAMES } from '../shared/games';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			games: GAMES
		};
	}

	render() {
	    const GameWithId = ({match}) => {
	      return(
	          <GameDetail game={this.state.games.filter((game) => game.id === parseInt(match.params.gameId,10))[0]} />
	      );
	    };

		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/game' component={() => <Game games={this.state.games} />} />
					<Route path='/game/:gameId' component={GameWithId} />
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;
