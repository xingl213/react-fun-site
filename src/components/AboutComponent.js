import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

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
				<div className="col-12">About page goes here!</div>
			</div>
		);		
	}
}

export default About;
