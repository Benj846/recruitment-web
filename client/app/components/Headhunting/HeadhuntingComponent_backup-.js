import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HeadhuntingComponent';
import JobTreeComponent from '../recruitment/switchMenu/JobTreeComponent';
import Button from './tab_button/index';
import profilePic from './image/img_profile.png';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
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
  const [check, setCheck] = useState(false);
  const [storeData, setStoreData] = useState();
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
  // const [listSelected, setListSelected] = useState(false);
  const [search, setsearch] = useState(false);
  const [listSelected, setListSelected] = useState(false);
  const [star, setStar] = useState(false);
  const GET_TEST_WORK = gql`
    {
      getRSM_CARR {
        ID
        COR_NAME
        COR_IDX
        CSTART_DATE
        CEND_DATE
        WRK_LV3
        WRK_LV4
        NAME
        WRK_STATUS
        LGN_DATE
        UID
        UNIV_NAME
        UNIV_IDX1
        UNIV_IDX2
        TYPE
        MAJOR
      }
      getDefaultWork(LV: 1) {
        VAL
      }
    }
  `;
  const [loadingList, { called, loading, data }] = useLazyQuery(GET_TEST_WORK, {
    fetchPolicy: 'cache-and-network'
  });
  // if (loading) return <p></p>;
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
          onClick={() => loadingList()}
        >
          <span className="search-text">검색</span>
        </button>
        <button className="filter-search2" onClick={() => setbtn(!btn)}>
          조건 검색
        </button>
        {/* --------------conditional rendering----------- */}
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
                <button
                  className="summit-button"
                  onClick={() => {
                    setCheck(!check);
                  }}
                >
                  제안 보내기
                </button>
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
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadhuntingComponent;

// const ResultLists = () => {

//   return (

//   );
// };
