import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function Game(props) {
    const games = props.games.map((game) => {
        return (
            <div className="col-12 col-md-4 mt-2"  key={game.id}>
				<Card>
					<Link to={`/game/${game.id}`} >
		                <CardImg width="100%" src={game.img} alt={game.name} />
		                <CardImgOverlay>
		                    <CardTitle className="card-title-highlight">{game.name}</CardTitle>
		                </CardImgOverlay>
					</Link>
				</Card>
            </div>
        );
    });

	return(
		<div className="container">
			<div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Trivia</BreadcrumbItem>
                </Breadcrumb>
			</div>
			<div className="row">
				{games}
			</div>
		</div>
	);
}

export default Game;
