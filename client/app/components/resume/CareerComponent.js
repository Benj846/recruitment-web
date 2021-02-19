import React, { useState, useRef, useEffect } from 'react';
import Select from 'react-select';
import MultiLevelSelect from 'react-multi-level-selector';
import icon_arrow_down from './logo_and_images/icon_arrow_down_40px.png';
import '../../styles/CareerComponent';
const axios = require('axios');

function CareerComponent() {
  const [ids, setIds] = useState([]);
  const [isSelectJob, setIsSelectJob] = useState([]);
  const [isSelectDetailJob, setIsSelectDetailJob] = useState([]);
  const refId = useRef(0);
  const onCreate = () => {
    const id = refId.current;
    setIds(ids.concat(id));
    refId.current += 1;
    setIsSelectJob([...isSelectJob, { id: id, flag: false }]);
    setIsSelectDetailJob([...isSelectDetailJob, { id: id, flag: false }]);
  };

  const onRemove = (selectedId) => {
    setIds(ids.filter((id) => id !== selectedId));
  };

  const onToggleSelectJob = (id, flagValue) => {
    setIsSelectJob(
      isSelectJob.map((job) =>
        job.id === id ? { ...job, flag: flagValue } : job
      )
    );
  };

  const onToggleSelectDetailJob = (id, flagValue) => {
    setIsSelectDetailJob(
      isSelectDetailJob.map((job) =>
        job.id === id ? { ...job, flag: flagValue } : job
      )
    );
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
      <CareerListComponent
        ids={ids}
        isSelectJob={isSelectJob}
        isSelectDetailJob={isSelectDetailJob}
        onToggleSelectJob={onToggleSelectJob}
        onToggleSelectDetailJob={onToggleSelectDetailJob}
        onRemove={onRemove}
      />
    </div>
  );
}

