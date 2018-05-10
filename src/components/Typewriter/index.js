import React,  { Component } from 'react';
import './index.css';

export default class Typewriter extends Component {

	constructor(props) {
		super(props);
    this.state = {
      words: this.props.words,
      currentText: "",
      period: this.props.period || 2000,
      isDeleting: false,
      loopNum: 0,
    }

    this.tick = this.tick.bind(this);

	}

  componentDidMount(prevProps, prevState) {
    this.tick();
  }

  tick() {
    let curState = this.state;

    var i = curState.loopNum % curState.words.length;
    var fullTxt = curState.words[i];

    if (curState.isDeleting) {
    curState.currentText = fullTxt.substring(0, curState.currentText.length - 1);
    } else {
    curState.currentText = fullTxt.substring(0, curState.currentText.length + 1);
    }


    var that = this;
    var delta = 200 - Math.random() * 100;

    if (curState.isDeleting) { delta /= 2; }

    if (!curState.isDeleting && curState.currentText === fullTxt) {
      delta = curState.period;
      curState.isDeleting = true;
    }

    else if (curState.isDeleting && curState.currentText === '') {
      curState.isDeleting = false;
      curState.loopNum += 1;
      if (curState.loopNum >= curState.words.length) {
        curState.loopNum = 0;
      }
      delta = 500;
    }

    this.setState(curState);
    setTimeout(function() {
    that.tick();
    }, delta);
  };

	render(){
		return (
			<div className={ this.props.className + " type-header" }>
				<div className="word-container">
        {this.state.currentText}
				</div>
			</div>

		);
	}

}

Typewriter.propTypes = {

}

Typewriter.defaultProps = {

}
