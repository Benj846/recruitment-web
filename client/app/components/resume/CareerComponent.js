import React, { useState, useRef } from 'react';
import Select from 'react-select';
import MultiLevelSelect from 'react-multi-level-selector';
import '../../styles/CareerComponent';

function CareerComponent(props) {
  const [ids, setIds] = useState([]);
  const refId = useRef(0);
  const onCreate = () => {
    const id = refId.current;
    setIds(ids.concat(id));
    refId.current += 1;
  };

  const onRemove = (selectedId) => {
    setIds(ids.filter((id) => id !== selectedId));
  };

  return (
    <div id="career-info">
      <div className="title-container">
        <div className="title">경력사항</div>
        <div className="add-items" onClick={onCreate}>
          추가하기+
        </div>
      </div>
      <hr className="division-line" />
      <CareerListComponent ids={ids} onRemove={onRemove} />
    </div>
  );
}

function CareerListComponent({ ids, onRemove }) {
  const options = [
    {
      value: '1',
      label: '1',
      options: [
        {
          value: '2',
          label: '2',
          options: [
            { value: '3', label: '3' },
            { value: '3', label: '3' }
          ]
        },
        {
          value: '2',
          label: '2',
          options: [
            { value: '3', label: '3' },
            { value: '3', label: '3' }
          ]
        },
        {
          value: '2',
          label: '2',
          options: [
            { value: '3', label: '3' },
            { value: '3', label: '3' }
          ]
        }
      ]
    },
    {
      value: '1',
      label: '1',
      options: [
        { value: '2', label: '2' },
        { value: '2', label: '2' },
        { value: '2', label: '2' }
      ]
    }
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
    { value: 'silver', label: 'Silver', color: '#666666' }
  ];

  const [selectJob, setSelectJob] = useState(false);
  const toggleSelectJob = () => {
    setSelectJob(!selectJob);
  };

  const [levelOne, setLevelOne] = useState([
    {
      id: 1,
      title: '경영/사무'
    },
    {
      id: 2,
      title: '마케팅/광고/무역/구매/유통'
    },
    {
      id: 3,
      title: '영업/금융/고객'
    },
    {
      id: 4,
      title: '생산/제조/품질'
    },
    {
      id: 5,
      title: '연구개발/설계'
    },
    {
      id: 6,
      title: '건설'
    },
    {
      id: 7,
      title: '산업안전/설치/서비스'
    },
    {
      id: 8,
      title: '산업안전/설치/서비스'
    },
    {
      id: 9,
      title: '산업안전/설치/서비스'
    },
    {
      id: 10,
      title: '산업안전/설치/서비스'
    },
    {
      id: 11,
      title: '산업안전/설치/서비스'
    },
    {
      id: 12,
      title: '산업안전/설치/서비스'
    },
    {
      id: 13,
      title: '산업안전/설치/서비스'
    },
    {
      id: 13,
      title: '산업안전/설치/서비스'
    }
  ]);

  return (
    <>
      {ids.map((id) => (
        <div key={id} className="body-detail">
          <div className="company-input-close">
            <div>
              <span className="company-name">회사명</span>
              <input className="input-style"></input>
            </div>
            <div className="close-info" onClick={() => onRemove(id)}>
              X
            </div>
          </div>
          {/* 고용형태 */}
          <div className="employ-type">
            <div className="employ-type-style">고용형태</div>
            <>
              <Select
                className="basic-single"
                classNamePrefix="select"
                name="color"
                options={colourOptions}
              />
            </>
            <div className="employ-type-style margin-style">최종직위</div>
            <input className="input-style"></input>
          </div>
          {/* 근무기간 */}
          <div className="employ-type">
            <div className="employ-type-style">근무기간</div>
            <input type="month" className="employ-period zero-outline"></input>
            <input type="month" className="employ-period zero-outline"></input>
            <input
              className="employ-period-input zero-outline"
              disabled={true}
            ></input>
            <div className="present">
              <input type="radio"></input>
              <span>재직 중</span>
            </div>
          </div>
          {/* 직무명 */}
          <div className="job-container">
            <div className="job-content">
              <span className="job-title">직무명</span>
              <button className="add-jobs" onClick={toggleSelectJob}>
                직무 추가하기
              </button>
              {/* <MultiLevelSelect options={options} /> */}
              {selectJob ? (
                <div className="selected-job-container">
                  <div className="level-columns">
                    <div className="level-one">
                      {levelOne.map((item) => (
                        <div id={item.id}>{item.title}</div>
                      ))}
                    </div>
                    <div className="level-two"></div>
                    <div className="level-three"></div>
                    <div className="level-four"></div>
                  </div>
                  <div className="selected-items-container">
                    <div className="selected-items-content"></div>
                    <button className="select-completed-btn">선택완료</button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function CareerDetailComponent({ id, onRemove }) {
  const options = [
    {
      value: '1',
      label: '1',
      options: [
        {
          value: '2',
          label: '2',
          options: [
            { value: '3', label: '3' },
            { value: '3', label: '3' }
          ]
        },
        {
          value: '2',
          label: '2',
          options: [
            { value: '3', label: '3' },
            { value: '3', label: '3' }
          ]
        },
        {
          value: '2',
          label: '2',
          options: [
            { value: '3', label: '3' },
            { value: '3', label: '3' }
          ]
        }
      ]
    },
    {
      value: '1',
      label: '1',
      options: [
        { value: '2', label: '2' },
        { value: '2', label: '2' },
        { value: '2', label: '2' }
      ]
    }
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
    { value: 'silver', label: 'Silver', color: '#666666' }
  ];
  // 참고
  // https://www.npmjs.com/package/react-multi-level-selector

  return (
    <div className="body-detail">
      <div className="company-input-close">
        <div>
          <span className="company-name">회사명</span>
          <input className="input-style"></input>
        </div>
        <div className="close-info" onClick={() => onRemove(id)}>
          X
        </div>
      </div>
      {/* 고용형태 */}
      <div className="employ-type">
        <div className="employ-type-style">고용형태</div>
        <>
          <Select
            className="basic-single"
            classNamePrefix="select"
            name="color"
            options={colourOptions}
          />
        </>
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
          <MultiLevelSelect options={options} />
        </div>
      </div>
    </div>
  );
}
export default CareerComponent;
