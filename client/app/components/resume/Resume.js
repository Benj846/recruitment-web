import React, { Component } from 'react';
import BasicInfoComponent from './BasicInfoComponent';
import CareerComponent from './CareerComponent';
import EducationComponent from './EducationComponent';
import DriverComponent from './DriverComponent';
import ExamComponent from './ExamComponent';
import SkillComponent from './SkillComponent';
import PortfolioComponent from './PortfolioComponent';
import '../../styles/Resume.css';
import SelfIntroductionComponent from './SelfIntroduction';

function Resume() {
  return (
    <div className="resume-body">
      <div className="resume-main">
        <BasicInfoComponent />

        <EducationComponent />

        <CareerComponent />

        <DriverComponent />

        <ExamComponent />

        <SkillComponent />

        <PortfolioComponent />

        <SelfIntroductionComponent />
      </div>
    </div>
  );
}
export default Resume;
