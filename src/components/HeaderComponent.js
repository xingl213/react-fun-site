import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import simpsons from './assets/images/the-simpsons.jpg';

class Header extends Component {

    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

	  toggleNav() {
	    this.setState({
	      isNavOpen: !this.state.isNavOpen
	    });
	  }

	render() {
		return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src={simpsons} height="30" width="41" alt='the simpsons' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/about'>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/game'>Game</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Jumbotron goes here!</h1>
                            <p>Jumbotron contents go here!</p>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default Header;
