import React,  { Component } from 'react';
import './index.css';

export default class Picture extends Component {

	componentWillReceiveProps(nextProps) {
			// update prop cycle
	}

	shouldComponentUpdate(nextProps, nextState) {
		// default to true, but can overwrite
	}

	componentWillUpdate(nextProps, nextState) {
		//refresh logo activated
		//then re-render contents
	}

	componentDidUpdate(prevProps, prevState) {

	}


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
				<img src={image} alt="image"/>
			</div>
		);
	}

}

Picture.propTypes = {

}

Picture.defaultProps = {

}
