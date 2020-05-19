import React from 'react';

// local
import {RoomsContext} from './context/context.js';
import EachFeaturedRoom from './EachFeaturedRoom.js'

class FeaturedRooms extends React.Component {
	static contextType = RoomsContext; //access our context
	render() {
		// console.log(RoomsContext);
		const {featuredRooms} = this.context;
		console.log(featuredRooms);
		return (
			<section className="text-center py-5 bg-light darkmode">
				<h3>Featured Rooms</h3>
				<div className="row mt-5">
					{featuredRooms.map(room=>{
					return <EachFeaturedRoom room={room} key={room.id}/>
				})}
				</div>
			</section>	
		)
	}
}

export default FeaturedRooms;