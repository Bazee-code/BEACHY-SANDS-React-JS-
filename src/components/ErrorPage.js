import React from 'react';
import {Link} from 'react-router-dom';

export default function ErrorPage() {
	return (
		<section className="error-section">
		<div className="row">
			<div className="col-md-4"></div>
			<div className="col-md-4">
				<div className="card card-section text-center mt-5">
				<div className="card-body">
					<h4 className="m-2">PAGE NOT FOUND!</h4>
					<h3 className="m-2">ERROR 404</h3>
					<Link to="/">
						<button className="btn btn-secondary m-2">
						GET BACK TO HOME PAGE</button>
					</Link>
				</div>
				</div>
				</div>
			<div className="col-md-4"></div>
		</div>
		</section>	

		)
}