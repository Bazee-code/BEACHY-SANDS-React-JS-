import React from 'react';
import {Link} from 'react-router-dom';
import {FaUmbrellaBeach} from 'react-icons/fa';
import {WiMoonAltFirstQuarter} from 'react-icons/wi';

// local

export default function Navbar({handleDarkMode}) {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-secondary py-4 darkmode">
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
				<Link className="nav-link nav-item" onClick={handleDarkMode}>
					<button className="btn btn-sm btn-dark ml-5">
					<WiMoonAltFirstQuarter /></button>
				</Link>
			</ul>
		</div>
		</nav>
	)
}