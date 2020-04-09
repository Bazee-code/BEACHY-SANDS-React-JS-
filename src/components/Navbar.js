import React from 'react';
import {Link} from 'react-router-dom';
import {FaUmbrellaBeach} from 'react-icons/fa';

// local

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-secondary py-4">
			<Link className="navbar-brand logo-title" to="/">
			<FaUmbrellaBeach /> BeachySands</Link>

			<button className="navbar-toggler" data-target="#navBarNav"
			data-toggle="collapse">
				<span className="navbar-toggler-icon"></span>
			</button>

		{/*links*/}
		<div className="collapse navbar-collapse" id="navBarNav">
			<ul className="navbar-nav mx-auto">
				<Link to="/" className="nav-link nav-item">Home</Link>
				<Link to="/rooms" className="nav-link nav-item">Rooms</Link>
				<Link to="/about" className="nav-link nav-item">AboutCreator</Link>
			</ul>
		</div>
		</nav>
	)
}