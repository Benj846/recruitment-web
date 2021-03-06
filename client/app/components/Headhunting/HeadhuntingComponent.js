import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HeadhuntingComponent';
import JobTreeComponent from '../recruitment/switchMenu/JobTreeComponent';
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
          ?????? ??????
        </button>
        <Link to={'/headhunting'} className="filter-popular">
          ?????? ?????? ??????
        </Link>
        <button className="filter-today" onClick={() => setgeneralBtn(true)}>
          ?????? ?????? ??????
        </button>
      </div> */}
      <div className="headhunt-content">
        <input className="search-input" placeholder="?????? ????????? ????????????????" />
        <button
          className="search-btn"
          onChange={(e) => setKeyword(e.target.value)}
          onClick={() => loadingList()}
        >
          <span className="search-text">??????</span>
        </button>
        <button className="filter-search2" onClick={() => setbtn(!btn)}>
          ?????? ??????
        </button>
        {/* --------------conditional rendering----------- */}
        {btn ? (
          <div className="search-popup">
            <div className="tab-container">
              <button className="tab-content" onClick={() => settoggle(JOB)}>
                ??????
              </button>
              <button
                className="tab-content"
                onClick={() => settoggle(ADDRESS)}
              >
                ??????
              </button>
              <button
                className="tab-content"
                onClick={() => settoggle(COMPANY)}
              >
                ??????.??????
              </button>
              <button className="tab-content" onClick={() => settoggle(FORM)}>
                ????????????
              </button>
              <button className="tab-content" onClick={() => settoggle(PERIOD)}>
                ????????????
              </button>
              <button
                className="tab-content"
                onClick={() => settoggle(EDUCATION)}
              >
                ??????
              </button>
              <button className="tab-content" onClick={() => settoggle(TYPE)}>
                ????????????
              </button>
              <input
                type="text"
                className="tab-content-input"
                placeholder="???????????? ??????????????????."
              />
              {switchfunction(toggle)}
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <div className="headhunt-content-list">
          <div className="list-total-title">
            <span className="list-total">???????????? (??? 55???)</span>
            <span className="list-total-txt">
              ?????? ??????????????? ?????? ????????? ??????????????? ?????? ????????? ??????
              ???????????????.
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
                  ????????????
                </button>
                <button className="summit-button">???????????? ??????</button>
                <button
                  className="summit-button"
                  onClick={() => {
                    setCheck(!check);
                  }}
                >
                  ?????? ?????????
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
                  <span className="txt">??????????????????</span>
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
                  <span className="txt">???????????????</span>
                </div>
                <select className="view-list" name="view-list">
                  <option value="10">10??? ???</option>
                  <option value="20">20??? ???</option>
                  <option value="30">30??? ???</option>
                </select>
              </div>
            </div>
            <div className="btn-row tab-menu">
              <button className="tab-item tab-01 active">
                ???????????? ?????? ???
              </button>
              <button className="tab-item tab-01">???????????? 0???</button>
              <button className="tab-item tab-01">???????????? 0???</button>
              <button className="tab-item tab-01">???????????? 0???</button>
              <button className="tab-item tab-01">???????????? 0???</button>
            </div>
            <div className="Component-wrapper">
              {/* {called && loading && <p>loading</p>} */}
              {/* {error && <p>error message is : {error.message}</p>} */}
              {/* {data && Object.keys(data.getRSM_CARR)} */}
              {data &&
                data.getRSM_CARR.map((name) => (
                  <div key={name.ID} className="result-list">
                    {console.log(data)}
                    <div
                      className="list-checkbox"
                      type="checkbox"
                      name="list-checkbox"
                      onClick={() => setListSelected(!listSelected)}
                      style={{
                        background: listSelected
                          ? `url(${icon_chevron_active}) no-repeat center center`
                          : `url(${icon_chevron}) no-repeat center center`
                      }}
                    ></div>
                    <div className="left-result">
                      <img className="list-img" src={profilePic} alt="" />
                      <span className="name-span">{name.NAME}</span>
                      <span className="status-span">???????????????</span>
                    </div>
                    <div className="middle-result">
                      <div className="title">
                        <span className="recent-company-title">????????????</span>
                        <span className="recent-company">{name.COR_NAME}</span>
                        <span className="recent-company-date">
                          ({name.CSTART_DATE} ~ {name.CEND_DATE})
                        </span>
                        <span className="job-level">{name.WRK_LV3}</span>
                        <span className="recent-login">
                          ??????????????? 2021.02.17
                        </span>
                      </div>
                      <div className="bubble-wrap">
                        <span className="level4-bubble">{name.WRK_LV4}</span>
                        <span className="level4-bubble">{name.WRK_LV4}</span>
                        <span className="level4-bubble">{name.WRK_LV4}</span>
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
                            ??? ?????? 8??? 1??????
                          </span>
                          <span className="experience">
                            {name.COR_NAME}(5??? 11??????)
                          </span>
                        </div>
                        <div className="edu-detail">
                          <span
                            className="name"
                            style={{
                              background: `url(${icon_edu}) no-repeat 0 1px`,
                              paddingLeft: `24px`
                            }}
                          >
                            {name.UNIV_NAME}({name.TYPE})
                          </span>
                          <span className="major">{name.MAJOR}</span>
                        </div>
                      </div>
                    </div>
                    <div className="right-result">
                      <button
                        className="interests"
                        style={{
                          background: `url(${
                            star ? icon_interests_active : icon_interests
                          }) no-repeat 38px center`,
                          paddingLeft: `22px`
                        }}
                        onClick={() => setStar(!star)}
                      >
                        ????????????
                      </button>
                      <button
                        className="interests"
                        style={{
                          background: `url(${icon_memo}) no-repeat 38px center`,
                          paddingLeft: `22px`
                        }}
                      >
                        ????????????
                      </button>
                      <button className="interests">????????????</button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* --------------conditional rendering----------- */}
      {check ? (
        <div className="popup-propos">
          <div className="popup-content">
            <div className="banner">
              <span className="name">???????????? ????????????</span>
            </div>
            <div className="close" onClick={() => setCheck(!check)}>
              close
            </div>
            <div className="saved-info">
              ????????????
              <br />
              <select name="saved-list" id="nothing">
                <option value="????????????(??????)">????????????(??????)</option>
                <option value="????????????(??????)">????????????(??????)</option>
                <option value="????????????(??????)">????????????(??????)</option>
              </select>
            </div>
            <div className="basic">????????????1</div>
            <div className="basic">????????????2</div>
            <div className="basic">????????????3</div>
            <div className="basic">????????????4</div>
            <div className="basic">????????????5</div>
            <div className="basic">????????????6</div>
            <div className="basic">????????????7</div>
            <div className="basic">????????????8</div>
            <div className="basic">????????????9</div>
            <button className="basic-summit">submit</button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default HeadhuntingComponent;

// const ResultLists = () => {

//   return (

//   );
// };
