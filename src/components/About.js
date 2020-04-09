import React from 'react';
import {FaAngleDoubleDown} from 'react-icons/fa';
import styled from 'styled-components';

export default function About() {
	return (
		<React.Fragment>
			<section className="about-section">
				<div className="row text-center">
					<div className="col-md-4"></div>
					<div className="col-md-4">
						<div className="card card-section mt-5">
							<div className="card-body">
								<h3>About Creator</h3>
								<p>__________</p>
								<FaAngleDoubleDown />
							</div>
						</div>
					</div>
					<div className="col-md-4"></div>
				</div>
			</section>
			<section className ="py-3 text-center">
				<div className="row">
					<div className="col-md-6">
						<h4><u>Personal Information</u></h4>
						<h5>Name: Eugene Obare </h5>
						<h5>Email : eugeneobare@gmail.com</h5>
						<h5>School : University of Nairobi </h5>
						<h5>Degree : Electrical and Electronic Engineering</h5>
					</div>
					<div className="col-md-6">
						<h4><u>Languages & Frameworks used</u></h4>
						<li>Javascript(ES6)</li>
						<li>React Js</li>
						<li>Redux</li>
						<li>Bootstrap</li>
						<li>Styled Components</li>
					</div>
				</div>
			</section>
		</React.Fragment>
	)
}