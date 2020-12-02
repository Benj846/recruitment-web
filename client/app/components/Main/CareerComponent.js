import React, { Component } from 'react';
import './career.css';

function CareerComponent(props) {
  return (
    <div className="career-info">
      <div className="career-title">
        <div className="title">경력사항</div>
        <div className="add-items">추가하기+</div>
      </div>
      <hr />
      {/* 회사명 */}
      <div className="company-input-close">
        <div>
          <span className="company-name">회사명</span>
          <input className="input-style"></input>
        </div>
        <div className="close-career-info">X</div>
      </div>
      {/* 고용형태 */}
      <div className="employ-type">
        <div className="employ-type-style">고용형태</div>
        <select className="employ-select">
          <option value="정규직">정규직</option>
          <option value="비정규직">비정규직</option>
        </select>
        <div className="employ-type-style margin-style">최종직위</div>
        <input className="input-style"></input>
      </div>
      {/* 근무기간 */}
      <div className="employ-type">
        <div className="employ-type-style">근무기간</div>
        <input type="date" className="employ-period zero-outline"></input>
        <input type="date" className="employ-period zero-outline"></input>
        <input className="employ-period-input zero-outline"></input>
        <div className="present">
          <input type="radio"></input>
          <span>재직 중</span>
        </div>
      </div>
      {/* 직무명 */}
      <div className="job-container">
        <div className="job-content">
          <span className="job-title">직무명</span>
          <div className="job">
            <div>+직무 추가하기</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CareerComponent;
