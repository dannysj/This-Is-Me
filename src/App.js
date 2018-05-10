import React, { Component } from 'react';
import './App.css';
import { Container , Icon } from 'semantic-ui-react';
import Card from './components/Card';
import Header from './components/Header';
import BusinessCard from './components/BusinessCard';
import Arrow from './components/Arrow';
import './Semantic/semantic.min.css';
import pic1 from './assets/photos/pp.jpg';
import bucky from './assets/photos/bucky.gif';
import FDG from './components/ForceDirectedGraph';
import skillData from './assets/skill.json';

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
              To get started, edit <code>src/App.js</code> and save to reload.
        </Card>
        <br/>
        <Card className="card">
            <FDG data={skillData} />
        </Card>
        <br/>
        <BusinessCard profile_pic={pic1}  name={"Danny Chew"} />

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
