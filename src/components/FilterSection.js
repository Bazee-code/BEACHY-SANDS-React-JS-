import React from 'react';

import {RoomsContext} from './context/context.js';

class FilterSection extends React.Component {
	static contextType = RoomsContext;

	render() {
		let {handleChange,minPrice,maxPrice,pets,price,
			breakfast,type,capacity,rooms} = this.context;

		// let {rooms} = this.props;

		// we want to prevent repeated options from our drop-down
		const getUnique =(items,value)=>{
			return [...new Set(items.map(item=>item[value]))]
			// a set only stores unique values
		};

		//unique types
		let types = getUnique(rooms,'type');
		//add all the types in one array
		types = ['all',...types]; //our dropdown will start with 'all'
		types = types.map((item,index)=>{
			return <option value={item} key={index}>{item}</option>
		});

		// capacity filter
		let people = getUnique(rooms,'capacity');
		people = people.map((item,index)=>{
			return <option value={item} key={index}>{item}</option>
		});

		// price filter
		let prices = getUnique(rooms,'price');
		prices = prices.map((item,index)=>{
			return <option value={item} key={index}>{item}</option>
		})

		return (
			<section className="filter-section text-center darkmode">
			<h4 className="mt-4">Choose a suitable room below</h4>
			<div className="row mt-3">
				<div className="col-md-3">
					<form>
					{/*using type of room*/}
					<div className = "form-group">
						<label htmlFor="type">Room Type</label>
						<select id="type" value={type} 
						onChange={handleChange} name="type" 
						className="form-control">
							{types}
						</select>
					</div>
					{/*end of type*/}
					</form>
				</div>
				<div className="col-md-3">
					<form>
						{/*using capacity*/}
						<div>
							<label htmlFor="capacity">Number of people</label>
							<select name="capacity" id="capacity" value={capacity}
							onChange={handleChange} className="form-control">
								{people}
							</select>
						</div>
						{/*end of capacity*/}
					</form>
				</div>
				<div className="col-md-3">
					{/*using price*/}
					<form>
						<div>
							<label htmlFor="price">Price:${price}</label>
							<input type="range" id="price" value={price} 
							min = {minPrice} max={maxPrice} className="form-control"
							name="price" onChange={handleChange}/>
						</div>
					</form>
					{/*end of price*/}
				</div>
				<div className="col-md-3">
					{/*using breakfast and pets*/}
					<form>
					<div>
						<label htmlFor="breakfast" className="m-3">Breakfast</label>
						<input type="checkbox" checked={breakfast} name="breakfast"
						 id="breakfast" onChange={handleChange}/>
					</div>
					<div>
						 <label htmlFor="pets" className="m-3">Pets</label>
						<input type="checkbox" checked={pets} name="pets"
						 id="pets" onChange={handleChange}/>
					</div>
					</form>
				</div>
			</div>
			</section>
		)
	}
}

export default FilterSection;