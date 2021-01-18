import React, { Component } from 'react';
import '../../styles/Resume.css';
import ResumeComponent from './ResumeComponent';

function Resume() {
  return (
    <div className="resume-body">
      <div className="resume-main">
        <ResumeComponent />
      </div>
    </div>
  );
}
export default Resume;
