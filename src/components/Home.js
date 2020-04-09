import React from 'react';
import {Link} from 'react-router-dom';

// local
import FeaturesSection from './FeaturesSection.js';
import FeaturedRooms from './FeaturedRooms.js';

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
			<section className="py-2 home-section">
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4">
					<div className="card mt-5 text-center card-section 
					bg-secondary text-white">
					<div className="card-body">
						<h2>Luxurious Rooms</h2>
						<h3>________</h3>
						<h3>Deluxe</h3>
						<Link to="/rooms">
							<button className="btn btn-light mt-2">OUR ROOMS</button>
						</Link>
					</div>
				</div>
				</div>
				<div className="col-md-4"></div>
			</div>
			</section>
			<FeaturesSection />
			<FeaturedRooms />
			</React.Fragment>
		)
	}
}

export default Home;