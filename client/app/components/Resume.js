import React, { Component } from 'react';
import Basicinfo from './Basicinfo-component';
import '../styles/Resume.css';
import CareerComponent from './Main/CareerComponent';
import Education from './EducationComponent';
export default class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="main-style">
        <Basicinfo></Basicinfo>
        <Education></Education>
        <CareerComponent></CareerComponent>

        {/* add more components here */}
      </main>
    );
  }
}
