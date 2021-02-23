import React from 'react';
import '../../styles/ResumeFooter';

function ResumeFooter({ onSubmit }) {
  return (
    <footer className="resume-footer">
      <button className="resume-submit" onClick={onSubmit}>
        저장
      </button>
    </footer>
  );
}

export default ResumeFooter;
