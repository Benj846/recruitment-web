import React, { Component } from 'react';
import Basicinfo from './Basicinfo-component';
import '../styles/Resume.css';
import CareerComponent from './CareerComponent';
import Education from './Education-Component';
import DriversComponent from './Drivers-Component';
import ExamComponent from './ExamComponent';
import SkillsComponent from './SkillsComponent';
import PortfComponent from './PortfolioComponent';

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

        <DriversComponent/>

        <ExamComponent/>

        <SkillsComponent/>

        <PortfComponent/>

        <div>
          
        </div>
        {/* add more components here */}
      </main>
    );
  }
}
