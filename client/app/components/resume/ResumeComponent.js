import React from 'react';
import BasicInfoComponent from './BasicInfoComponent';
import CareerComponent from './CareerComponent';
import EducationComponent from './EducationComponent';
import DriverComponent from './DriverComponent';
import ExamComponent from './ExamComponent';
import SkillComponent from './SkillComponent';
import PortfolioComponent from './PortfolioComponent';
import SelfIntroductionComponent from './SelfIntroduction';
import '../../styles/Resume';

function ResumeComponent() {
  return (
    <article id="resume-content">
      <BasicInfoComponent />
      <EducationComponent />
      <CareerComponent />
      <DriverComponent />
      <ExamComponent />
      <SkillComponent />
      <PortfolioComponent />
      <SelfIntroductionComponent />
    </article>
  );
}
export default ResumeComponent;
