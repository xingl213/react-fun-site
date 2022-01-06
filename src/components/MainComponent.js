import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Game from './GameComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/game' component={Game} />
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;
