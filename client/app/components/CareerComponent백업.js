import React, { Fragment } from 'react';
import Select from 'react-select';
//import '../styles/CareerComponent.css';
import MultiLevelSelect from 'react-multi-level-selector';
function CareerComponent(props) {
  const options = [
    { value: '1', label: '1',
      options: [
        { value: '2', label: '2',
          options: [
            { value: '3', label: '3' },
            { value: '3', label: '3'},
          ],
        },
        { value: '2', label: '2',
          options: [
            { value: '3', label: '3' },
            { value: '3', label: '3' },
          ],
        },
        { value: '2', label: '2',
          options: [
            { value: '3', label: '3' },
            { value: '3', label: '3' },
          ],
        },
      ],
    },
    { value: '1', label: '1',
      options: [
        { value: '2', label: '2' },
        { value: '2', label: '2' },
        { value: '2', label: '2' },
      ],
    },
  ];
  const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];
  // 참고
  // https://www.npmjs.com/package/react-multi-level-selector

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
        {/* <select className="employ-select">
          <option value="정규직">정규직</option>
          <option value="비정규직">비정규직</option>
        </select> */}
        <Fragment>
        <Select
          className="basic-single"
          classNamePrefix="select"
          name="color"
          options={colourOptions}
        />
        </Fragment>
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
            <MultiLevelSelect
              options={options}
            />
        </div>
      </div>
    </div>
  );
}
export default CareerComponent;
