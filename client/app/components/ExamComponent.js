import React  from 'react';
import '../styles/ExamComponent.css';

function ExamComponent (props) {

  return (
    <div className="exam-info">
      <div className="career-title">
        <div className="title">
            공인시험
        </div>
        <div className="add-items">
            추가하기+
        </div>
      </div>
      <hr />
      <div>
        <span className="acquisition">취득년월</span>
        <input type="date" className="acquisition-date"/>
      </div>
      <div className="exam-wrapper">
        <div className="">
          <span className="acquisition">공인시험명</span>
          <input type="" className="input-box"/>
        </div>
        <div>
        <span className="acquisition">급수</span>
        <input type="" className="input-box"/>
        </div>
      </div >
      <div className="exam-wrapper">
        <div>
          <span className="acquisition">기관명</span>
          <input type="" className="input-box"/>
        </div>
        <div>
          <span className="acquisition">공인점수</span>
          <input type="" className="input-box"/>
        </div>
      </div>
    </div>
  );
}
export default ExamComponent;
