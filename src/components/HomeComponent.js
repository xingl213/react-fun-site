import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

class Home extends Component {

	render() {
		return(
			<div className="container mt-2">
				<div className="row">
					<h4>Featured movies and iphones games OwO</h4>
				</div>
				<UncontrolledCarousel
				  items={[
				    {
				      altText: 'Shang-Chi and the Legend of the Ten Rings',
				      caption: '',
				      key: 1,
				      src: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/460/files/2021/09/banner-shang-chi1.jpg'
				    },
				    {
				      altText: 'Subway Surfers',
				      caption: '',
				      key: 2,
				      src: 'https://i.ytimg.com/vi/EvtPlPlvdqE/maxresdefault.jpg'
				    },
				    {
				      altText: 'PUBG Mobile',
				      caption: '',
				      key: 3,
				      src: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/09/08/923766-923012-pubg-new.jpg'
				    }
				  ]}
				 />
			</div>
		);
	}
}

export default Home;
