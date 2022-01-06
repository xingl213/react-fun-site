import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Game extends Component {

	render() {
		return(
		<div className="container">
			<div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Game</BreadcrumbItem>
                </Breadcrumb>
			</div>
			<div className="col-12">Game info goes here!</div>
		</div>
		);
	}
}

export default Game;
