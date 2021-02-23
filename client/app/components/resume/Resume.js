import React, { useState } from 'react';
//import { useParams } from 'react-router-dom';
import '../../styles/Resume.css';
import ResumeComponent from './ResumeComponent';
import MainComponent from '../Main/MainComponent';
import { Switch, Link, Route } from 'react-router-dom';
import ResumeFooter from './ResumeFooter';
const axios = require('axios');

function Resume({ match }) {
  //const { uid } = useParams();
  const [resumeInfo, setResumeInfo] = useState({
    name: '',
    email: '',
    gender: '',
    birthmonth: '',
    phone: '',
    address: '',
    military: '',
    company: '',
    lposition: '',
    csmonth: '',
    cemonth: '',
    emtype: '',
    present: false,
    levelThree: [],
    levelFour: [],
    job_smonth: '',
    job_emonth: '',
    main_result: '',
    detail_desc: [],
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
    sdesc: '',
    intro: '',
    etype: '',
    school: '',
    edsmonth: '',
    edemonth: '',
    edregion: '',
    edmajor: [],
    beforetrans: '',
    beforetrans_smonth: '',
    beforetrans_emonth: '',
    beforetrans_region: '',
    beforetrans_major: '',
    university: '',
    uni_smonth: '',
    uni_emonth: '',
    uni_region: '',
    uni_major: ''
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

  const onAddMajor = (e) => {
    const { value } = e.target;
    setResumeInfo({ ...resumeInfo, edmajor: [...resumeInfo.edmajor, value] });
  };

  const onRemoveMajor = (e) => {
    const { value } = e.target;
    //console.log('onRemoveMajor:value', value);
    setResumeInfo({
      ...resumeInfo,
      edmajor: resumeInfo.edmajor.filter((major) => major !== value)
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('month')) {
      let numValue = value.replaceAll('-', '');
      numValue = parseInt(numValue, 10);
      setResumeInfo({ ...resumeInfo, [name]: numValue });
    } else {
      setResumeInfo({ ...resumeInfo, [name]: value });
    }
  };

  const onChangeDetailDesc = (e) => {
    const { value } = e.target;
    setResumeInfo({
      ...resumeInfo,
      detail_desc: [...resumeInfo.edmajor, value]
    });
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

  const insertResume = () => {
    insertBasicInfo();
    insertEducation();
    insertCareer();
    insertCertificate();
    insertExam();
    insertSkill();
    insertIntroduction();
  };

  const insertBasicInfo = async () => {
    const info = {
      email: resumeInfo.email,
      phone: resumeInfo.phone,
      military: parseInt(resumeInfo.military, 10)
    };
    try {
      const response = await axios.post('/resume/insertbasic', { info: info });
      //const dataArr = response.data;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const insertEducation = async () => {
    console.log('etype', resumeInfo.etype);
    console.log('typeof etype', typeof resumeInfo.etype);
    console.log('typeof etype', typeof parseInt(resumeInfo.etype, 10));
    const info = {
      email: resumeInfo.email,
      etype: parseInt(resumeInfo.etype, 10),
      university: resumeInfo.university,
      edmajor: resumeInfo.edmajor,
      uni_region: resumeInfo.uni_region,
      uni_smonth: resumeInfo.uni_smonth,
      uni_emonth: resumeInfo.uni_emonth
    };
    try {
      const response = await axios.post('/resume/insertedu', { info: info });
      //const dataArr = response.data;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const insertCareer = async () => {
    let stringLevelThree = '';
    let stringLevelFour = '';
    resumeInfo.levelThree.forEach(
      (data) => (stringLevelThree = data.title + ',' + stringLevelThree)
    );
    resumeInfo.levelFour.forEach(
      (data) => (stringLevelFour = data.title + ',' + stringLevelFour)
    );

    const info = {
      email: resumeInfo.email,
      levelThree: stringLevelThree,
      company: resumeInfo.company,
      emtype: parseInt(resumeInfo.emtype, 10),
      lposition: resumeInfo.lposition,
      present: resumeInfo.present,
      levelFour: stringLevelFour,
      main_result: resumeInfo.main_result,
      job_smonth: resumeInfo.job_smonth,
      job_emonth: resumeInfo.job_emonth,
      csmonth: resumeInfo.csmonth,
      cemonth: resumeInfo.cemonth
    };
    try {
      const response = await axios.post('/resume/insertcareer', { info: info });
      //const dataArr = response.data;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const insertCertificate = async () => {
    const info = {
      email: resumeInfo.email,
      dmonth: resumeInfo.dmonth,
      dname: resumeInfo.dname,
      dlevel: resumeInfo.dlevel,
      dagency: resumeInfo.dagency
    };
    try {
      const response = await axios.post('/resume/insertcerti', { info: info });
      //const dataArr = response.data;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const insertExam = async () => {
    const info = {
      email: resumeInfo.email,
      exmonth: resumeInfo.exmonth,
      exname: resumeInfo.exname,
      exlevel: resumeInfo.exlevel,
      exagency: resumeInfo.exagency
    };
    try {
      const response = await axios.post('/resume/insertexam', { info: info });
      //const dataArr = response.data;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const insertSkill = async () => {
    const info = {
      email: resumeInfo.email,
      ssmonth: resumeInfo.ssmonth,
      semonth: resumeInfo.semonth,
      sname: resumeInfo.sname,
      slevel: resumeInfo.slevel,
      sdesc: resumeInfo.sdesc
    };
    try {
      const response = await axios.post('/resume/insertskill', { info: info });
      //const dataArr = response.data;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const insertIntroduction = async () => {
    const info = {
      email: resumeInfo.email,
      intro: resumeInfo.intro
    };
    try {
      const response = await axios.post('/resume/insertintro', { info: info });
      //const dataArr = response.data;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e) => {
    insertResume();
    alert('등록되었습니다');
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
          onAddMajor={onAddMajor}
          onRemoveMajor={onRemoveMajor}
        />
      </section>
      <ResumeFooter onSubmit={onSubmit} />
      {console.log(resumeInfo)}
    </section>
  );
}
export default Resume;
