import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

class GameDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			game: props.game,
			correctSelect: null
		};
	}

	onItemSelect(choice) {
		if (choice.correct) {
			this.setState({ correctSelect: true });
		} else {
			this.setState({ correctSelect: false });
		}
	}

	render() {
	    const choices = this.state.game.choices.map((choice) => {
	        return (
	            <div className="col-12 col-md-6"  key={choice.id}>
					<Card onClick={ () => this.onItemSelect(choice) }>
		                <CardImg width="100%" src={choice.img} alt={choice.cap} />
		                <CardImgOverlay>
		                    <CardTitle>{choice.cap}</CardTitle>
		                </CardImgOverlay>
					</Card>
	            </div>
	        );
	    });

	    var resultMessage;
	    if (this.state.correctSelect == null) {
	    	resultMessage = "";
	    } else if (this.state.correctSelect) {
	    	resultMessage = "Correct!";
	    } else {
	    	resultMessage = "Wrong! Guess again!";
	    }

		return (
			<div className="container">
				<div className="row">
	                <Breadcrumb>
	                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
	                    <BreadcrumbItem><Link to="/game">Trivia</Link></BreadcrumbItem>
	                    <BreadcrumbItem active>{this.state.game.name}</BreadcrumbItem>
	                </Breadcrumb>
				</div>
				<div>
					<h5>Question: {this.state.game.question} (Click on a picture)</h5>
				</div>
				<div>
					<h5>Result: {resultMessage}</h5>
				</div>
				<div className="row">
					{choices}
				</div>
			</div>
		);
	}
}

export default GameDetail;
