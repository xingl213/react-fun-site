import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

class GameDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			game: props.game,
			correctSelect: null,
			numberOfGuesses: 0
		};
	}

	onItemSelect(choice) {
		if (choice.correct) {
			this.setState({ correctSelect: true });
		} else {
			this.setState({ correctSelect: false });
		}
		this.setState({ numberOfGuesses: this.state.numberOfGuesses + 1 });
	}

	render() {
	    const choices = this.state.game.choices.map((choice) => {
	        return (
	            <div className="col-12 col-md-6 mt-2"  key={choice.id}>
					<Card onClick={ () => this.onItemSelect(choice) }>
		                <CardImg width="100%" src={choice.img} alt={choice.cap} />
		                <CardImgOverlay>
		                    <CardTitle className="card-title-highlight">{choice.cap}</CardTitle>
		                </CardImgOverlay>
					</Card>
	            </div>
	        );
	    });

	    var resultMessage;
	    if (this.state.correctSelect == null) {
	    	resultMessage = "";
	    } else if (this.state.correctSelect) {
	    	resultMessage = "Correct! (Number of guesses: ";
	    	resultMessage = resultMessage.concat(this.state.numberOfGuesses.toString()).concat(")");
	    } else {
	    	resultMessage = "Wrong! Guess again! (Number of guesses: ";
	    	resultMessage = resultMessage.concat(this.state.numberOfGuesses.toString()).concat(")");
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
