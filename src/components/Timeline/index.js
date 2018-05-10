import React,  { Component } from 'react';
import './index.css';

export default class Timeline extends Component {

	render(){
		return (
      <div className="mentor-container">
          <div className="mentor-inner-container">
          <div className="mentor-profile">
            <img className="mentor-picture" alt="profile pic" src={this.props.profile_pic}/>

          </div>


          <div><strong>{this.props.name}</strong></div>

        </div>
        <div className="connect-circle">
            <div>Connect</div>
          </div>
      </div>

		);
	}

}

Timeline.propTypes = {

}

Timeline.defaultProps = {

}
