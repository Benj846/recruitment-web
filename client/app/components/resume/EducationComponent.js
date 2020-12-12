import React from 'react';
import '../../styles/EducationComponent'

function EducationComponent(props) {
  return (
    <div className="education-info">
      <div className="education-title">학력사항</div>
      <hr className="division-line"/>
      <div className="final-content">
        <div className="title">최종학력</div>
        <select className="select-education">
          <option value={props.value}>최종학력을 선택해주세요</option>
          <option value="대학교">고졸</option>
          <option value="대학교">초대졸</option>
          <option value="대학교">편입</option>
          <option value="대학교">학사</option>
          <option value="대학교">석사</option>
          <option value="대학교">박사</option>          
        </select>
      </div>
      
    </div>
  );
}

function HighSchool() {
  return(
    <>
      <div>고졸</div>
    </>
  );
}
export default EducationComponent;