import React, { Component } from 'react';
import BasicInfoComponent from './BasicInfoComponent';
import CareerComponent from './CareerComponent';
import EducationComponent from './EducationComponent';
import DriverComponent from './DriverComponent';
import ExamComponent from './ExamComponent';
import SkillComponent from './SkillComponent';
import PortfolioComponent from './PortfolioComponent';
import '../../styles/Resume.css';

export default class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (      
      <main className="career-main">
          <BasicInfoComponent />

          <EducationComponent />

          <CareerComponent />

          <DriverComponent/>

          <ExamComponent/>

          <SkillComponent/>

          <PortfolioComponent/>

        <div>
          
        </div>
        {/* add more components here */}
      </main>
    );
  }
}
