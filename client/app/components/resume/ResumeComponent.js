import React, { useState } from 'react';
import BasicInfoComponent from './BasicInfoComponent';
import CareerComponent from './CareerComponent';
import EducationComponent from './EducationComponent';
import DriverComponent from './DriverComponent';
import ExamComponent from './ExamComponent';
import SkillComponent from './SkillComponent';
import PortfolioComponent from './PortfolioComponent';
import SelfIntroductionComponent from './SelfIntroduction';
import '../../styles/Resume';

function ResumeComponent({
  uid,
  resumeInfo,
  onDefaultSet,
  onClick,
  onChange,
  onClickCheckBox,
  onSelectJobs,
  onRemoveJobs
}) {
  return (
    <article id="resume-content">
      <BasicInfoComponent
        uid={uid}
        resumeInfo={resumeInfo}
        onDefaultSet={onDefaultSet}
        onChange={onChange}
        onClick={onClick}
      />
      <EducationComponent
        resumeInfo={resumeInfo}
        onChange={onChange}
        onClick={onClick}
      />
      <CareerComponent
        resumeInfo={resumeInfo}
        onDefaultSet={onDefaultSet}
        onChange={onChange}
        onClick={onClick}
        onClickCheckBox={onClickCheckBox}
        onSelectJobs={onSelectJobs}
        onRemoveJobs={onRemoveJobs}
      />
      <DriverComponent
        resumeInfo={resumeInfo}
        onChange={onChange}
        onClick={onClick}
      />
      <ExamComponent
        resumeInfo={resumeInfo}
        onChange={onChange}
        onClick={onClick}
      />
      <SkillComponent
        resumeInfo={resumeInfo}
        onChange={onChange}
        onClick={onClick}
      />
      <PortfolioComponent
        resumeInfo={resumeInfo}
        onChange={onChange}
        onClick={onClick}
      />
      <SelfIntroductionComponent
        resumeInfo={resumeInfo}
        onChange={onChange}
        onClick={onClick}
      />
    </article>
  );
}
export default ResumeComponent;
