import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HeadhuntingComponent';
import JobTreeComponent from '../recruitment/switchMenu/JobTreeComponent';
import profilePic from './image/img_profile.png';
import icon_chevron from './image/icon_chevron_7px.png';
import icon_chevron_active from './image/icon_chevron_7px_active.png';
import icon_career from './image/icon_career.png';
import icon_edu from './image/icon_edu.png';
import icon_interests from './image/icon_interests.png';
import icon_interests_active from './image/icon_interests_active.png';
import icon_memo from './image/icon_memo.png';

function HeadhuntingComponent() {
  const [btn, setbtn] = useState(false);
  const [generalBtn, setgeneralBtn] = useState(true);
  const [toggle, settoggle] = useState(1);
  const JOB = 1;
  const ADDRESS = 2;
  const COMPANY = 3;
  const FORM = 4;
  const PERIOD = 5;
  const EDUCATION = 6;
  const TYPE = 7;
  const switchfunction = () => {
    switch (toggle) {
      case JOB:
        return <JobTreeComponent />;
      // case ADDRESS:
      //   return <JobTreeComponent />;
      // case COMPANY:
      //   return <JobTreeComponent />;
      // case FORM:
      //   return <JobTreeComponent />;
      // case PERIOD:
      //   return <JobTreeComponent />;
      // case EDUCATION:
      //   return <JobTreeComponent />;
      // case TYPE:
      //   return <JobTreeComponent />;
      default:
        break;
    }
  };
  const [actSkChecked, setActSkChecked] = useState(false);
  const [recentChecked, setRecentChecked] = useState(false);
  const [listSelected, setListSelected] = useState(false);
  return (
    <div className="headhunt-container">
      {/* <div className="filter-container">
        <button className="filter-search" onClick={() => setbtn(!btn)}>
          조건 검색
        </button>
        <Link to={'/headhunting'} className="filter-popular">
          인기 채용 공고
        </Link>
        <button className="filter-today" onClick={() => setgeneralBtn(true)}>
          오늘 마감 공고
        </button>
      </div> */}
      <div className="headhunt-content">
        <input className="search-input" placeholder="함께 인재를 찾아볼까요?" />
        <button
          className="search-btn"
          onChange={(e) => setKeyword(e.target.value)}
        >
          <span className="search-text">검색</span>
        </button>
        <button className="filter-search2" onClick={() => setbtn(!btn)}>
          조건 검색
        </button>
        {btn ? (
          <div className="search-popup">
            <div className="tab-container">
              <button className="tab-content" onClick={() => settoggle(JOB)}>
                직무
              </button>
              <button
                className="tab-content"
                onClick={() => settoggle(ADDRESS)}
              >
                지역
              </button>
              <button
                className="tab-content"
                onClick={() => settoggle(COMPANY)}
              >
                산업.기업
              </button>
              <button className="tab-content" onClick={() => settoggle(FORM)}>
                기업형태
              </button>
              <button className="tab-content" onClick={() => settoggle(PERIOD)}>
                경력기간
              </button>
              <button
                className="tab-content"
                onClick={() => settoggle(EDUCATION)}
              >
                학력
              </button>
              <button className="tab-content" onClick={() => settoggle(TYPE)}>
                고용형태
              </button>
              <input
                type="text"
                className="tab-content-input"
                placeholder="직무명을 입력해주세요."
              />
              {switchfunction(toggle)}
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <div className="headhunt-content-list">
          <div className="list-total-title">
            <span className="list-total">추천인재 (총 55명)</span>
            <span className="list-total-txt">
              해당 추천인재는 해당 기업의 산업군에서 근무 경력이 있는
              인재입니다.
            </span>
          </div>
          <div className="btn-wrapper">
            <div className="btn-row">
              <div className="btn-action">
                <button
                  className="select-button"
                  style={{
                    background: `url(${icon_chevron}) no-repeat 96px center`
                  }}
                >
                  전체선택
                </button>
                <button className="summit-button">관심인재 등록</button>
              </div>
              <div className="filter-wrapper">
                <div className="filter filter-01">
                  <div
                    className="checkbox"
                    onClick={() => setActSkChecked(!actSkChecked)}
                    style={{
                      background: actSkChecked
                        ? `url(${icon_chevron_active}) no-repeat center center`
                        : `url(${icon_chevron}) no-repeat center center`
                    }}
                    type="checkbox"
                  ></div>
                  <span className="txt">적극구직자만</span>
                </div>
                <div className="filter filter-02">
                  <div
                    className="checkbox"
                    onClick={() => setRecentChecked(!recentChecked)}
                    style={{
                      background: recentChecked
                        ? `url(${icon_chevron_active}) no-repeat center center`
                        : `url(${icon_chevron}) no-repeat center center`
                    }}
                    type="checkbox"
                  ></div>
                  <span className="txt">최근접속순</span>
                </div>
                <select className="view-list" name="view-list">
                  <option value="10">10개 씩</option>
                  <option value="20">20개 씩</option>
                  <option value="30">30개 씩</option>
                </select>
              </div>
            </div>
            <div className="btn-row tab-menu">
              <button className="tab-item tab-01 active">
                인재검색 결과 명
              </button>
              <button className="tab-item tab-01">관심인재 0명</button>
              <button className="tab-item tab-01">채용제안 0명</button>
              <button className="tab-item tab-01">제안수락 0명</button>
              <button className="tab-item tab-01">채용전형 0명</button>
            </div>
            <div className="result-list">
              <div
                className="list-checkbox"
                onClick={() => setListSelected(!listSelected)}
                style={{
                  background: listSelected
                    ? `url(${icon_chevron_active}) no-repeat center center`
                    : `url(${icon_chevron}) no-repeat center center`
                }}
                type="checkbox"
              ></div>
              <div className="left-result">
                <img className="list-img" src={profilePic} alt="" />
                <span className="name-span">이ㅇㅇ</span>
                <span className="status-span">적극구직중</span>
              </div>
              <div className="middle-result">
                <div className="title">
                  <span className="recent-company-title">최근회사</span>
                  <span className="recent-company">현대엔지니어링</span>
                  <span className="recent-company-date">
                    (2015.02 ~ 2020.06)
                  </span>
                  <span className="job-level">
                    경영분석,사업제휴,해외법인관리
                  </span>
                  <span className="recent-login">최근접속일 20.12.24</span>
                </div>
                <div className="bubble-wrap">
                  <span className="level4-bubble">lv4 들</span>
                  <span className="level4-bubble">lv4 들</span>
                  <span className="level4-bubble">lv4 들</span>
                </div>
                <div className="result-box">
                  <div className="experience-wrap">
                    <span
                      className="total"
                      style={{
                        background: `url(${icon_career}) no-repeat 0 1px`,
                        paddingLeft: `24px`
                      }}
                    >
                      총 경력 8년 1개월
                    </span>
                    <span className="experience">현대엔지니어(5년 11개월)</span>
                  </div>
                  <div className="edu-detail">
                    <span
                      className="name"
                      style={{
                        background: `url(${icon_edu}) no-repeat 0 1px`,
                        paddingLeft: `24px`
                      }}
                    >
                      고려대학교(학사)
                    </span>
                    <span className="major">경영경제</span>
                  </div>
                </div>
              </div>
              <div className="right-result">
                <button
                  className="interests"
                  style={{
                    background: `url(${icon_interests}) no-repeat 38px center`,
                    paddingLeft: `22px`
                  }}
                >
                  관심인재
                </button>
                <button
                  className="interests"
                  style={{
                    background: `url(${icon_memo}) no-repeat 38px center`,
                    paddingLeft: `22px`
                  }}
                >
                  메모하기
                </button>
                <button className="interests">이력없음</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeadhuntingComponent;
