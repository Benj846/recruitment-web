import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/RecruitmentComponent';
import Footer from '../Footer/Footer';
//import 'react-slideshow-image/dist/styles.css';
import squre1 from '../Main/images/squre1.png';
import logo_kakao from './imgaes/logo_kakao@2x.png';
import icon from './imgaes/icon_heart_active_guide.png';
import { DirectiveLocation } from 'graphql';
function RecruitmentComponent(props) {
  const [btn, setbtn] = useState(false);
  const [toggle, settoggle] = useState(JOB);
  const [generalBtn, setgeneralBtn] = useState(true);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

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
        return <JobTree />;
      case ADDRESS:
        return <JobTree />;
      case COMPANY:
        return <JobTree />;
      case FORM:
        return <JobTree />;
      case PERIOD:
        return <JobTree />;
      case EDUCATION:
        return <JobTree />;
      case TYPE:
        return <JobTree />;
      default:
        break;
    }
  };

  const postItems = numbers.map((number) => <Post key={number.toString()} />);
  const imagePosts = numbers.map((number) => (
    <div className="asdf" key={number.toString()}>
      <div className="fjfj1">
        <img src={squre1} alt="squre1" />
      </div>
      <div className="fjfj">
        <img src={squre1} alt="squre1" />
      </div>
      <div className="fjfj">
        <img src={squre1} alt="squre1" />
      </div>
      <div className="fjfj">
        <img src={squre1} alt="squre1" />
      </div>
    </div>
  ));
  return (
    <>
      <div className="recruit-container">
        <div className="filter-container">
          <button className="filter-search" onClick={() => setbtn(!btn)}>
            조건 검색
          </button>
          <Link to={'/recruitment'} className="filter-popular">
            인기 채용 공고
          </Link>
          <button className="filter-today" onClick={() => setgeneralBtn(true)}>
            오늘 마감 공고
          </button>
        </div>
        <div className="recruit-content">
          <input
            className="search-input"
            placeholder="찾고 계신 채용 광고가 있나요?"
          />
          <button
            className="search-btn"
            onChange={(e) => setKeyword(e.target.value)}
          >
            <span className="search-text">검색</span>
          </button>
          <button className="filter-search2" onClick={() => setbtn(!btn)}>
            조건 검색
          </button>
          <div className="span-container">
            <span className="text-span">인기 채용 공고</span>
            <button className="btn-power" onClick={() => setgeneralBtn(true)}>
              파워공고
            </button>
            <button className="btn-common" onClick={() => setgeneralBtn(false)}>
              일반공고
            </button>
            <span className="more-span">더 보기</span>
          </div>
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
                <button
                  className="tab-content"
                  onClick={() => settoggle(PERIOD)}
                >
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
                  placeholder="직무명을 입력해주세요"
                />
                {switchfunction(toggle)}
              </div>
            </div>
          ) : (
            <div></div>
          )}

          {/* 광고 banner layout */}
          {generalBtn ? <>{imagePosts}</> : <>{postItems}</>}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default RecruitmentComponent;

// JobTree component
const JobTree = () => {
  const [selected, setSelected] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [addState, setaddState] = useState(false);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const appendRef = useRef(null);
  const addFuntion = () => {
    return appendRef.current.append(<div>laskdjflk</div>);
  };
  const buttonItems = numbers.map((number) => (
    <button
      key={number.toString()}
      className="lv1"
      onClick={() => {
        setSelected(!selected);
        setSelected3(false);
        console.log("i'm level 1");
      }}
    >
      lv1.선택직무
    </button>
  ));
  const button2Items = numbers.map((number) => (
    <button
      key={number.toString()}
      className="lv2"
      disabled={!selected}
      onClick={() => setSelected3(!selected3)}
    >
      lv2.선택직무
    </button>
  ));
  const button3Items = numbers.map((number) => (
    <button
      key={number.toString()}
      className="lv1"
      disabled={!selected3}
      onClick={addFuntion}
    >
      lv3.선택직무
    </button>
  ));

  const addDescription = (e) => {
    return (
      <div className="added">
        <span>직무</span>
        <p>{console.log(e.target.innerText)}</p>
      </div>
    );
  };
  return (
    <div className="ad-container">
      <div className="button-container">{buttonItems}</div>
      <div className="button-container">{button2Items}</div>
      <div className="button-container">{button3Items}</div>
      <div ref={appendRef} className="ad-content-append"></div>
    </div>
  );
};

// Post component
const Post = (props) => {
  return (
    <div className="general-container">
      <div className="general-content">
        <div className="d-day">
          <span>D-15</span>
        </div>
        <div className="fav-btn">
          <div>
            <span>관심기업</span>
            <img src={icon} alt="icon_heart_active_guide" />
          </div>
        </div>
        <div className="company-name">(주)카카오커머스</div>
        <div className="date">2020.05.05 16:00</div>
      </div>
      <div className="vertical-line"></div>
      <div className="logo-container">
        <img className="company-logo" src={logo_kakao} alt="logo_kakao" />
      </div>
      <div className="detail-container">
        <div className="wrapper">
          <div className="position-name">[카카오커머스] 서비스 직군 모집</div>
          <div className="bookmark">
            <div>
              <span>관심기업</span>
              <img src={icon} alt="icon_heart_active_guide" />
            </div>
          </div>
        </div>
        <div className="details">
          <span>경기 성남시 </span>
          <span className="margin-only">정규직, 계약직 </span>
          <span className="margin-only">학력무관 </span>
          <span className="margin-only">경력2년 이상 </span>
        </div>
        <div className="details-second">
          <span>#라이브커머스기획</span>
          <span>#상품기획및소싱</span>
          <span>#카테고리영역확대</span>
          <span>#쇼핑몰MD</span>
        </div>
      </div>
    </div>
  );
};
