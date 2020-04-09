import React from 'react';
import {Link} from 'react-router-dom';
import {FaAngleDoubleDown} from 'react-icons/fa';

export default function ExtraInfo() {
	return (
		<div id="accordion">
	  <div className="card text-center">
	    <div className="card-header" id="headingOne">
	      <h5 className="mb-0">
	        <button className="btn btn-dark" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
	          More Info About Room <FaAngleDoubleDown />
	        </button>
	      </h5>
	    </div>

	    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
	      <div className="card-body">
	        
	      </div>
	    </div>
  </div>
  </div>
	)
}