import React,  { Component } from 'react';
import './index.css';
import Phone from '../Phone';
import {Icon} from 'semantic-ui-react';


export default class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pics: this.props.pics,
      length: this.props.pics.length,
      texts: this.props.projects,
    }
  }

	render(){
    let length = this.state.length;
		return (
      <ul className="timeline">
        {
          this.state.pics.map((el, index)=> (
            <li key={index} className="timeline-item ">
              <div className={"timeline-marker " + ((index == (length-1)) ? "period" : "")}></div>
              <div className="timeline-desc">
                <div className="title">{this.state.texts[index].title}
                <a href={this.state.texts[index].link}><Icon name='github' /> </a>
                </div>
                <div className="description">{this.state.texts[index].text}</div>
              </div>
              <div className="timeline-info">
                <Phone image={el}/>
              </div>
            </li>
          ))
        }
      </ul>

		);
	}

}

Timeline.propTypes = {

}

Timeline.defaultProps = {

}
