import React from 'react';

// local
import {RoomsConsumer} from './context/context.js';
import AllRooms from './AllRooms.js';
import FilterSection from './FilterSection.js';

class RoomList extends React.Component {
	render() {
		return (
			<RoomsConsumer>
				{(value)=>{
					const {sortedRooms} = value;
					// console.log(rooms);
					if(sortedRooms.length === 0){
						return(
							<section className="text-center text-capitalize">
								<div>
									<h3>Unfortunately no rooms matched your search parameters</h3>
								</div>
							</section>
							)
					}
					else{
						return(
							<React.Fragment>
							<section className="py-5">
								<div className="row">
									{sortedRooms.map(room=>{
										 return (
										 	<AllRooms room={room} key={room.id}/>
										 	)
									})}
								</div>
							</section>
						</React.Fragment>

						)
					}
					
				}}
			</RoomsConsumer>
		)
	}
}

export default RoomList;