import React, { useState, useRef, useEffect } from 'react';
import Select from 'react-select';
import icon_arrow_down from './logo_and_images/icon_arrow_down_40px.png';
import icon_close_32px from './logo_and_images/icon_close_32px.png';
import '../../styles/CareerComponent';
const axios = require('axios');

function CareerComponent({
  resumeInfo,
  onDefaultSet,
  onChange,
  onClick,
  onClickCheckBox,
  onSelectJobs,
  onRemoveJobs
}) {
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
        resumeInfo={resumeInfo}
        onDefaultSet={onDefaultSet}
        onChange={onChange}
        onClick={onClick}
        onClickCheckBox={onClickCheckBox}
        onSelectJobs={onSelectJobs}
        onRemoveJobs={onRemoveJobs}
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
  onRemove,
  resumeInfo,
  onDefaultSet,
  onChange,
  onClick,
  onClickCheckBox,
  onSelectJobs,
  onRemoveJobs
}) {
  // const selectOptions = [
  //   { value: 0, label: '정규직', color: '#00B8D9' },
  //   { value: 1, label: '계약직', color: '#0052CC' },
  //   { value: 2, label: '파견직', color: '#5243AA' },
  //   { value: 3, label: '프리랜서', color: '#FF5630' },
  //   { value: 4, label: '개인사업', color: '#FF8B00' },
  //   { value: 5, label: '병력특례', color: '#FFC400' },
  //   { value: 6, label: '인턴', color: '#36B37E' }
  // ];

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
      onSelectJobs(job, 'levelThree');
    } else {
      setPrintedJob(printedJob.filter((job) => job.id !== selected.ID));
      onRemoveJobs(job, 'levelThree');
    }
  };

  const removePrintedJob = (selected) => {
    setLevelThree(
      levelThree.map((job) =>
        job.ID === selected.id ? { ...job, clicked: false } : job
      )
    );
    setPrintedJob(printedJob.filter((job) => job.id !== selected.id));
    const job = {
      id: selected.ID,
      upperId: selected.UPPER_ID,
      title: selected.VAL
    };
    onRemoveJobs(job, 'levelThree');
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
      onSelectJobs(job, 'levelFour');
    } else {
      setPrintedDetailJob(
        printedDetailJob.filter((job) => job.id !== selected.ID)
      );
      onRemoveJobs(job, 'levelFour');
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
    const job = {
      id: selected.ID,
      upperId: selected.UPPER_ID,
      title: selected.VAL
    };
    onRemoveJobs(job, 'levelFour');
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
      onSelectJobs(job, 'levelFour');
    } else {
      setSelectedLevelFourJobs(
        selectedLevelFourJobs.map((arr, i) =>
          arr.filter((item) => i === index && item.id !== selected.ID)
        )
      );
      onRemoveJobs(job, 'levelFour');
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
    const job = {
      id: selected.ID,
      title: selected.VAL
    };
    setSelectedLevelFourJobs(
      selectedLevelFourJobs.map((arr, i) =>
        arr.filter((item) => i === index && item.id !== selected.id)
      )
    );
    onRemoveJobs(job, 'levelFour');
  };
  return (
    <>
      {/* {console.log(ids)}
      {console.log(ids.length)} */}
      {/* {console.log('isSelectJob', isSelectJob)}
      {console.log('isSelectDetailJob', isSelectDetailJob)}
      {console.log('--------------')} */}
      {ids.map((id) => (
        <section key={id} className="body-detail">
          <div className="company-input-close content-row">
            <div className="company-name content-col">
              <span className="content-title">회사명</span>
              <input
                className="input-style"
                name="company"
                onChange={onChange}
                value={resumeInfo.company}
              ></input>
            </div>
            <img
              className="close-info"
              src={icon_close_32px}
              onClick={() => onRemove(id)}
            />
          </div>
          {/* 고용형태 */}
          <div className="employ-type">
            <div className="employment content-col">
              <div className="employ-type-style content-title">고용형태</div>
              <select
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="basic-single choose"
                name="emtype"
                onChange={onChange}
              >
                <option value="choose" disabled={true}>
                  선택
                </option>
                <option value="0">정규직</option>
                <option value="1">계약직</option>
                <option value="2">파견직</option>
                <option value="3">프리랜서</option>
                <option value="4">개인사업</option>
                <option value="5">병역특례</option>
                <option value="6">인턴</option>
              </select>
            </div>
            <div className="final content-col">
              <div className="content-title">최종직위</div>
              <input
                className="input-style"
                name="lposition"
                onChange={onChange}
              ></input>
            </div>
          </div>
          {/* 근무기간 */}
          <div className="employ-type">
            <div className="content-title period">근무기간</div>
            <input
              type="month"
              name="csmonth"
              className="employ-period zero-outline"
              onChange={onChange}
            ></input>
            <input
              type="month"
              name="cemonth"
              className="employ-period zero-outline"
              onChange={onChange}
            ></input>
            <input
              className="employ-period-input zero-outline"
              disabled={true}
            ></input>
            <div className="present">
              <input
                type="checkbox"
                name="present"
                checked={resumeInfo.present}
                onChange={onClickCheckBox}
              />
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
                <input
                  type="month"
                  className="start-month border-style"
                  name="job_smonth"
                  onChange={onChange}
                />
                <input
                  type="month"
                  className="end-month border-style col-style"
                  name="job_emonth"
                  onChange={onChange}
                />
                <input
                  className="period-input border-style col-style"
                  disabled={true}
                  placeholder="    년  개월"
                ></input>
              </div>
              <div className="main-result-content row-style">
                <div className="main-result-title title-style">주요성과</div>
                <input
                  className="input-main-result border-style"
                  name="main_result"
                  onChange={onChange}
                />
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
                        onChange={onChange}
                        // name="detail_desc"
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
          {/* {console.log(selectedLevelFourJobs)} */}
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
        </section>
      ))}
    </>
  );
}
export default CareerComponent;
