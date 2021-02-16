import React, { Component } from 'react';
import '../../styles/Resume.css';
import ResumeComponent from './ResumeComponent';
import ResumeFooter from './ResumeFooter';

function Resume() {
  return (
    <section className="resume-body">
      <section className="resume-main">
        <ResumeComponent />
      </section>
      <ResumeFooter />
    </section>
  );
}
export default Resume;
