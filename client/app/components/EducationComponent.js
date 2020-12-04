import React from 'react';
import './EducationComponent.css';

function Education(props) {
  return (
    <div className="education-info">
      <div className="education-title">학력사항</div>
      <hr />
      <div className="final-content">
        <div className="title">최종학력</div>
        <select className="select-education">
          <option selected disabled>
            최종학력을 선택해주세요
          </option>
          <option value="대학교">대학교</option>
        </select>
      </div>
    </div>
  );
}

export default Education;
