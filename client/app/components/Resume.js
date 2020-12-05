import React, { Component } from 'react';
import Basicinfo from './Basicinfo-component';
import '../styles/Resume.css';
import CareerComponent from './Career-Component';
import Education from './Education-Component';
export default class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="main-style">
        <Basicinfo />
        <Education />
        <CareerComponent />

        {/* add more components here */}
      </main>
    );
  }
}
