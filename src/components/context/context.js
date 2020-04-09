import React from 'react';

// local
import items from './../../data.js';

// create our context
const RoomsContext = React.createContext();

class RoomsProvider extends React.Component {
	constructor(props){ //called b4 any comps are mounted
		super(props); //calls the parent class of our constructor

		this.state ={
			rooms : [],
			featuredRooms :[],
			sortedRooms : [],
			type : "all",
			price :0,
			capacity : 1,
			breakfast : false,
			pets : false,
			minPrice :0,
			maxPrice : 0
		};
	};

	componentDidMount(){
		// life cycle method called when all comps have been mounted
		// we can set state of our comps here after they've been mounted
		let rooms = this.formatData(items);
		let featuredRooms = rooms.filter(room=>room.featured === true);
		let minPrice = Math.min(...rooms.map(room=>room.price));
		let maxPrice = Math.max(...rooms.map(room=>room.price));
		this.setState({
			rooms : rooms,
			featuredRooms : featuredRooms,
			sortedRooms : rooms,
			minPrice : minPrice,
			maxPrice,
			price : maxPrice
		});
	};

	// from our data.js our data is stored in sep. objs
	// we hence store it in the same obj
	formatData =(items)=>{
		let tempItems = items.map(item=>{
			// set our values
			// console.log(item);
			let id = item.sys.id;
			let images = item.fields.images.map(image=>image.fields.file.url);

			// add everyting to one obj
			let room = {...item.fields,images,id};
			// console.log(room);
			return room;
		})
		return tempItems;
	};

	getRoom = (slug)=>{
		let tempRooms = [...this.state.rooms];

		const room = tempRooms.find(room=>room.slug === slug);

		return room;
	};

	// filter rooms functions
	handleChange =(e)=>{
		// console.log(e.target.name);
		// console.log(e.target.type);
		// console.log(e.target.value);
		const target = e.target;
		// for our checkbox values
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = e.target.name;
		this.setState(()=>{
			return{
				[name]: value
			}
		},()=>{
			this.filterRooms();
		})

	};

	// filterdata
	filterRooms =()=>{
		// we will filter our rooms using price,capacity,breakfast,pets
		let {rooms,capacity,type,price,breakfast,pets} = this.state;

		let tempRooms = [...rooms];

		// type filter
		if(type!=="all"){
			tempRooms = tempRooms.filter(room=>room.type === type);
		}

		// capacity filter
		if(capacity!==1){
			tempRooms = tempRooms.filter(room=>room.capacity <= capacity);
		}
		// price filter
		if(price !== 0){
			tempRooms = tempRooms.filter(room=>room.price <= price);
		}

		// breakfast filter
		if(breakfast){
			tempRooms = tempRooms.filter(room=>room.breakfast === true);
		}

		if(pets){
			tempRooms = tempRooms.filter(room=>room.pets === true);
		}
		this.setState({
			sortedRooms: tempRooms
		})
	};

	render() {
		return (
			<RoomsContext.Provider value={{
				...this.state,
				handleChange : this.handleChange,
				getRoom : this.getRoom
			}}>
				{this.props.children}
			</RoomsContext.Provider>
		)
	}
}

// create our consumer
// the consumer gives us access to all our data inside our provider
const RoomsConsumer = RoomsContext.Consumer;

export {RoomsProvider,RoomsConsumer,RoomsContext} ;
// we are going to be using the context api for state management
// we want to avoid prop drilling
// the context api consists of a provider and consumer