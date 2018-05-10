import React,  { Component } from 'react';
import './index.css';
import Pikachu from '../Pikachu/';
import Picture from '../Picture';
import pic1 from '../../assets/photos/pp.jpg';

export default class ProfilePic extends Component {

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
			<div className="pcontent">
				<div className="profile_image">
					<div className="p_image"> <Picture image={pic1}/></div>
					<div className="pikachu">
						<Pikachu />
					</div>
				</div>
			</div>
		);
	}

}

ProfilePic.propTypes = {

}

ProfilePic.defaultProps = {

}
