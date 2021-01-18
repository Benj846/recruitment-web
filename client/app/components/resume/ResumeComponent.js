import React from 'react';
import BasicInfoComponent from './BasicInfoComponent';
import CareerComponent from './CareerComponent';
import EducationComponent from './EducationComponent';
import DriverComponent from './DriverComponent';
import ExamComponent from './ExamComponent';
import SkillComponent from './SkillComponent';
import PortfolioComponent from './PortfolioComponent';
import SelfIntroductionComponent from './SelfIntroduction';

function ResumeComponent() {
  return (
    <>
      <BasicInfoComponent />
      <EducationComponent />
      <CareerComponent />
      <DriverComponent />
      <ExamComponent />
      <SkillComponent />
      <PortfolioComponent />
      <SelfIntroductionComponent />
    </>
  );
}
export default ResumeComponent;
