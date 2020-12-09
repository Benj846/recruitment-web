import React  from 'react';
import '../styles/SkillsComponent.css';

function SkillsComponent (props) {

  return (
    <div className="skill-info">
      <div className="career-title">
        <div className="title">
            보유기술
        </div>
        <div className="add-items">
            추가하기+
        </div>
      </div>
      <hr />
      <div>
        <span className="acquisition">보유시간</span>
        <input type="date" className="acquisition-date"/>
        <input type="date" className="acquisition-date"/>
        <input type="number" className=""/>
      </div>
      <div className="wrapper">
        <div className="input-wrapper">
          <span className="acquisition">스킬명</span>
          <input type="" className="input-box"/>
        </div>
        <div>
        <input type="" className="skill-level"/>
        </div>
      </div>
      <div>
        <span className="acquisition">활용영역</span>
        <input type="" className="skill-usage"/>
      </div>
    </div>
  );
}
export default SkillsComponent;
