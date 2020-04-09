import React from 'react';
import {Link} from 'react-router-dom';

const AllRooms =({room}) =>{
	// console.log(room);
	// get image from images array
	let image = room.images.map(image=>image);
	// console.log(image);
	return (
		<div className="col-md-4">
			<div className="card text-center m-2 featured-section">
				<div className="card-body">
					<img src={image[0]} className="img-fluid" alt="room"/>
					<h4>Ksh{room.price}</h4>
					<p className="text-uppercase"><b>{room.name}</b></p>
					<Link to={`/rooms/${room.slug}`}>
						<button className="btn btn-dark">
							FEATURES
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default AllRooms;