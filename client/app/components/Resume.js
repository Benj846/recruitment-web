import React, { Component } from 'react';
import Basicinfo from './Basicinfo-component';
import './Resume.css';
import CareerComponent from './Main/CareerComponent';
export default class Resume extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <main className="main-style">
        <Basicinfo></Basicinfo>
        <CareerComponent></CareerComponent>

        {/* add more components here */}
      </main>
    );
  }
}
