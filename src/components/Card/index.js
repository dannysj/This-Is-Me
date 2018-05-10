import React,  { Component } from 'react';
import './index.css';

export default class Card extends Component {

	constructor(props) {
		super(props);

		// equivalent to getInitialState() { return {}; }
		this.state = {

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

Card.propTypes = {

}

Card.defaultProps = {

}
