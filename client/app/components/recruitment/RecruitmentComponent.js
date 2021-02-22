import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import JobTreeComponent from './switchMenu/JobTreeComponent';
import '../../styles/RecruitmentComponent';
import Footer from '../Footer/Footer';
//import 'react-slideshow-image/dist/styles.css';
import ImageGallery from 'react-image-gallery';
import slide_1 from '../Main/images/slide_1.png';
import slide_2 from '../Main/images/slide_2.png';
import slide_3 from '../Main/images/slide_3.png';
import slide_4 from '../Main/images/slide_4.png';
import squre1 from '../Main/images/squre1.png';
import logo_kakao from './images/logo_kakao@2x.png';
import icon_heart from './images/icon_heart.png';
import icon_heart_active from './images/icon_heart_active.png';
import icon_bmk from './images/icon_bmk.png';
import icon_bmk_active from './images/icon_bmk_active.png';

function RecruitmentComponent(props) {
  const [btn, setbtn] = useState(false);
  const [toggle, settoggle] = useState(1);
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
        return <JobTreeComponent />;
      case ADDRESS:
        return <JobTreeComponent />;
      case COMPANY:
        return <JobTreeComponent />;
      case FORM:
        return <JobTreeComponent />;
      case PERIOD:
        return <JobTreeComponent />;
      case EDUCATION:
        return <JobTreeComponent />;
      case TYPE:
        return <JobTreeComponent />;
      default:
        break;
    }
  };
  const images = [
    {
      original: slide_1,
      renderItem: () => (
        <div className="custom-slide">
          <div className="text-wrap">
            <div className="title">
              <span className="company-name-lar">기업명</span>
            </div>
            <span className="company-name-mid">광고/제작/카피/CF</span>
            <div className="detail">
              <span className="closing-time">00:00에 마감</span>
              <span className="company-name-sm">#광고기획 #AE #광고제작</span>
            </div>
          </div>
          <img className="image-gallery-image" src={slide_1} alt="" />
        </div>
      )
    },
    {
      original: slide_2,
      renderItem: () => (
        <div className="custom-slide">
          <div className="text-wrap">
            <div className="title">
              <span className="company-name-lar">기업명</span>
            </div>
            <span className="company-name-mid">광고/제작/카피/CF</span>
            <div className="detail">
              <span className="closing-time">00:00에 마감</span>
              <span className="company-name-sm">#광고기획 #AE #광고제작</span>
            </div>
          </div>
          <img className="image-gallery-image" src={slide_2} alt="" />
        </div>
      )
    },
    {
      original: slide_3,
      renderItem: () => (
        <div className="custom-slide">
          <div className="text-wrap">
            <div className="title">
              <span className="company-name-lar">기업명</span>
            </div>
            <span className="company-name-mid">광고/제작/카피/CF</span>
            <div className="detail">
              <span className="closing-time">00:00에 마감</span>
              <span className="company-name-sm">#광고기획 #AE #광고제작</span>
            </div>
          </div>
          <img className="image-gallery-image" src={slide_3} alt="" />
        </div>
      )
    },
    {
      original: slide_4,
      renderItem: () => (
        <div className="custom-slide">
          <div className="text-wrap">
            <div className="title">
              <span className="company-name-lar">기업명</span>
            </div>
            <span className="company-name-mid">광고/제작/카피/CF</span>
            <div className="detail">
              <span className="closing-time">00:00에 마감</span>
              <span className="company-name-sm">#광고기획 #AE #광고제작</span>
            </div>
          </div>
          <img className="image-gallery-image" src={slide_4} alt="" />
        </div>
      )
    }
  ];

  const postItems = numbers.map((number) => <Post key={number.toString()} />);
  const imagePosts = numbers.map((number) => (
    <div className="recruit-banner-cont" key={number.toString()}>
      <div className="banner-sm">
        <div className="corp-txt-wrap">
          <div className="title">
            <span className="company-name-lar">기업명</span>
            <span className="closing-time">21.10.27~20.12.05 00:00</span>
          </div>
          <span className="company-name-mid">광고/제작/카피/CF</span>
          <span className="company-name-sm">#광고기획 #AE #광고제작</span>
        </div>
        <div className="overlay"></div>
        <img src={squre1} alt="squre1" />
      </div>
      <div className="banner-sm">
        <div className="corp-txt-wrap">
          <div className="title">
            <span className="company-name-lar">기업명</span>
            <span className="closing-time">21.10.27~20.12.05 00:00</span>
          </div>
          <span className="company-name-mid">광고/제작/카피/CF</span>
          <span className="company-name-sm">#광고기획 #AE #광고제작</span>
        </div>
        <div className="overlay"></div>
        <img src={squre1} alt="squre1" />
      </div>
      <div className="banner-sm">
        <div className="corp-txt-wrap">
          <div className="title">
            <span className="company-name-lar">기업명</span>
            <span className="closing-time">21.10.27~20.12.05 00:00</span>
          </div>
          <span className="company-name-mid">광고/제작/카피/CF</span>
          <span className="company-name-sm">#광고기획 #AE #광고제작</span>
        </div>
        <div className="overlay"></div>
        <img src={squre1} alt="squre1" />
      </div>
      <div className="banner-sm">
        <div className="corp-txt-wrap">
          <div className="title">
            <span className="company-name-lar">기업명</span>
            <span className="closing-time">21.10.27~20.12.05 00:00</span>
          </div>
          <span className="company-name-mid">광고/제작/카피/CF</span>
          <span className="company-name-sm">#광고기획 #AE #광고제작</span>
        </div>
        <div className="overlay"></div>
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
          <div className="recruit-title">
            <span className="title">인기 채용 공고</span>
            <button
              className={`btn-power ${generalBtn ? 'active' : null}`}
              onClick={() => setgeneralBtn(true)}
            >
              파워공고
            </button>
            <button
              className={`btn-common ${generalBtn ? null : 'active'}`}
              onClick={() => setgeneralBtn(false)}
            >
              일반공고
            </button>
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
                  placeholder="직무명을 입력해주세요."
                />
                {switchfunction(toggle)}
              </div>
            </div>
          ) : (
            <div></div>
          )}

          {/* 광고 banner layout */}
          {generalBtn ? (
            <>
              <div className="banner-lg-cont">
                <ImageGallery
                  items={images}
                  showThumbnails={false}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  showNav={false}
                  showBullets={true}
                  autoPlay={true}
                  flickThreshold={0}
                  // more info on react-image-gallery
                />
              </div>
              {imagePosts}
            </>
          ) : (
            <>{postItems}</>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default RecruitmentComponent;

// Post component
const Post = (props) => {
  const [pinCorp, setpinCorp] = useState(false);
  const [pinBmk, setpinBmk] = useState(false);

  return (
    <div className="general-container">
      <div className="general-content">
        <div className="d-day">
          <span>D-15</span>
        </div>
        <div
          className={`fav-btn ${pinCorp ? 'active' : null}`}
          onClick={() => {
            setpinCorp(!pinCorp);
          }}
        >
          <span className={`fav-txt ${pinCorp ? 'active' : null}`}>
            관심기업
          </span>
          <img
            className="fav-ico"
            src={pinCorp ? icon_heart_active : icon_heart}
            alt="icon heart"
          />
        </div>
        <div className="desc">
          <span className="company-name">(주)카카오커머스</span>
          <span className="date">2020.05.05 16:00</span>
        </div>
      </div>
      <div className="logo-container">
        <img className="company-logo" src={logo_kakao} alt="logo_kakao" />
      </div>
      <div className="detail-container">
        <div className="wrapper">
          <div className="position-name">[카카오커머스] 서비스 직군 모집</div>
          <div
            className={`bookmark ${pinBmk ? 'active' : null}`}
            onClick={() => {
              setpinBmk(!pinBmk);
            }}
          >
            <span className={`bmk-txt ${pinBmk ? 'active' : null}`}>
              관심공고
            </span>
            <img
              className="bmk-ico"
              src={pinBmk ? icon_bmk_active : icon_bmk}
              alt="icon bookmark"
            />
          </div>
        </div>
        <div className="details">
          <span className="txt location">경기 성남시</span>
          <span className="txt position">정규직, 계약직</span>
          <span className="txt greade">학력무관</span>
          <span className="txt career">경력2년 이상</span>
        </div>
        <div className="details-second">
          <span className="txt">#라이브커머스기획</span>
          <span className="txt">#상품기획및소싱</span>
          <span className="txt">#카테고리영역확대</span>
          <span className="txt">#쇼핑몰MD</span>
        </div>
      </div>
    </div>
  );
};
