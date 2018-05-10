import React,  { Component } from 'react';
import './index.css';
import Picture from '../Picture';


export default class Phone extends Component {

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
			<div className="phone-container">
			  <div className="iphone">
			    <div className="screen"><Picture image={image}/></div>
			    <div className="phone-button"></div>
			    <div className="speaker"></div>
			    <div className="camera"></div>
			  </div>
			</div>

		);
	}

}

Phone.propTypes = {

}

Phone.defaultProps = {

}
