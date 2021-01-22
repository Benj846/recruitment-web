import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import fapply_logo from './logo_and_images/fapply_logo.svg';
import Resume from './Resume';
import '../../styles/Navbar';
import MainComponent from '../Main/MainComponent';
import RecruitmentComponent from '../recruitment/RecruitmentComponent';
import Career from '../Career/Career';
import Calendar from '../calendar/Calendar';
//import Test from '../Test/test';
import SignInComponent from '../member/SignInComponent';
import MyPageComponent from '../member/MyPageComponent';

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

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand ">
        <div className="navbar-nav mr-auto">
          <Link to={'/'} className="navbar-brand">
            <img className="fapply_logo" src={fapply_logo} alt="fapply_logo" />
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
          <li className="nav-item">
            <Link to={'/calendar'} className="nav-link">
              채용달력
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/resume'} className="nav-link">
              이력서
            </Link>
          </li>
        </div>
        <li className="nav-item">
          <Link to={'/mypage'} className="mypage-margin">
            마이페이지
          </Link>
        </li>
        <div className="utility">
          <button className="signin-btn" onClick={toggleSigninPopup}>
            로그인/회원가입
          </button>
          <button className="business-btn">기업페이지</button>
        </div>
      </nav>
      {showPopup ? <SignInComponent closePopup={toggleSigninPopup} /> : null}
      <Switch>
        <Route exact path="/" component={MainComponent} />
        <Route exact path="/recruitment" component={RecruitmentComponent} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/mypage" component={MyPageComponent} />
      </Switch>
    </div>
  );
}
export default Navbar;
