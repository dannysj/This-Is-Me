import React,  { Component } from 'react';
import './index.css';

export default class Arrow extends Component {

	constructor(props) {
		super(props);

		// equivalent to getInitialState() { return {}; }
		this.state = {

		}


	}

	render(){
		return (
			<div className="arrowbox">
				<div className="bounce">
				  <div className= "arrow ">
				  </div>
				</div>
			</div>
		);
	}

}

Arrow.propTypes = {

}

Arrow.defaultProps = {

}
