import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Card, CardBody, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
          isPunOpen: false
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
                        <NavbarBrand className="mr-auto" href="/"><strong>FUN SITE (●'◡'●)</strong></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="justify-content-center nav-pills nav-justified mt-2" style={{ width: "100%" }}>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'>Home (｡･∀･)ﾉﾞ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/about'>About (⊙_⊙)？</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/game'>Trivia (～￣▽￣)～</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <h4>Pun of the day O(∩_∩)O</h4>
                        </div>
                        <div className="row">
                            <div className="pun col-12 col-md-4">
                              <Button
                                color="primary"
                                onClick={() => {this.setState({isPunOneOpen: !this.state.isPunOneOpen});}}
                                style={{
                                  marginBottom: '1rem'
                                }}
                              >
                                Why did Adele cross the road?
                              </Button>
                              <Collapse isOpen={this.state.isPunOneOpen}>
                                <Card>
                                  <CardBody>
                                    To say hello from the other side.
                                  </CardBody>
                                </Card>
                              </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default Header;
