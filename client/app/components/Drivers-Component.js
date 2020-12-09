import React  from 'react';
import '../styles/DriversComponent.css';

function DriversComponent (props) {

  return (
    <div className="exam-info">
      <div className="career-title">
        <div className="title">
            자격면허
        </div>
        <div className="add-items">
            추가하기+
        </div>
      </div>
      <hr />
      <div>
        <span className="acquisition">취득년월 </span>
        <input type="date" className="acquisition-date"/>
      </div>
      <div className="wrapper">
        <div className="input-wrapper">
          <span className="acquisition">자격증명</span>
          <input type="" className="input-box"/>
        </div>
        <div>
        <span className="acquisition">급수</span>
        <input type="" className="input-box"/>
        </div>
      </div>
      <div>
        <span className="acquisition">기관명</span>
        <input type="" className="input-box"/>
      </div>
    </div>
  );
}
export default DriversComponent;
