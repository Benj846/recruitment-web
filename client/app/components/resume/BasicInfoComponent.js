// import React, { Component } from 'react';
import React, { useState } from 'react';
import '../../styles/BasicInfoComponent';
import Popup from './PopupComponent';
import SignInComponent from '../member/SignInComponent';

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

  return (
    <div className="root">
      <span className="resume-title">이력서 작성하기</span>
      <span className="resume-user">{user.career}</span>
      <p className="text">
        {user.name} 님의 프로필을 입력하시고, 더 많은 채용 기회를 확보하세요!
      </p>
      <p className="basic-info-title">기본정보</p>
      <hr className="divider" />

      <div className="basic-info-container">
        <div className="form-container">
          {/* <form action=""> */}
          <div className="form-content">
            <div className="form">{/* <image src=""></image> */}</div>
            <button className="picture-submit">등록</button>
            <button className="picture-delete">삭제</button>
          </div>
          {/* </form> */}
        </div>
        <div className="input-container">
          <div className="name-gender-content">
            <span className="span-name">이름</span>
            <input
              className="input-name"
              type="text"
              name="name"
              value={user.name}
              disabled="disabled"
            ></input>
            <span className="span-gender">성별</span>
            <div className="gender-content">
              <div className="male">남</div>
              <div className="female">여</div>
            </div>
          </div>
          <div className="span-birth">생년월일</div>
          <input
            className="input-birth"
            // type="date"
            name="date"
            value={user.birth}
          ></input>
          <span className="span-phonenum">전화번호</span>
          <input
            className="input-phonenum"
            name="phoneNumber"
            disabled="disabled"
            value={user.phone}
          ></input>
          <span className="span-addr">거주지</span>
          <input className="input-addr" type="text" name="address"></input>
          <button className="search-btn" onClick={togglePopup}>
            search
          </button>
          <span className="span-mili">병역대상</span>
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
          <span className="span-email">이메일</span>

          {/* ------------------------------------ */}

          {/* ------------------------------------ */}

          <input
            className="input-email"
            type="email"
            name="email"
            value={user.email}
            disabled="disabled"
          ></input>

          {showPopup ? (
            <Popup text="거주지를 선택해주세요." closePopup={togglePopup} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default BasicInfoComponent;
