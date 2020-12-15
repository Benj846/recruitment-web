import React, { useState } from 'react';
import '../../styles/EducationComponent'


function EducationComponent(props) {
  
  const [value, setValue] = useState('');
  const [education, setEducation] = useState({});

  const onChange = e => {
    setValue(e.target.value);
  }
  let selected = <div>{value}</div>;
  return (
    <div className="education-info">
      <div className="education-title">학력사항</div>
      <hr className="division-line"/>
      <div className="final-content">
        <div className="title">최종학력</div>
        <select className="select-education" defaultValue="non-value" onChange={onChange}>
          <option value="non-value" disabled="disabled">최종학력을 선택해주세요</option>
          <option value="고졸">고졸</option>
          <option value="초대졸">초대졸</option>
          <option value="편입">편입</option>
          <option value="학사">학사</option>
          <option value="석사">석사</option>
          <option value="박사">박사</option>          
        </select>
      </div>
      <div className="added-education">
        {/* {education} */}
        {selected}
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