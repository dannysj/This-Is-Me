import React,  { Component } from 'react';
import './index.css';

export default class Arrow extends Component {

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