function CareerListComponent({
  ids,
  isSelectJob,
  isSelectDetailJob,
  onToggleSelectJob,
  onToggleSelectDetailJob,
  onRemove
}) {
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
    svalueContainer: () => ({
      margin: 0
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
    singleValue: (provided, state) => ({
      margin: 0
    })
  };

  // useEffect(() => {
  //   const getLevelOneJobs = async () => {
  //     try {
  //       const response = await axios.get('/work/lv1');
  //       const dataArr = response.data;
  //       setLevelOne(dataArr);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getLevelOneJobs();
  // }, []);

  const getLevelOneJobs = async () => {
    try {
      const response = await axios.get('/work/lv1');
      const dataArr = response.data;
      setLevelOne(dataArr);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLevelOneJobs();
  }, []);

  //const [isSelectJob, setIsSelectJob] = useState(false);
  //const [isSelectJob, setIsSelectJob] = useState([]);
  const toggleSelectJob = (id) => {
    //let isDetailClicked = !isSelectDetailJob[id].flag;
    let jobSelected = isSelectJob.find((job) => job.id === id);
    let detailSelected = isSelectDetailJob.find((job) => job.id === id);
    let isDetailClicked = !detailSelected.flag;
    let isJobClicked = jobSelected.flag;

    setPrintedDetailJob([]);
    setPrintedJob([]);
    setLevelTwo([]);
    setLevelThree([]);
    setLevelFour([]);
    setIsLevelOneClicked(false);
    setIsLevelTwoClicked(false);

    if (!isDetailClicked && !isJobClicked) {
      //setIsSelectDetailJob(false);
      onToggleSelectDetailJob(id, false);
    } else {
      //setIsSelectJob(!isSelectJob);
      onToggleSelectJob(id, !isJobClicked);
    }
  };
  const toggleLevelOne = (id) => {
    getLevelTwoJobs(id, 2);
    setIsLevelOneClicked(true);
    if (isLevelTwoClicked === true) {
      setIsLevelTwoClicked(false);
    }
  };

  const getLevelTwoJobs = async (id) => {
    try {
      const response = await axios.post('/work/lv2', { id: id });
      const dataArr = response.data;
      // const dataArr = tempArr.map((data) => ({
      //   ...data,
      //   index: index
      // }));
      //setLevelTwo([...levelTwo, dataArr]);
      setLevelTwo(dataArr);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleLevelTwo = (id) => {
    getLevelThreeJobs(id);
    setIsLevelTwoClicked(true);
  };

  const getLevelThreeJobs = async (id) => {
    try {
      const response = await axios.post('/work/lv3', { id: id });
      const tempArr = response.data;
      const dataArr = tempArr.map((data) => ({
        ...data,
        clicked: false
      }));
      setLevelThree(dataArr);
    } catch (error) {
      console.error(error);
    }
  };

  const [levelOne, setLevelOne] = useState([]);
  const [isLevelOneClicked, setIsLevelOneClicked] = useState(false);

  const [levelTwo, setLevelTwo] = useState([]);

  const [isLevelTwoClicked, setIsLevelTwoClicked] = useState(false);

  const [levelThree, setLevelThree] = useState([]);

  const [levelFour, setLevelFour] = useState([]);

  const jobId = useRef(0);
  const [printedJob, setPrintedJob] = useState([]);
  const setSelectedJobs = (selected) => {
    if (selected.clicked === false && printedJob.length >= 3) {
      alert('최대 3개까지 선택 가능합니다');
      return;
    }
    const flag = !selected.clicked;
    setLevelThree(
      levelThree.map((job) =>
        job.ID === selected.ID ? { ...job, clicked: flag } : job
      )
    );
    const job = {
      id: selected.ID,
      upperId: selected.UPPER_ID,
      title: selected.VAL
    };
    if (flag === true) {
      setPrintedJob([...printedJob, job]);
    } else {
      setPrintedJob(printedJob.filter((job) => job.id !== selected.ID));
    }
  };

  const removePrintedJob = (selected) => {
    setLevelThree(
      levelThree.map((job) =>
        job.ID === selected.id ? { ...job, clicked: false } : job
      )
    );
    setPrintedJob(printedJob.filter((job) => job.id !== selected.id));
  };

  const setSelectedDetailJobs = (selected) => {
    if (selected.clicked === false && printedDetailJob.length >= 6) {
      alert('상세직무는 최대 6개까지 선택 가능합니다');
      return;
    }
    const flag = !selected.clicked;
    setLevelFour(
      levelFour.map((job) =>
        job.ID === selected.ID ? { ...job, clicked: flag } : job
      )
    );
    const job = {
      id: selected.ID,
      title: selected.VAL
    };
    if (flag === true) {
      setPrintedDetailJob([...printedDetailJob, job]);
    } else {
      setPrintedDetailJob(
        printedDetailJob.filter((job) => job.id !== selected.ID)
      );
    }
  };

  //const [isSelectDetailJob, setIsSelectDetailJob] = useState(false);

  //////////////[직무 추가하기]를 누를 때 유지해야 하는 상태값들(전부 2차원 배열)
  // DB에서 가져온 4단계 직무들을 저장
  const [levelFourJobs, setLevelFourJobs] = useState([]);

  // 3단계에서 선택된 직무
  const [selectedLevelThreeJobs, setSelectedLevelThreeJobs] = useState([]);

  // 4단계에서 선택된 직무
  const [selectedLevelFourJobs, setSelectedLevelFourJobs] = useState([]);

  const completeJobSelection = (id) => {
    if (printedJob.length === 0) {
      alert('선택된 직무가 없습니다.');
      return;
    }

    // let clicked = !isSelectJob;
    // setIsSelectJob(clicked);
    // if (clicked === false) {
    //   setIsLevelOneClicked(false);
    //   setIsLevelTwoClicked(false);
    // }
    // clicked = !isSelectDetailJob;
    // setIsSelectDetailJob(clicked);
    //setSelectedLevelThreeJobs([...selectedLevelThreeJobs, printedJob]);
    getLevelFourJobs();

    let jobSelected = isSelectJob.find((job) => job.id === id);
    let isJobClicked = !jobSelected.flag;

    onToggleSelectJob(id, isJobClicked);
    if (isJobClicked === false) {
      setIsLevelOneClicked(false);
      setIsLevelTwoClicked(false);
    }
    let detailSelected = isSelectDetailJob.find((job) => job.id === id);
    let isDetailClicked = !detailSelected.flag;
    onToggleSelectDetailJob(id, isDetailClicked);
  };

  const [showJobContent, setShowJobContent] = useState(true);
  const completeDetailJobSelection = (id) => {
    // 배열에 추가
    setSelectedLevelThreeJobs([...selectedLevelThreeJobs, printedJob]);
    setSelectedLevelFourJobs([...selectedLevelFourJobs, printedDetailJob]);
    setLevelFourJobs([...levelFourJobs, levelFour]);
    setShowJobContent(!showJobContent);
    setPrintedDetailJob([]);
    onToggleSelectJob(id, false);
    onToggleSelectDetailJob(id, false);
    // setIsSelectJob(false);
    // setIsSelectDetailJob(false);

    // 세부 직무 추가하기 flag를 담은 배열을 여기에서 추가
    setShowAdditionalDetail([...showAdditionalDetail, { flag: false }]);
  };

  const [printedDetailJob, setPrintedDetailJob] = useState([]);

  const removePrintedDetailJob = (selected) => {
    setLevelFour(
      levelFour.map((job) =>
        job.ID === selected.id ? { ...job, clicked: false } : job
      )
    );
    setPrintedDetailJob(
      printedDetailJob.filter((job) => job.id !== selected.id)
    );
  };

  const getLevelFourJobs = async () => {
    try {
      let idArr = [];
      let upperIdArr = [];
      for (let i = 0; i < printedJob.length; ++i) {
        idArr.push(printedJob[i]['id']);
        upperIdArr.push(printedJob[i]['upperId']);
      }
      const response = await axios.post('/work/lv4', {
        id: idArr,
        upperId: upperIdArr,
        count: idArr.length
      });
      const tempArr = response.data;
      const dataArr = tempArr.map((data) => ({
        ...data,
        clicked: false
      }));
      setLevelFour(dataArr);
    } catch (error) {
      console.error(error);
    }
  };

  const [showAdditionalDetail, setShowAdditionalDetail] = useState([]);
  const toggleAdditionalDetail = (index) => {
    const f = !showAdditionalDetail[index].flag;
    setShowAdditionalDetail(
      showAdditionalDetail.map((data, i) =>
        index === i ? { ...data, flag: f } : data
      )
    );
  };

  const closeThisContent = (index) => {
    setSelectedLevelThreeJobs(
      selectedLevelThreeJobs.filter((data, i) => i !== index)
    );
  };

  const completeDetailJobSelection2 = (index) => {
    toggleAdditionalDetail(index);
  };

  // const detailJobIdRef = useRef(0);
  // const [detailJobIds, setDetailJobIds] = useState([]);

  const [isAddJobsClicked, setIsAddJobsClicked] = useState(false);
  const toggleAddJobs = () => {
    setIsAddJobsClicked(!isAddJobsClicked);
    setLevelTwo([]);
    setLevelThree([]);
    setLevelFour([]);
    setPrintedJob([]);
    setPrintedDetailJob([]);
  };

  const setSelectedLevelFour = (selected, index) => {
    if (
      selected.clicked === false &&
      selectedLevelFourJobs[index].length >= 6
    ) {
      alert('상세직무는 최대 6개까지 선택 가능합니다');
      return;
    }
    const flag = !selected.clicked;
    setLevelFourJobs(
      levelFourJobs.map((arr, i) =>
        arr.map((item) =>
          index === i && item.ID === selected.ID
            ? { ...item, clicked: flag }
            : item
        )
      )
    );
    const job = {
      id: selected.ID,
      title: selected.VAL
    };
    if (flag === true) {
      setSelectedLevelFourJobs(
        selectedLevelFourJobs.map((arr, i) =>
          index === i ? [...arr, job] : arr
        )
      );
    } else {
      setSelectedLevelFourJobs(
        selectedLevelFourJobs.map((arr, i) =>
          arr.filter((item) => i === index && item.id !== selected.ID)
        )
      );
    }
  };

  const removePrintedLevelFour = (selected, index) => {
    setLevelFourJobs(
      levelFourJobs.map((arr, i) =>
        arr.map((item) =>
          index === i && item.ID === selected.id
            ? { ...item, clicked: false }
            : item
        )
      )
    );
    // console.log('index', index);
    // console.log('selected', selected);
    setSelectedLevelFourJobs(
      selectedLevelFourJobs.map((arr, i) =>
        arr.filter((item) => i === index && item.id !== selected.id)
      )
    );
  };
  // const count = useRef(0);
  // const getCount = () => {
  //   const result = count.current;
  //   count.current += 1;
  //   return result;
  // };
  return (
    <>
      {/* {console.log(ids)}
      {console.log(ids.length)} */}
      {/* {console.log('isSelectJob', isSelectJob)}
      {console.log('isSelectDetailJob', isSelectDetailJob)}
      {console.log('--------------')} */}
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

          {/* 추가된 직무들 */}

          {/* 이 배열이 가진 length를 활용 */}
          {selectedLevelThreeJobs.map((three, index) => (
            <div className="detail-job-content" key={index}>
              <div className="job-name-content row-style">
                <div className="job-name-title title-style">직무명</div>
                <div className="three-level-jobs border-style">
                  {three.map((job) => (
                    <div key={job.id}>{job.title}</div>
                  ))}
                </div>
                <div
                  className="close-content"
                  onClick={() => closeThisContent(index)}
                >
                  X
                </div>
              </div>
              <div className="job-period-content row-style">
                <div className="job-period-name title-style">직무기간</div>
                <input type="month" className="start-month border-style" />
                <input
                  type="month"
                  className="end-month border-style col-style"
                />
                <input
                  className="period-input border-style col-style"
                  disabled={true}
                  placeholder="    년  개월"
                ></input>
              </div>
              <div className="main-result-content row-style">
                <div className="main-result-title title-style">주요성과</div>
                <input className="input-main-result border-style" />
              </div>
              <div className="detail-job-list-container">
                <div>
                  <div className="detail-job-title title-style">세부직무</div>
                </div>
                <div className="detail-job-list-content">
                  {/* {console.log('levelFourJobs', levelFourJobs)} */}
                  {selectedLevelFourJobs[index].map((job) => (
                    <div key={job.id} className="detail-job">
                      <div className="detail-job-name border-style">
                        {job.title}
                      </div>
                      <input
                        className="input-detail-job-desc border-style"
                        placeholder="세부 직무에 대한 키워드 입력하기(50자 내외)"
                      />
                    </div>
                  ))}
                  <div className="add-detail-job">
                    <button onClick={() => toggleAdditionalDetail(index)}>
                      + 세부직무 추가하기
                    </button>
                    {showAdditionalDetail[index].flag ? (
                      <>
                        {/* {console.log(selectedLevelThreeJobs)}
                              {console.log(selectedLevelFourJobs)} */}
                        <div className="select-detail-job-container-2">
                          <div className="previous-selected-jobs">
                            {three.map((job) => (
                              <div key={job.id}>{job.title}</div>
                            ))}
                          </div>
                          <div className="level-four">
                            {levelFourJobs[index].map((four) => (
                              <div
                                key={four.ID}
                                onClick={() =>
                                  setSelectedLevelFour(four, index)
                                }
                                className={`detail-job-item ${
                                  four.clicked ? 'clicked' : null
                                }`}
                              >
                                {four.VAL}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="selected-four-container-2">
                          <div className="print-selected-four">
                            {selectedLevelFourJobs[index].map((selected) => (
                              <div key={selected.id}>
                                <div className="selected">{selected.title}</div>
                                <div
                                  className="close-selected"
                                  onClick={() =>
                                    removePrintedLevelFour(selected, index)
                                  }
                                >
                                  X
                                </div>
                              </div>
                            ))}
                          </div>
                          <button
                            className="completeDetailJobSelection"
                            onClick={() => completeDetailJobSelection2(index)}
                          >
                            선택완료
                          </button>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 직무 추가하기 */}
          <div className="job-container">
            <div className="job-content">
              <div className="add-jobs">
                <button onClick={() => toggleSelectJob(id)}>
                  직무 추가하기
                </button>
                {isSelectJob.find((job) => job.id === id).flag ? (
                  <div className="select-job-container">
                    <div className="level-columns">
                      <div className="level-one">
                        {levelOne.map((item) => (
                          <div
                            key={item.ID}
                            onClick={() => toggleLevelOne(item.ID)}
                          >
                            {item.VAL}
                          </div>
                        ))}
                      </div>
                      <div className="level-two">
                        {isLevelOneClicked
                          ? levelTwo.map((item) => (
                              <div
                                key={item.ID}
                                onClick={() => toggleLevelTwo(item.ID)}
                              >
                                {item.VAL}
                              </div>
                            ))
                          : null}
                      </div>
                      <div className="level-three">
                        {isLevelTwoClicked
                          ? levelThree.map((job) => (
                              <div
                                key={job.ID}
                                onClick={() => setSelectedJobs(job)}
                                className={`job-item ${
                                  job.clicked ? 'clicked' : null
                                }`}
                              >
                                {job.VAL}
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
                        onClick={() => completeJobSelection(id)}
                      >
                        선택완료
                      </button>
                    </div>
                  </div>
                ) : null}
                {isSelectDetailJob.find((detail) => detail.id === id).flag ? (
                  <>
                    <div className="select-detail-job-container">
                      <div className="previous-selected-jobs">
                        {printedJob.map((job) => (
                          <div key={job.id}>{job.title}</div>
                        ))}
                      </div>
                      <div className="level-four">
                        {levelFour.map((job) => (
                          <div
                            key={job.ID}
                            onClick={() => setSelectedDetailJobs(job)}
                            className={`detail-job-item ${
                              job.clicked ? 'clicked' : null
                            }`}
                          >
                            {job.VAL}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="selected-four-container">
                      <div className="print-selected-four">
                        {printedDetailJob.map((job) => (
                          <div key={job.id}>
                            <div className="selected">{job.title}</div>
                            <div
                              className="close-selected"
                              onClick={() => removePrintedDetailJob(job)}
                            >
                              X
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="completeDetailJobSelection"
                        onClick={() => completeDetailJobSelection(id)}
                      >
                        선택완료
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          {console.log(selectedLevelFourJobs)}
          {/* {showJobContent ? null : (
            <div className="add-jobs-2">
              <button onClick={toggleAddJobs}>직무 추가하기</button>
              {isAddJobsClicked ? (
                <div className="add-job-container">
                  <div className="level-columns">
                    <div className="level-one">
                      {levelOne.map((item) => (
                        <div
                          key={item.ID}
                          onClick={() => toggleLevelOne(item.ID)}
                        >
                          {item.VAL}
                        </div>
                      ))}
                    </div>
                    <div className="level-two">
                      {isLevelOneClicked
                        ? levelTwo.map((item) => (
                            <div
                              key={item.ID}
                              onClick={() => toggleLevelTwo(item.ID)}
                            >
                              {item.VAL}
                            </div>
                          ))
                        : null}
                    </div>
                    <div className="level-three">
                      {isLevelTwoClicked
                        ? levelThree.map((job) => (
                            <div
                              key={job.ID}
                              onClick={() => setSelectedJobs(job)}
                              className={`job-item ${
                                job.clicked ? 'clicked' : null
                              }`}
                            >
                              {job.VAL}
                            </div>
                          ))
                        : null}
                    </div>
                  </div>
                  <div className="selected-jobs-container">
                    <div className="selected-jobs-content">
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
            </div>
          )} */}
        </div>
      ))}
    </>
  );
}
export default CareerComponent;
