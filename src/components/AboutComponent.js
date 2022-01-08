import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardText, CardTitle, CardSubtitle, CardImg, CardColumns } from 'reactstrap';

class About extends Component {

	render() {
		return(
			<div className="container">
				<div className="row">
	                <Breadcrumb>
	                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
	                    <BreadcrumbItem active>About</BreadcrumbItem>
	                </Breadcrumb>
				</div>
				<CardColumns>
				  <Card>
				    <CardImg
				      alt="Card image cap"
				      src="https://invest.oakville.ca/images/1140-Centennial_Remembrance.jpg"
				      top
				      width="100%"
				    />
				    <CardBody>
				      <CardTitle tag="h5">
				        Oakville OwO
				      </CardTitle>
				      <CardSubtitle
				        className="mb-2 text-muted"
				        tag="h6"
				      >
				        Home sweet home
				      </CardSubtitle>
				      <CardText>
				        I just want to first take a moment to appreciate the fact that I have a cozy place to live during covid-19. Oakville, my new home, is where this application was made.
				      </CardText>
				    </CardBody>
				  </Card>
				  <Card>
				    <CardImg
				      alt="Card image cap"
				      src="https://s3.amazonaws.com/coursera/media/Grid_Coursera_Partners_updated.png"
				      top
				      width="100%"
				    />
				  </Card>
				  <Card>
				    <CardBody>
				      <CardTitle tag="h5">
				        Coursera ( •̀ ω •́ )y
				      </CardTitle>
				      <CardSubtitle
				        className="mb-2 text-muted"
				        tag="h6"
				      >
				        Probably taught me more marketable skills than UofT did so far...
				      </CardSubtitle>
				      <CardText>
				        Next, I want to thank Coursera -- this brilliant educational website -- for teaching me about web development, and for satisfying my never-ending desire to learn.
				      </CardText>
				    </CardBody>
				  </Card>
				  <Card>
				    <CardImg
				      alt="Card image cap"
				      src="https://i.ytimg.com/vi/jYjDCPnxk-U/maxresdefault.jpg"
				      top
				      width="100%"
				    />
				    <CardBody>
				      <CardTitle tag="h5">
				        Have fun （￣︶￣）
				      </CardTitle>
				      <CardSubtitle
				        className="mb-2 text-muted"
				        tag="h6"
				      >
				        ...and practice my new skills
				      </CardSubtitle>
				      <CardText>
				        There you go. I built this single page application using react. I plan to add more components to it, constantly redesign it, and turn it into a place that makes me laugh.
				      </CardText>
				    </CardBody>
				  </Card>
				</CardColumns>				
			</div>
		);		
	}
}

export default About;
