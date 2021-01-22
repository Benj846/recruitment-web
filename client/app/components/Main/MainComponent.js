import React, { useState } from 'react';
import '../../styles/MainComponent';
import Footer from '../Footer/Footer';
//import 'react-slideshow-image/dist/styles.css';
import ImageGallery from 'react-image-gallery';
import resume from './images/resume.svg';
import hangeul from './images/hangeul.svg';
import gradu from './images/gradu.svg';
import certificate from './images/certificate.svg';
import calcu from './images/calcu.svg';
import slide_1 from './images/slide_1.png';
import slide_2 from './images/slide_2.png';
import slide_3 from './images/slide_3.png';
import slide_4 from './images/slide_4.png';
import long from './images/long.png';
import squre1 from './images/squre1.png';
import squre2 from './images/squre2.jpg';
import squre3 from './images/squre3.jpg';
import squre4 from './images/squre4.jpg';
import squre5 from './images/squre5.jpg';
import logo_samsung from './images/logo_samsung.png';
import icon_bookmark from './images/icon_bookmark.png';
import icon_profile from './images/icon_profile@2x.png';
import btn_prev_active from './images/btn_prev_active.png';
import btn_next_active from './images/btn_next_active.png';

function MainComponent(props) {
  const BANNER_BUTTON = 1;
  const AD_BUTTON = 2;
  const RECRUIT_BUTTON = 3;
  const [btn, setbtn] = useState(RECRUIT_BUTTON);

  const [monthNum, setmonthNum] = useState(1);
  const [weekNum, setweekNum] = useState(1);

  const calenderItems = [];
  for (let i = 0; i < 70; i++) {
    calenderItems.push(
      <div className="calender-item" key={i}>
        <div className="img-wrap">
          <div className="img-inner">
            <img src={icon_bookmark} alt="Icon_bookmark" className="bookmark" />
            <span className="closing-time">15:00</span>
          </div>
          <img src={logo_samsung} alt="img" className="logo" />
        </div>
        <div className="txt-wrap">
          <span className="corp-name">삼성전자 주식회사</span>
          <span className="txt">2020년 보험 영업</span>
        </div>
      </div>
    );
  }

  const images = [
    {
      overlay: `<div className="overlay"></div>`,
      original: slide_1
    },
    {
      original: slide_2
    },
    {
      original: slide_3
    },
    {
      original: slide_4
    }
  ];
  const switchFuntion = (btn) => {
    switch (btn) {
      case 1:
        console.log('1');
        return (
          <div className="banner-container">
            <div className="banner-lg-cont">
              <ImageGallery
                items={images}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                showNav={false}
                showBullets={true}
                autoPlay={true}
                // more info on react-image-gallery
              />
            </div>
            <div className="banner-md-cont">
              <div className="banner-md bn-md-01">
                <div className="overlay"></div>
                <img src={long} alt="long" />
              </div>
              <div className="banner-md bn-md-02">
                <div className="overlay"></div>
                <img src={long} alt="long" />
              </div>
            </div>
            <div className="banner-md-cont">
              <div className="banner-md bn-md-03">
                <div className="overlay"></div>
                <img src={long} alt="long" />
              </div>
              <div className="banner-md bn-md-04">
                <div className="overlay"></div>
                <img src={long} alt="long" />
              </div>
            </div>
            <div className="banner-sm-cont">
              <div className="banner-sm bn-sm-01">
                <div className="overlay"></div>
                <img src={squre1} alt="squre1" />
              </div>
              <div className="banner-sm bn-sm-02">
                <div className="overlay"></div>
                <img src={squre1} alt="squre1" />
              </div>
              <div className="banner-sm bn-sm-03">
                <div className="overlay"></div>
                <img src={squre1} alt="squre1" />
              </div>
              <div className="banner-sm bn-sm-04">
                <div className="overlay"></div>
                <img src={squre1} alt="squre1" />
              </div>
            </div>
          </div>
        );
      case 2:
        console.log('2');
        return <JobTree />;

      case 3:
        console.log('3');

        return (
          <div className="calender-container">
            <div className="calender-content-date">
              <button
                className="calender-left"
                onClick={() => setweekNum(weekNum - 1)}
              >
                <span
                  className="ico"
                  style={{
                    background: `url(${btn_prev_active}) no-repeat center center`
                  }}
                ></span>
              </button>
              <div className="calender-span">
                <span className="mon">{monthNum}</span>
                <span>월 </span>
                <span className="day">{weekNum}</span>
                <span>주차 마감 공고</span>
              </div>
              <button
                className="calender-right"
                onClick={() => setweekNum(weekNum + 1)}
              >
                <span
                  className="ico"
                  style={{
                    background: `url(${btn_next_active}) no-repeat center center`
                  }}
                ></span>
              </button>
            </div>
            <div className="calender-inner">
              <div className="calender-disp">{calenderItems}</div>
            </div>
          </div>
        );
      default:
        break;
    }
  };
  return (
    <>
      <div className="recruit-container">
        <div className="recruit-content">
          <input
            className="search-input"
            placeholder="찾고 계신 채용 공고가 있나요?"
          />
          <button
            className="search-btn"
            onChange={(e) => setKeyword(e.target.value)}
          >
            검색
          </button>
          <div className="status-div">
            <img
              src={icon_profile}
              alt="Icon_profile"
              className="icon-profile"
            />
            <span className="text">
              이력서를 완성하고 담당자에게 전문적인 추천을 받아보세요
            </span>
            <button className="btn">이력서 완성하기</button>
          </div>
          <div className=""></div>
          <div className="btn-content">
            <button className="btn-item" onClick={() => setbtn(BANNER_BUTTON)}>
              <span className="btn-text">채용 공고</span>
            </button>
            <button className="btn-item" onClick={() => setbtn(AD_BUTTON)}>
              <span className="btn-text">인기 공고</span>
            </button>
            <button className="btn-item" onClick={() => setbtn(RECRUIT_BUTTON)}>
              <span className="btn-text">채용 달력</span>
            </button>
          </div>
          {/* 광고 banner layout */}
          {switchFuntion(btn)}
          <span className="span-content">오늘 이 공고, 놓치지 마세요!</span>
          <div className="banner-sm-cont">
            <div className="banner-sm day-bn-01">
              <duv className="corp-txt-wrap">
                <div className="title">
                  <span className="company-name-lar">기업명</span>
                  <span className="closing-time">00:00에 마감</span>
                </div>
                <span className="company-name-mid">광고/제작/카피/CF</span>
                <span className="company-name-sm">#광고기획 #AE #광고제작</span>
              </duv>
              <div className="overlay"></div>
              <img src={squre2} alt="squre2" />
            </div>
            <div className="banner-sm day-bn-02">
              <duv className="corp-txt-wrap">
                <div className="title">
                  <span className="company-name-lar">기업명</span>
                  <span className="closing-time">00:00에 마감</span>
                </div>
                <span className="company-name-mid">광고/제작/카피/CF</span>
                <span className="company-name-sm">#광고기획 #AE #광고제작</span>
              </duv>
              <div className="overlay"></div>
              <img src={squre3} alt="squre3" />
            </div>
            <div className="banner-sm day-bn-03">
              <duv className="corp-txt-wrap">
                <div className="title">
                  <span className="company-name-lar">기업명</span>
                  <span className="closing-time">00:00에 마감</span>
                </div>
                <span className="company-name-mid">광고/제작/카피/CF</span>
                <span className="company-name-sm">#광고기획 #AE #광고제작</span>
              </duv>
              <div className="overlay"></div>
              <img src={squre4} alt="squre4" />
            </div>
            <div className="banner-sm day-bn-04">
              <duv className="corp-txt-wrap">
                <div className="title">
                  <span className="company-name-lar">기업명</span>
                  <span className="closing-time">00:00에 마감</span>
                </div>
                <span className="company-name-mid">광고/제작/카피/CF</span>
                <span className="company-name-sm">#광고기획 #AE #광고제작</span>
              </duv>
              <div className="overlay"></div>
              <img src={squre5} alt="squre5" />
            </div>
          </div>
          <span className="span-content">이력서 작성이 어려우신가요?</span>
          <div className="help-cont">
            <div className="help-item">
              <div className="circul">
                <img src={resume} alt="resume" />
              </div>
              <span className="img-span">이력서 작성하기</span>
            </div>
            <div className="help-item">
              <div className="circul">
                <img src={hangeul} alt="hangeul" />
              </div>
              <span className="img-span">글자수 세기</span>
            </div>
            <div className="help-item">
              <div className="circul">
                <img src={calcu} alt="calcu" />
              </div>
              <span className="img-span">글자수 세기</span>
            </div>
            <div className="help-item">
              <div className="circul">
                <img src={gradu} alt="gradu" />
              </div>
              <span className="img-span">학점 계산하기</span>
            </div>
            <div className="help-item">
              <div className="circul">
                <img src={certificate} alt="certificate" />
              </div>
              <span className="img-span">학점 계산하기</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default MainComponent;

const JobTree = () => {
  const [selected, setSelected] = useState(false);
  const [selected3, setSelected3] = useState(false);
  return (
    <div className="main-btn-cont">
      <div className="main-btn-wrap btn-wrap-01 active">
        <button
          className="lv1 test-01"
          onClick={() => {
            setSelected(!selected);
            setSelected3(false);
            let btnWrap = document.querySelector('.main-btn-wrap.btn-wrap-02');
            btnWrap.classList.add('active');
            let btnEl = document.querySelector('.test-01');
            btnEl.classList.add('active');
          }}
        >
          lv1.선택직무1
        </button>
        <button
          className="lv1"
          onClick={() => {
            setSelected(!selected);
            setSelected3(false);
          }}
        >
          lv1.선택직무2
        </button>
        <button
          className="lv1"
          onClick={() => {
            setSelected(!selected);
            setSelected3(false);
          }}
        >
          lv1.선택직무3
        </button>
        <button
          className="lv1"
          onClick={() => {
            setSelected(!selected);
            setSelected3(false);
          }}
        >
          lv1.선택직무
        </button>
        <button
          className="lv1"
          onClick={() => {
            setSelected(!selected);
            setSelected3(false);
          }}
        >
          lv1.선택직무
        </button>
        <button
          className="lv1"
          onClick={() => {
            setSelected(!selected);
            setSelected3(false);
          }}
        >
          lv1.선택직무
        </button>
        <button
          className="lv1"
          onClick={() => {
            setSelected(!selected);
            setSelected3(false);
          }}
        >
          lv1.선택직무
        </button>
        <button
          className="lv1"
          onClick={() => {
            setSelected(!selected);
            setSelected3(false);
          }}
        >
          lv1.선택직무
        </button>
        <button
          className="lv1"
          onClick={() => {
            setSelected(!selected);
            setSelected3(false);
          }}
        >
          lv1.선택직무
        </button>
      </div>
      <div className="main-btn-wrap btn-wrap-02">
        <button
          className="lv2 test-02"
          disabled={!selected}
          onClick={() => {
            setSelected3(!selected3);
            let btnWrap = document.querySelector('.main-btn-wrap.btn-wrap-03');
            btnWrap.classList.add('active');
            let btnEl = document.querySelector('.test-02');
            btnEl.classList.add('active');
          }}
        >
          lv2.선택직무
        </button>
        <button
          className="lv2"
          disabled={!selected}
          onClick={() => setSelected3(!selected3)}
        >
          lv2.선택직무
        </button>
        <button
          className="lv2"
          disabled={!selected}
          onClick={() => setSelected3(!selected3)}
        >
          lv2.선택직무
        </button>
        <button
          className="lv2"
          disabled={!selected}
          onClick={() => setSelected3(!selected3)}
        >
          lv2.선택직무
        </button>
        <button
          className="lv2"
          disabled={!selected}
          onClick={() => setSelected3(!selected3)}
        >
          lv2.선택직무
        </button>
        <button
          className="lv2"
          disabled={!selected}
          onClick={() => setSelected3(!selected3)}
        >
          lv2.선택직무
        </button>
        <button
          className="lv2"
          disabled={!selected}
          onClick={() => setSelected3(!selected3)}
        >
          lv2.선택직무
        </button>
        <button
          className="lv2"
          disabled={!selected}
          onClick={() => setSelected3(!selected3)}
        >
          lv2.선택직무
        </button>
        <button
          className="lv2"
          disabled={!selected}
          onClick={() => setSelected3(!selected3)}
        >
          lv2.선택직무
        </button>
      </div>
      <div className="main-btn-wrap btn-wrap-03">
        <button className="lv3" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv3" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv3" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv3" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv3" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv3" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv3" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv3" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv3" disabled={!selected3}>
          lv3.선택직무
        </button>
      </div>
    </div>
  );
};
