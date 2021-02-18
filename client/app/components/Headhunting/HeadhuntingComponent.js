import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HeadhuntingComponent';
import JobTreeComponent from '../recruitment/switchMenu/JobTreeComponent';
import ProfilePic from './image/img_profile.png';

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
          <span className="list-total">
            추천인재 (총 55명) 해당 추천인재는 해당 기업의 산업군에서 근무
            경력이 있는 인재입니다.
          </span>
          <div className="btn-wapper">
            <button className="select-button">전체선택</button>
            <button className="summit-button">관심인재 등록</button>
            <div className="filter-wrapper">
              <input type="checkbox" />
              <span>적극구직자만</span>
              <input type="checkbox" />
              <span>최근접속순</span>
              <select name="view-list">
                <option value="10">10개 씩</option>
                <option value="20">20개 씩</option>
                <option value="30">30개 씩</option>
              </select>
            </div>
            <div className="btn-rows">
              <button>인재검색 결과 명</button>
              <button>관심인재 0명</button>
              <button>채용제안 0명</button>
              <button>제안수락 0명</button>
              <button>채용전형 0명</button>
            </div>
            <div className="result-list">
              <input
                className="list-checkbox"
                type="checkbox"
                name="list-checkbox"
              />
              <div className="left-result">
                <img className="list-img" src={ProfilePic} alt="" />
                <span className="name-span">이ㅇㅇ</span>
                <span className="status-span">적극구직중</span>
              </div>
              <div className="middle-result">
                <span>최근회사 </span>
                <span className="recent-company">
                  현대엔지니어링 (2015.02 ~ 2020.06)
                </span>
                <span className="job-level">
                  경영분석,사업제휴,해외법인관리
                </span>
                <span className="recent-login"> 최근접속일 20.12.24</span>
                <br />
                <span className="level4-bubble">lv4 들</span>
                <span className="level4-bubble">lv4 들</span>
                <span className="level4-bubble">lv4 들</span>
                <div className="result-box">
                  <div className="total-exprience">총 경력 8년 1개월</div>
                  <div className="edu-detail">고려대학교(학사)</div>
                </div>
              </div>
              <div className="right-result">
                <button className="interests">관심인재</button>
                <button className="interests">메모하기</button>
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
