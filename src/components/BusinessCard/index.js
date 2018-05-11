import React,  { Component } from 'react';
import './index.css';
import { Icon } from 'semantic-ui-react';
export default class BusinessCard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			links: this.props.links,
			classes: ["bluei", "greeni", "redi"]
		}
	}

	render(){
		return (
      <div className="mentor-container">
          <div className="mentor-inner-container">
          <div className="mentor-profile">
            <img className="mentor-picture" alt="profile pic" src={this.props.profile_pic}/>

          </div>

					< br />

          <div className="detail-container">
					<strong>{this.props.name}</strong>
						<div className="links-container">
						{
							this.state.links.map((el,index) => (
								<a href={el.link}><div className="circle-icon">
										<Icon className={this.state.classes[index]} circular={true} name={el.name} />
									</div>
								</a>
							))
						}
						</div>
					</div>

        </div>
        <a href="mailto:schew2@wisc.edu?subject=Hello There"><div className="connect-circle">
            <div>Connect</div>
          </div>
					</a>
      </div>

		);
	}

}

BusinessCard.propTypes = {

}

BusinessCard.defaultProps = {

}
