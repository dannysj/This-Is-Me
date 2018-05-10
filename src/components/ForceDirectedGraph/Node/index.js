import React,  { Component } from 'react';
import './index.css';

export default class Node extends Component {

	constructor(props) {
		super(props);

		// equivalent to getInitialState() { return {}; }
		this.state = {
      color: this.props.color || "#d3d",
      cx

		}


	}

	render(){
		return (
			<div className={ this.props.className + " card-container" }>
				<div className="inner-container">
        {this.props.children}
				</div>
			</div>

		);
	}

}

Node.propTypes = {

}

Node.defaultProps = {

}
