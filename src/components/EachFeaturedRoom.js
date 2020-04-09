import React from 'react';
import {Link} from 'react-router-dom';

class EachFeaturedRoom extends React.Component {
	render() {
		const {room:{name,price,images,slug}} = this.props;
		// console.log(images);
		let image = images.map(image=>image);
		// console.log(image);
		// console.log(slug);
		return (
				<div className="col-md-4">
					<div className="card featured-section">
						<div className="card-body">
							<img src={image[0]} className="img-fluid" alt="room"/>
							<p className="text-uppercase mt-2">{name}</p>
							<h4>Ksh{price}</h4>
							<Link to={`/rooms/${slug}`}>
								<button className="btn btn-dark">
									FEATURES
								</button>
							</Link>
						</div>
					</div>
				</div>
		)
	}
}

export default EachFeaturedRoom;