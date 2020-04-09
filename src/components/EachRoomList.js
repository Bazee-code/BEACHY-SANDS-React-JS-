import React from 'react';

// local
import {RoomsContext} from './context/context.js';

class EachRoomList extends React.Component {
	constructor(props){
		super(props);

		
	}
	static contextType = roomsContext; 
	render() {
		const {rooms} = this.context;
		console.log(rooms);
		return (
			<section>
				<div className="card">
					<div className="card-body">
						<h3></h3>
					</div>
				</div>
			</section>
		)
	}
}

export default EachRoomList;