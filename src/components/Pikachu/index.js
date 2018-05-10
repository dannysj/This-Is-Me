import React,  { Component } from 'react';
import './index.css';

export default class Pikachu extends Component {


	render(){
		return (
			<div className="pikachu-wrapper">
				<div className="pikachu">
					<div className="head">
						<div className="ears left brown"><div className="ears-inside yellow"></div></div>
						<div className="ears right brown"><div className="ears-inside yellow"></div></div>

						<div className="face yellow">
							<span className="eye left brown"></span>
							<span className="eye right brown"></span>

							<span className="cachete left"></span>
							<span className="cachete right"></span>

						</div>
					</div>
					<div className= "pokeball">
							<div className= "whitecircle">
								<div className = "greycircle"></div>
						 </div>
					</div>
				</div>
			</div>

		);
	}

}

Pikachu.propTypes = {

}

Pikachu.defaultProps = {

}
