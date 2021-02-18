import React, { useState, useRef } from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
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
import icon_bmk from './images/icon_bmk.png';
import icon_bmk_active from './images/icon_bmk_active.png';
import icon_profile from './images/icon_profile@2x.png';
import btn_prev_active from './images/btn_prev_active.png';
import btn_next_active from './images/btn_next_active.png';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql'
});
function MainComponent(props) {
  const BANNER_BUTTON = 1;
  const AD_BUTTON = 2;
  const RECRUIT_BUTTON = 3;
  const [btn, setbtn] = useState(BANNER_BUTTON);

  const [monthNum, setmonthNum] = useState(1);
  const [weekNum, setweekNum] = useState(1);
  //prettier-ignore
  const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
              11,12,13,14,15,16,17,18,19,20,
              21,22,23,24,25,26,27,28,29,30,
              31,32,33,34,35,36,37,38,39,40,
              41,42,43,44,45,46,47,48,49,50,
              51,52,53,54,55,56,57,58,59,60,
              61,62,63,64,65,66,67,68,69,70];
  const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dayItems = dayOfWeek.map((day) => {
    return (
      <div className="day" key={day.toString()}>
        <span className="txt">{`${day}`}</span>
        <span className="number">{`11/22`}</span>
      </div>
    );
  });

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
        //console.log('1');
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
        const PostsLists = () => {
          const ImgComp = () => {
            const [pinBmk, setPinBmk] = useState(false);
            return (
              <img
                className="bmk-ico"
                src={pinBmk ? icon_bmk_active : icon_bmk}
                onClick={() => {
                  setPinBmk(!pinBmk);
                }}
                alt="Icon_bookmark"
              />
            );
          };
          const item = id.map((id) => (
            <div className="calender-item" key={id.toString()}>
              <div className="img-wrap">
                <div className="img-inner">
                  <ImgComp />
                  <span className="closing-time">15:00</span>
                </div>
                <img src={logo_samsung} alt="img" className="logo" />
              </div>
              <div className="txt-wrap">
                <span className="corp-name">삼성전자 주식회사</span>
                <span className="txt">2020년 보험 영업</span>
              </div>
            </div>
          ));
          return item;
        };

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
              <div className="list-day">{dayItems}</div>
              <div className="calender-disp">
                <PostsLists />
              </div>
              <div className="btn-more-wrap">
                <button className="btn-more">+99</button>
                <button className="btn-more">+99</button>
                <button className="btn-more">+99</button>
                <button className="btn-more">+99</button>
                <button className="btn-more">+99</button>
                <button className="btn-more">+99</button>
                <button className="btn-more">+99</button>
              </div>
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
            <button
              className={`btn-item ${btn === 1 ? 'active' : null}`}
              onClick={() => setbtn(BANNER_BUTTON)}
            >
              <span className="btn-text">채용 공고</span>
            </button>
            <button
              className={`btn-item ${btn === 2 ? 'active' : null}`}
              onClick={() => setbtn(AD_BUTTON)}
            >
              <span className="btn-text">인기 공고</span>
            </button>
            <button
              className={`btn-item ${btn === 3 ? 'active' : null}`}
              onClick={() => setbtn(RECRUIT_BUTTON)}
            >
              <span className="btn-text">채용 달력</span>
            </button>
          </div>
          {/* 광고 banner layout */}
          {switchFuntion(btn)}
          <span className="span-content">오늘 이 공고, 놓치지 마세요!</span>
          <div className="banner-sm-cont">
            <div className="banner-sm day-bn-01">
              <div className="corp-txt-wrap">
                <div className="title">
                  <span className="company-name-lar">기업명</span>
                  <span className="closing-time">00:00에 마감</span>
                </div>
                <span className="company-name-mid">광고/제작/카피/CF</span>
                <span className="company-name-sm">#광고기획 #AE #광고제작</span>
              </div>
              <div className="overlay"></div>
              <img src={squre2} alt="squre2" />
            </div>
            <div className="banner-sm day-bn-02">
              <div className="corp-txt-wrap">
                <div className="title">
                  <span className="company-name-lar">기업명</span>
                  <span className="closing-time">00:00에 마감</span>
                </div>
                <span className="company-name-mid">광고/제작/카피/CF</span>
                <span className="company-name-sm">#광고기획 #AE #광고제작</span>
              </div>
              <div className="overlay"></div>
              <img src={squre3} alt="squre3" />
            </div>
            <div className="banner-sm day-bn-03">
              <div className="corp-txt-wrap">
                <div className="title">
                  <span className="company-name-lar">기업명</span>
                  <span className="closing-time">00:00에 마감</span>
                </div>
                <span className="company-name-mid">광고/제작/카피/CF</span>
                <span className="company-name-sm">#광고기획 #AE #광고제작</span>
              </div>
              <div className="overlay"></div>
              <img src={squre4} alt="squre4" />
            </div>
            <div className="banner-sm day-bn-04">
              <div className="corp-txt-wrap">
                <div className="title">
                  <span className="company-name-lar">기업명</span>
                  <span className="closing-time">00:00에 마감</span>
                </div>
                <span className="company-name-mid">광고/제작/카피/CF</span>
                <span className="company-name-sm">#광고기획 #AE #광고제작</span>
              </div>
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
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const appendRef = useRef(null);
  const [lvl1, setLvl1] = useState(0);
  const [lvl2, setLvl2] = useState(0);
  const [lvl3, setLvl3] = useState(0);
  const [curLvl, setCurLvl] = useState(1);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const addFuntion = () => {
    return appendRef.current.append();
  };
  const buttonItems = numbers.map((number) => (
    <ApolloProvider client={client}>
      <Query
        query={gql`
          {
            getCommonWork {
              ID
              VAL
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading</p>;
          if (error) return <p>error</p>;
          return data.getCommonWork.map(({ ID, VAL }) => (
            // <button
            //   key={number.toString()}
            //   className="lv1"
            //   onClick={() => {
            //     setSelected(!selected);
            //     setSelected3(false);
            //     console.log("i'm level 1");
            //   }}
            // >
            //   {VAL}
            // </button>
            <button
              key={ID}
              className={`lv1 ${lvl1 === ID ? 'active' : null}`}
              onClick={() => {
                setLvl1(ID);
                setActive2(false);
                setLvl2(ID);
                setCurLvl(2);
              }}
            >
              {VAL}
            </button>
          ));
        }}
      </Query>
    </ApolloProvider>
    // <button
    //   key={number.toString()}
    //   className={`lv1 ${lvl1 === number ? 'active' : null}`}
    //   onClick={() => {
    //     setLvl1(number);
    //     setActive1(true);
    //     setActive2(false);
    //     setCurLvl(0);
    //     setCurLvl(2);
    //   }}
    // >
    //   lv1.선택직무
    // </button>
  ));
  const button2Items = numbers.map((number) => (
    <button
      key={number.toString()}
      className={`lv2 ${
        lvl2 === number && curLvl >= 2 && active2 === true ? 'active' : null
      }`}
      disabled={curLvl >= 2 ? false : true}
      onClick={() => {
        setActive2(true);
        setActive3(false);
        setLvl2(number);
        setCurLvl(3);
      }}
    >
      lv2.선택직무
    </button>
  ));
  const button3Items = numbers.map((number) => (
    <button
      key={number.toString()}
      className={`lv3 ${
        lvl3 === number && curLvl === 3 && active3 === true ? 'active' : null
      }`}
      disabled={curLvl === 3 ? false : true}
      onClick={() => {
        setActive3(true);
        setLvl3(number);
      }}
    >
      lv3.선택직무
    </button>
  ));
  return (
    <div className="main-btn-cont">
      <div className="main-btn-wrap active">{buttonItems}</div>
      <div className={`main-btn-wrap ${curLvl > 1 ? 'active' : null}`}>
        {button2Items}
      </div>
      <div className={`main-btn-wrap ${curLvl > 2 ? 'active' : null}`}>
        {button3Items}
      </div>
      <div ref={appendRef} className="ad-content-append"></div>
    </div>
  );
};
