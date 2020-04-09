import React from 'react';
import {Link} from 'react-router-dom';

// local
import FilterSection from './FilterSection.js';
import RoomList from './RoomList.js';

export default function Rooms() {
	return (
		<React.Fragment>
			<section className="rooms-section py-5">
				<div className="row">
					<div className="col-md-4"></div>
					<div className="col-md-4">
						<div className="card card-section text-center">
							<div className="card-body">
								<h3>Our Rooms</h3>
								<p>_______</p>
								<Link to="/">
									<button className="btn btn-secondary">RETURN HOME</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-md-4"></div>
				</div>
			</section>
			<FilterSection />
			<RoomList />
		</React.Fragment>
	)
}