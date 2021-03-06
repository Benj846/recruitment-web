import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import fapply_logo from './logo_and_images/fapply_logo.svg';
import Resume from './Resume';
import '../../styles/Navbar';
import MainComponent from '../Main/MainComponent';
import RecruitmentComponent from '../recruitment/RecruitmentComponent';
import Calendar from '../calendar/Calendar';
import Career from '../Career/Career';
//import Test from '../Test/test';
import SignInComponent from '../member/SignInComponent';
import MyPageComponent from '../member/MyPageComponent';
import HeadhuntingComponent from '../Headhunting/HeadhuntingComponent';
const axios = require('axios');

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const toggleSigninPopup = () => {
    const clicked = !showPopup;
    if (clicked === true) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    setShowPopup(clicked);
  };

  const [loginInfo, setLoginInfo] = useState({
    uid: '',
    isSuccess: false,
    userType: 0
  });

  // const userInfo = {
  //   name: '',
  //   email: ''
  // };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand">
        <div className="navbar-inner">
          <div className="navbar-nav">
            <Link to={'/'} className="navbar-brand">
              <img
                className="fapply_logo"
                src={fapply_logo}
                alt="fapply_logo"
              />
            </Link>
            <li className="nav-item">
              <Link to={'/recruitment'} className="nav-link">
                채용공고
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/career'} className="nav-link">
                커리어
              </Link>
            </li>
            {loginInfo.userType === 0 || loginInfo.userType === -1 ? (
              <>
                <li className="nav-item">
                  <Link to={'/calendar'} className="nav-link">
                    채용달력
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/resume/${loginInfo.uid}`} className="nav-link">
                    이력서
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to={'/headhunting'} className="nav-link">
                    인재검색/채용제안
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/recriutmanage'} className="nav-link">
                    채용공고관리
                  </Link>
                </li>
              </>
            )}
          </div>
          <div className="utility">
            {/* <button className="signin-btn" onClick={toggleSigninPopup}> */}
            {loginInfo.isSuccess ? (
              `${loginInfo.uid.substr(0, loginInfo.uid.indexOf('@'))}님 `
            ) : (
              <button className="signin-btn" onClick={toggleSigninPopup}>
                로그인/회원가입
              </button>
            )}
            {/* </button> */}
            {loginInfo.isSuccess ? (
              <Link to={`/mypage/${loginInfo.uid}`} className="nav-link">
                마이페이지
              </Link>
            ) : null}
            {/* <Link to={'/mypage'} className="nav-link">
              마이페이지
            </Link> */}
            <button className="business-btn">기업페이지</button>
          </div>
        </div>
      </nav>
      {showPopup ? (
        <SignInComponent
          closePopup={toggleSigninPopup}
          setLoginInfo={setLoginInfo}
        />
      ) : null}
      <Switch>
        <Route exact path="/" component={MainComponent} />
        <Route exact path="/recruitment" component={RecruitmentComponent} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/resume/:uid" component={Resume} />
        <Route exact path="/mypage/:uid" component={MyPageComponent} />
        <Route exact path="/headhunting" component={HeadhuntingComponent} />
      </Switch>
    </div>
  );
}
export default Navbar;
