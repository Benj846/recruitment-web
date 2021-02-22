import React, { useState } from 'react';
//import { useParams } from 'react-router-dom';
import '../../styles/Resume.css';
import ResumeComponent from './ResumeComponent';
import ResumeFooter from './ResumeFooter';

function Resume({ match }) {
  //const { uid } = useParams();
  const [resumeInfo, setResumeInfo] = useState({
    name: '',
    email: '',
    gender: '',
    birth: '',
    phone: '',
    address: '',
    military: '',
    company: '',
    lposition: '',
    csdate: '',
    cedate: '',
    present: false,
    levelThree: [],
    levelFour: [],
    dmonth: '',
    dname: '',
    dlevel: '',
    dagency: '',
    exmonth: '',
    exname: '',
    exlevel: '',
    exagency: '',
    exscore: '',
    ssmonth: '',
    semonth: '',
    sname: '',
    slevel: '',
    intro: '',
    etype: '',
    high: '',
    edsmonth: '',
    edemonth: '',
    edregion: ''
  });

  const onCloseJob = (index) => {};

  const onDefaultSet = (name, uid, region) => {
    setResumeInfo({
      ...resumeInfo,
      name: name,
      email: uid,
      address: region
    });
  };

  const onSelectJobs = (job, level) => {
    if (level === 'levelThree') {
      setResumeInfo({
        ...resumeInfo,
        [level]: [...resumeInfo.levelThree, job]
      });
    } else if (level === 'levelFour') {
      setResumeInfo({
        ...resumeInfo,
        [level]: [...resumeInfo.levelFour, job]
      });
    }
  };

  const onRemoveJobs = (job, level) => {
    if (level === 'levelThree') {
      setResumeInfo({
        ...resumeInfo,
        [level]: resumeInfo.levelThree.filter((three) => job.id !== three.id)
      });
    } else if (level === 'levelFour') {
      setResumeInfo({
        ...resumeInfo,
        [level]: resumeInfo.levelFour.filter((four) => job.id !== four.id)
      });
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log('name', name);
    console.log('value', value);
    setResumeInfo({ ...resumeInfo, [name]: value });
  };
  const onClick = (e) => {
    //alert(e.target.textContent);
    setResumeInfo({ ...resumeInfo, [e.target.name]: e.target.textContent });
  };
  const onClickCheckBox = (e) => {
    // console.log('e.target.checked', e.target.checked);
    // console.log('e.target.value', e.target.value);
    setResumeInfo({ ...resumeInfo, present: e.target.checked });
  };

  const { params } = match;
  return (
    <section className="resume-body">
      <section className="resume-main">
        <ResumeComponent
          uid={params.uid}
          resumeInfo={resumeInfo}
          onChange={onChange}
          onClick={onClick}
          onDefaultSet={onDefaultSet}
          onClickCheckBox={onClickCheckBox}
          onSelectJobs={onSelectJobs}
          onRemoveJobs={onRemoveJobs}
        />
      </section>
      <ResumeFooter />
      {console.log(resumeInfo)}
    </section>
  );
}
export default Resume;
