import React, { Component } from 'react';
import './App.css';
import { Container , Icon } from 'semantic-ui-react';
import Card from './components/Card';
import Header from './components/Header';
import BusinessCard from './components/BusinessCard';
import Arrow from './components/Arrow';
import Timeline from './components/Timeline';
import './Semantic/semantic.min.css';
import pic1 from './assets/photos/pp.jpg';
import bucky from './assets/photos/bucky.gif';
import s1 from './assets/photos/1.jpg';
import s2 from './assets/photos/2.gif';
import s3 from './assets/photos/3.png';
import s4 from './assets/photos/4.png';
import projects from './assets/projects.json';
import links from './assets/links.json';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui container ui-container">
        <Header className="header-container"/>
        <br/>
        <Arrow/>
        <br/>
        <Card className="card">
            <div className="top-header-card">
              <img src={pic1} alt="profile pic" />
              <Icon name='like' size="big" color='red' />
              <div className=" bucky">
                <img src={bucky} alt="bucky gif" />
              </div>
            </div>
            <div className="first-content">
            <p>Hi.</p>
            <p>{"I'm Danny."}</p>
            <p>{"A UW-Madison Computer Science nerd."}</p>
            <p>{"A 97s that is fighting his way to success from Malaysia."}</p>
            <p>{"Fun fact about me: I dream big!"}</p>
            </div>
        </Card>
        <br/>
        <Card className="card">
          <div className="card-title">Journey otw to success</div>
          <Timeline projects={projects.projects} pics={[s1,s3,s4,s2]} />
        </Card>
        <br/>
        <BusinessCard profile_pic={pic1} links={links.links} name={"Danny Chew"} />

        <footer className="main-footer">
          <Container>
            <p>Created by Danny Chew with <Icon name='like' color='red' />and <Icon name='coffee' /> <Icon name='copyright' />{(new Date().getFullYear())}</p>
          </Container>
        </footer>
        </div>

      </div>
    );
  }
}

export default App;
