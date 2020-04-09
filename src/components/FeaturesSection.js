import React from 'react';
import {FaBeer,FaCocktail,FaHiking,FaMountain} from 'react-icons/fa';

export default function FeaturesSection() {
	return (
		<section className="features-section bg-secondary py-5 text-center">
			<h3>Services</h3>
			<p>------</p>
			<div className="row mt-3">
				<div className="col-sm-6 col-md-3">
					<p className="text-white"><FaCocktail /></p>
					<h4>Free Cocktails</h4>
					<p>Get any cocktail for free at Happy Hour!</p>
				</div>
				<div className="col-sm-6 col-md-3">
					<p className="text-white"><FaBeer /></p>
					<h4>Tasty Beer</h4>
					<p>Get to enjoy the best beer East Africa has to offer!</p>
				</div>
				<div className="col-sm-6 col-md-3">
					<p className="text-white"><FaHiking /></p>
					<h4>Safari Walks</h4>
					<p>Get to explore the expansive mountain-side!</p>
				</div>
				<div className="col-sm-6 col-md-3">
					<p className="text-white"><FaMountain /></p>
					<h4>Breathtaking Views</h4>
					<p>Wake up to the best views East Africa has to offer!</p>
				</div>
			</div>
		</section>
	)
}