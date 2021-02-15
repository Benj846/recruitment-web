import React, { useState, useRef } from 'react';
import Select from 'react-select';
import MultiLevelSelect from 'react-multi-level-selector';
import icon_arrow_down from './logo_and_images/icon_arrow_down_40px.png';
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
  const customStyles = {
    container: (provided) => ({
      ...provided,
      font: `normal normal 500 13px/16px 'Noto Sans KR', sans-serif`,
      cursor: 'pointer'
    }),
    control: (provided, state) => ({
      outline: 0,
      border: `1px solid ${state.isFocused ? '#009999' : '#ddd'}`,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      background: `url(${icon_arrow_down}) no-repeat 100% center`
    }),
    placeholder: () => ({
      color: '#666'
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: 16
    }),
    dropdownIndicator: () => ({
      display: 'none'
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0
    }),
    menu: (provided) => ({
      ...provided,
      padding: 0,
      margin: 0,
      borderRadius: 0,
      border: '1px solid #ddd',
      boxShadow: 'none'
    }),
    option: (provided, state) => ({
      ...provided,
      background: '#fff',
      color: state.isSelected ? '#009999' : '#666',
      padding: '12px 16px'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    }
  };

  const [isSelectJob, setIsSelectJob] = useState(false);
  const toggleSelectJob = () => {
    const clicked = !isSelectJob;
    setIsSelectJob(clicked);
    if (clicked === false) {
      setIsLevelOneClicked(false);
      setIsLevelTwoClicked(false);
      setPrintedJob([]);
      setLevelThree(
        levelThree.map((job) =>
          job.clicked === true ? { ...job, clicked: false } : job
        )
      );
    }
  };

  const [isSelectDetailJob, setIsSelectDetailJob] = useState(false);
  const completeJobSelection = () => {
    if (printedJob.length === 0) {
      alert('선택된 직무가 없습니다.');
      return;
    }
    let clicked = !isSelectJob;
    setIsSelectJob(clicked);
    if (clicked === false) {
      setIsLevelOneClicked(false);
      setIsLevelTwoClicked(false);
    }
    clicked = !isSelectDetailJob;
    setIsSelectDetailJob(clicked);
  };

  const toggleLevelOne = () => {
    //setIsLevelOneClicked(!isLevelOneClicked);
    setIsLevelOneClicked(true);
    if (isLevelTwoClicked === true) {
      setIsLevelTwoClicked(false);
    }
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
      id: 14,
      title: '산업안전/설치/서비스'
    }
  ]);

  const [isLevelOneClicked, setIsLevelOneClicked] = useState(false);

  const [levelTwo, setLevelTwo] = useState([
    {
      id: 1,
      title: '자동차/기계'
    },
    {
      id: 2,
      title: '반도체/디스플레이'
    },
    {
      id: 3,
      title: '화학/에너지/환경'
    },
    {
      id: 4,
      title: '전기/전자/제어'
    },
    {
      id: 5,
      title: '금속/재료'
    },
    {
      id: 6,
      title: '기계설게,CAD/CAM'
    },
    {
      id: 7,
      title: '통신기술/네트워크 구축'
    },
    {
      id: 8,
      title: '통신기술/네트워크 구축'
    },
    {
      id: 9,
      title: '통신기술/네트워크 구축'
    },
    {
      id: 10,
      title: '통신기술/네트워크 구축'
    },
    {
      id: 11,
      title: '통신기술/네트워크 구축'
    },
    {
      id: 12,
      title: '통신기술/네트워크 구축'
    },
    {
      id: 13,
      title: '통신기술/네트워크 구축'
    },
    {
      id: 14,
      title: '통신기술/네트워크 구축'
    }
  ]);

  const [isLevelTwoClicked, setIsLevelTwoClicked] = useState(false);

  const [levelThree, setLevelThree] = useState([
    {
      id: 1,
      title: '전기/전자회로',
      clicked: false
    },
    {
      id: 2,
      title: '하드웨어설계',
      clicked: false
    },
    {
      id: 3,
      title: 'PCB',
      clicked: false
    },
    {
      id: 4,
      title: '소프트웨어설계',
      clicked: false
    },
    {
      id: 5,
      title: '설계엔지니어',
      clicked: false
    },
    {
      id: 6,
      title: '연구원(전기전자)',
      clicked: false
    },
    {
      id: 7,
      title: 'R&D',
      clicked: false
    },
    {
      id: 8,
      title: '시스템',
      clicked: false
    },
    {
      id: 9,
      title: '신뢰성시험',
      clicked: false
    },
    {
      id: 10,
      title: '펌웨어',
      clicked: false
    },
    {
      id: 11,
      title: '전기설비',
      clicked: false
    },
    {
      id: 12,
      title: '유지보수',
      clicked: false
    },
    {
      id: 13,
      title: '연구개발비',
      clicked: false
    },
    {
      id: 14,
      title: '전자부품 관리/전자부품 관리',
      clicked: false
    },
    {
      id: 15,
      title: '난너를사랑해',
      clicked: false
    },
    {
      id: 16,
      title: 'I LOVE YOU GIRL',
      clicked: false
    },
    {
      id: 17,
      title: '이세상은너뿐이야',
      clicked: false
    },
    {
      id: 18,
      title: '소리쳐 부르지만',
      clicked: false
    },
    {
      id: 19,
      title: '저 대답 없는',
      clicked: false
    },
    {
      id: 20,
      title: '노을만 붉게 타는데',
      clicked: false
    },
    {
      id: 21,
      title: '아름다웠던',
      clicked: false
    },
    {
      id: 22,
      title: '그대 모습을',
      clicked: false
    },
    {
      id: 23,
      title: '이젠 볼 수 없겠지만',
      clicked: false
    },
    {
      id: 24,
      title: '먼 산 언저리마다',
      clicked: false
    },
    {
      id: 25,
      title: '너를 남기고',
      clicked: false
    },
    {
      id: 26,
      title: '돌아서는 내게',
      clicked: false
    },
    {
      id: 27,
      title: '생산라인 관리',
      clicked: false
    },
    {
      id: 28,
      title: '시간은 그만',
      clicked: false
    },
    {
      id: 29,
      title: '놓아주라는데',
      clicked: false
    },
    {
      id: 30,
      title: '난 왜 너 닮은 목소리마저',
      clicked: false
    },
    {
      id: 31,
      title: '가슴에 품고도',
      clicked: false
    },
    {
      id: 32,
      title: '전장 관리',
      clicked: false
    }
  ]);

  const jobId = useRef(0);
  const [printedJob, setPrintedJob] = useState([]);
  const setSelectedJobs = (selected) => {
    let isThreeClicked = false;
    const size = printedJob.length;
    if (size < 3) {
      const job = {
        id: jobId.current,
        title: selected.title
      };
      setPrintedJob([...printedJob, job]);
      jobId.current += 1;
    } else if (selected.clicked && size === 3) {
      isThreeClicked = true;
      const clicked = printedJob.filter(
        (job) => job.title === selected.title
      )[0];
      removePrintedJobFromLevelThree(clicked);
    } else if (size === 3) {
      alert('최대 3개까지 선택할 수 있습니다.');
      return;
    }

    if (selected.clicked && !isThreeClicked) {
      const clickedJob = printedJob.filter(
        (job) => job.title === selected.title
      )[0];
      removePrintedJobFromLevelThree(clickedJob);
    }

    setLevelThree(
      levelThree.map((job) =>
        job.id === selected.id ? { ...job, clicked: !job.clicked } : job
      )
    );
  };

  const removePrintedJob = (selected) => {
    setPrintedJob(printedJob.filter((item) => selected.title !== item.title));
    removeClickedJobBorder(selected);
  };

  const removePrintedJobFromLevelThree = (selected) => {
    setPrintedJob(printedJob.filter((item) => selected.title !== item.title));
  };

  const removeClickedJobBorder = (selected) => {
    setLevelThree(
      levelThree.map((job) =>
        job.title === selected.title ? { ...job, clicked: !job.clicked } : job
      )
    );
  };

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
                isSearchable={false}
                placeholder={'최종학력을 선택해주세요'}
                styles={customStyles}
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
              {isSelectJob ? (
                <div className="select-job-container">
                  <div className="level-columns">
                    <div className="level-one">
                      {levelOne.map((item) => (
                        <div key={item.id} onClick={toggleLevelOne}>
                          {item.title}
                        </div>
                      ))}
                    </div>
                    <div className="level-two">
                      {isLevelOneClicked
                        ? levelTwo.map((item) => (
                            <div
                              key={item.id}
                              onClick={() =>
                                setIsLevelTwoClicked(!isLevelTwoClicked)
                              }
                            >
                              {item.title}
                            </div>
                          ))
                        : null}
                    </div>
                    <div className="level-three">
                      {isLevelTwoClicked
                        ? levelThree.map((item) => (
                            <div
                              key={item.id}
                              onClick={() => setSelectedJobs(item)}
                              className={`job-item ${
                                item.clicked ? 'clicked' : null
                              }`}
                            >
                              {item.title}
                            </div>
                          ))
                        : null}
                    </div>
                  </div>
                  <div className="selected-items-container">
                    <div className="selected-items-content">
                      {printedJob.map((job) => (
                        <div key={job.id}>
                          <div>{job.title}</div>
                          <div
                            className="selected-job-close"
                            onClick={() => removePrintedJob(job)}
                          >
                            X
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      className="select-completed-btn"
                      onClick={completeJobSelection}
                    >
                      선택완료
                    </button>
                  </div>
                </div>
              ) : null}
              {isSelectDetailJob ? (
                <div className="select-detail-job-container">
                  <div className="previous-selected-jobs">
                    {printedJob.map((job) => (
                      <div key={job.id}>{job.title}</div>
                    ))}
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
