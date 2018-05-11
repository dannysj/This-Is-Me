import React,  { Component } from 'react';
import './index.css';
import Pikachu from '../Pikachu/';
import Picture from '../Picture';
import pic1 from '../../assets/photos/pp.jpg';
import FDG from '../ForceDirectedGraph';
import skillData from '../../assets/skill.json';

export default class ProfilePic extends Component {

	constructor(props) {
		super(props);

		// equivalent to getInitialState() { return {}; }
		this.state = {

		}


	}

	render(){
		return (
			<div className={this.props.className}>

				<div className="profile_image">
					<div className="p_image"> <Picture image={pic1}/></div>
					<div className="pikachu">
						<Pikachu />
					</div>
					<FDG className="skillset" data={skillData} />
				</div>
			</div>
		);
	}

}

ProfilePic.propTypes = {

}

ProfilePic.defaultProps = {

}
