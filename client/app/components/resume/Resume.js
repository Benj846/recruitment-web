import React, { Component } from 'react';
import '../../styles/Resume.css';
import ResumeComponent from './ResumeComponent';

function Resume() {
  return (
    <section className="resume-body">
      <section className="resume-main">
        <ResumeComponent />
      </section>
    </section>
  );
}
export default Resume;
