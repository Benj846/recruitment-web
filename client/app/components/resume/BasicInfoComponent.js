// import React, { Component } from 'react';
import React, { useState } from 'react';
import '../../styles/BasicInfoComponent';
import Popup from './PopupComponent';
import SignInComponent from '../member/SignInComponent';
import axios from 'axios';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'chocolate', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

function BasicInfoComponent() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSignIn, setSignIn] = useState(false);
  const [user, setUser] = useState({
    name: 'Ryan',
    birth: '2000-01-01',
    phone: '010-0000-0000',
    gender: 'male',
    email: 'fapply@mail.com',
    career: '경력'
  });

  const options = [
    {
      label: 'Apple',
      value: 'apple'
    },
    {
      label: 'Mango',
      value: 'mango'
    },
    {
      label: 'Banana',
      value: 'banana'
    },
    {
      label: 'Pineapple',
      value: 'pineapple'
    }
  ];

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSelectChange = () => {};

  const [profileName, setProfileName] = useState([]);
  const [profilePath, setProfilePath] = useState('');
  const [filePreview, setfilePreview] = useState('');
  const [filePath, setFilePath] = useState('');

  async function getImage() {
    try {
      const response = await axios.get('/api/getImage/' + 1);
      console.log(response.data);
      console.log(response.data[0].PIC);
      const dataArr = response.data[0].PIC;
      setFilePath(dataArr);
    } catch (error) {
      console.error(error);
    }
  }

  const FileChange = (e) => {
    setProfileName(e.target.files[0]);
    setProfilePath(e.target.value);
    setfilePreview(URL.createObjectURL(e.target.files[0]));
  };

  //submit-button에 적용
  // const onClickSubmit = (e) => {
  //   const formData = new FormData();
  //   formData.append('profileName', profileName);
  //   const config = {
  //     headers: {
  //       'content-type': 'multipart/form-data'
  //     }
  //   };
  //   axios.post('/api/upload', formData, config);
  // };

  async function deleteImage() {
    await axios.post('/api/deleteimage');
  }

  return (
    <div className="root">
      <div className="title-wrap">
        <span className="resume-title">이력서 작성하기</span>
        <span className="resume-user">{user.career}</span>
      </div>
      <p className="text">
        <span className="user-name">{user.name}</span> 님의 프로필을 입력하시고,
        더 많은 채용 기회를 확보하세요!
      </p>
      <div className="content-wrap">
        <span className="basic-info-title required">기본정보</span>
        <div className="basic-info-container">
          <div className="form-container">
            <div className="form-content">
              <div className="form" style={{ display: 'flex' }}>
                {filePreview == '' ? (
                  (getImage(),
                  (
                    <img
                      src={filePath}
                      width="160px"
                      height="150px"
                      style={{ objectFit: 'cover' }}
                    />
                  ))
                ) : (
                  <img
                    src={filePreview}
                    width="160px"
                    height="150px"
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </div>
              {/* <button className="picture-submit">등록</button> */}
              <label className="picture-submit" for="change-bt">
                변경
              </label>
              <input
                id="change-bt"
                style={{ display: 'none' }}
                type="file"
                name="file"
                // accept="image/*"
                file={profileName}
                value={profilePath}
                onChange={FileChange}
              />
              <button className="picture-delete" onClick={deleteImage}>
                삭제
              </button>
            </div>
          </div>
          <div className="input-container">
            <div className="name-gender-content content-row">
              <div className="content-name content-col-4">
                <span className="content-title">이름</span>
                <input
                  className="input-name"
                  type="text"
                  name="name"
                  defaultValue={user.name}
                  disabled="disabled"
                ></input>
              </div>
              <div className="content-gender content-col-4">
                <span className="content-title">성별</span>
                <div className="gender-content">
                  <button className="male active">남</button>
                  <button className="female">여</button>
                </div>
              </div>
            </div>
            <div className="content-birth-phonenum content-row">
              <div className="content-birth content-col-4">
                <span className="content-title">생년월일</span>
                <input
                  className="input-birth"
                  // type="date"
                  name="date"
                  defaultValue={user.birth}
                ></input>
              </div>
              <div className="content-phone content-col-4">
                <span className="content-title">전화번호</span>
                <input
                  className="input-phonenum"
                  name="phoneNumber"
                  disabled="disabled"
                  defaultValue={user.phone}
                ></input>
              </div>
            </div>
            <div className="content-addr-mili content-row">
              <div className="content-addr content-col-4">
                <span className="content-title">거주지</span>
                <div className="input-addr-wrap">
                  <input
                    className="input-addr"
                    type="text"
                    name="address"
                  ></input>
                  <button className="search-btn" onClick={togglePopup}>
                    search
                  </button>
                </div>
              </div>
              <div className="content-mili content-col-4">
                <span className="content-title">병역대상</span>
                <select
                  className="select military-options"
                  defaultValue="choose-military"
                  onClick={handleSelectChange}
                >
                  <option
                    className="military-options"
                    value="choose-military"
                    disabled="disabled"
                  >
                    선택
                  </option>
                  <option className="military-options" value="fulfilled">
                    군필
                  </option>
                  <option className="military-options" value="social">
                    공익
                  </option>
                  <option className="military-options" value="substitutional">
                    병역특례
                  </option>
                  <option className="military-options" value="exempted">
                    면제
                  </option>
                  <option className="military-options" value="unfulfilled">
                    미필
                  </option>
                  <option className="military-options" value="not-applicable">
                    해당없음
                  </option>
                </select>
              </div>
            </div>
            <div className="content-email content-row">
              <div className="content-col-8">
                <span className="span-email content-title">이메일</span>
                <input
                  className="input-email"
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  disabled="disabled"
                ></input>
              </div>
            </div>
            {showPopup ? (
              <Popup text="거주지를 선택해주세요." closePopup={togglePopup} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default BasicInfoComponent;
