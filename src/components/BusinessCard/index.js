import React,  { Component } from 'react';
import './index.css';

export default class BusinessCard extends Component {

	constructor(props) {
		super(props);

		// equivalent to getInitialState() { return {}; }

	}

	render(){
		return (
      <div className="mentor-container">
          <div className="inner-container">
          <div className="mentor-profile">
            <img className="mentor-picture" src={this.props.profile_pic}/>

          </div>
          <div className="vertical-divider"></div>

          <div><strong>{this.props.name}</strong></div>

        </div>
        <div className="connect-circle">
            <div>Connect</div>
          </div>
      </div>

		);
	}

}

BusinessCard.propTypes = {

}

BusinessCard.defaultProps = {

}
