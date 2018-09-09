import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AgeIncrement from './component/age_increment'
import ListData from './component/list_data'
import { Container, Row, Col } from "reactstrap";
export  default class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


      <Container>
          <Row>
          <Col xs="6" sm="4">
            <AgeIncrement />
          </Col>
          <Col xs="6" sm="4">
            <ListData/>
          </Col>
          </Row>
        </Container>
      </div>
  }
}

