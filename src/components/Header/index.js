import React,  { Component } from 'react';
import './index.css';
import ProfilePic from '../ProfilePic';
import Typewriter from '../Typewriter';
import { Icon } from 'semantic-ui-react';
export default class Header extends Component {

	constructor(props) {
		super(props);

		// equivalent to getInitialState() { return {}; }
		this.state = {

		}

	}


	render(){

		return (
			<div className={this.props.className + " constraint-header"}>
				<ProfilePic className="profile-pic"/>
				<br />
				<div className="header-text">
				<p>This is Danny Chew.</p>
				<p>{"97s "}<Icon name='user' color='blue' /> {" | M'sia"} </p>
				<div className="inline-effect">
				<div style={{marginRight:"5px"}}>{"A"} </div>
				<Typewriter className="type-height" words={["Computer Science", "Startup", "Photography","Videography"]}/>
				{" enthusiast"}
				</div>
				</div>
        {this.props.children}
			</div>

		);
	}

}

Header.propTypes = {

}

Header.defaultProps = {

}
