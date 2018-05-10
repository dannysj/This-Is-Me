import React,  { Component } from 'react';
import './index.css';

export default class Picture extends Component {


	constructor(props) {
		super(props);

		// equivalent to getInitialState() { return {}; }
		this.state = {
		}


	}

	render(){
		const { image } = this.props;

		return (
			<div className="image">
				<img src={image} alt="my pic here"/>
			</div>
		);
	}

}

Picture.propTypes = {

}

Picture.defaultProps = {

}
