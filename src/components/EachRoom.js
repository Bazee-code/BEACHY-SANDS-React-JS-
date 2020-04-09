import React from 'react';
// import styled from 'styled-components';
import {FaAngleDoubleDown} from 'react-icons/fa';
// local
import {RoomsContext} from './context/context.js';
import items from './../data.js';
import ErrorPage from './ErrorPage.js';


class EachRoom extends React.Component {
	constructor(props){
		super(props);
		// console.log(this.props);
		this.state ={
			slug : this.props.match.params.slug
		}
	};

	static contextType = RoomsContext;

	render() {
		const {getRoom} = this.context;
		
		// use the slug to get specific room
		let room = getRoom(this.state.slug);
		console.log(room);
		if(!room){
			return(
			<ErrorPage />
			)
		}	
			// destructure our room properties
			const {price,name,type,size,capacity,pets,breakfast,
				description,extras,images,slug} = room;
			// console.log(description);
			// let image =images.map(image=>image);
			console.log(breakfast);
			return (
			<React.Fragment>
				<section className="eachroom-section">
						<div className="row"> 
							<div className="col-md-4"></div>
							<div className="col-md-4">
								<div className="card text-center card-section mt-5">
									<div className="card-body">
										<h3 className="text-capitalize m-2">{slug}</h3>
										<p>_____</p>
										<h4><small>Find out more</small></h4>
										<FaAngleDoubleDown />
									</div>
								</div>
							</div>
							<div className="col-md-4"></div>
						</div>
				</section>
				<section className="mt-3 text-center">
					<div id="accordion">
						<button className="btn btn-dark" data-toggle="collapse" 
						data-target="#collapseOne">
							VIEW ROOM IMAGES
						</button>
						<div className="collapse" id="collapseOne" data-parent="#accordion">
							<div className="row">
							{images.map(image=>{
								return(
							<div className="col-md-4">
								<div className="card featured-section m-2">
									<div className="card-body">
										<img src={image} className="img-fluid"/>
									</div>
							</div>
							</div>
							)
					})}
					</div>
						</div>
					</div>
					
				</section>
				<section>
		     		<div className="row mt-4 text-center">
		     			<div className="col-md-6 ">
		     				<h3><u>Details</u></h3>
		        		<p>{description}</p>
		        		<h4><u>Extras</u></h4>
				     		{extras.map(extra=>{
				     			return <li>{extra}</li>
				     		})}
		     			</div>
		     			<div className="col-md-6 ">
		     				<h4><u>Info</u></h4>
		     				<h5>Price :Ksh {price}</h5>
		     				<h5>Size :{size} m²</h5>
		     				<h5>Capacity :{capacity} people</h5>
		     				{breakfast ? <h5>Breakfast Allowed</h5>:<h5>Breakfast Not Allowed</h5>}
		     				{pets ?<h5>Pets Allowed</h5> : <h5>Pets Not Allowed</h5>}
		     			</div>
		     		</div>
				</section>
			</React.Fragment>
		)
	}
}

export default EachRoom;