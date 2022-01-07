import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

	render() {
		return(
			<div className="footer mt-4">
				<div className="container">
                    <ul className="list-unstyled">
                        <li className="footer-list-item"><Link to='/home'>Home (｡･∀･)ﾉﾞ</Link></li>
                        <li className="footer-list-item"><Link to='/about'>About (⊙_⊙)？</Link></li>
                        <li className="footer-list-item"><Link to='/game'>Game (～￣▽￣)～</Link></li>
                    </ul>
				</div>
				<div className="container copyright">© Copyright 2022 Xing Ling</div>
			</div>
		);
	}
}

export default Footer;
