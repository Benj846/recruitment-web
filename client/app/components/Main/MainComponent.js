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
import squre2 from './images/squre2.png';
import squre3 from './images/squre3.png';
import squre4 from './images/squre4.png';
import squre5 from './images/squre5.png';
import logo_samsung from './images/logo_samsung.png';
import icon_bookmark from './images/icon_bookmark.png';

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
              61,62,63,64,65,66,67,68,69,70,
              71,72,73,74,75,76,77];

  const images = [
    {
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
            <div className="banner-content1">
              <ImageGallery
                items={images}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                showBullets={true}
                autoPlay={true}
                // more info on react-image-gallery
              />
            </div>
            <div className="asdf">
              <div id="test1">
                <img src={long} alt="long" />
              </div>
              <div id="test2">
                <img src={long} alt="long" />
              </div>
            </div>
            <div className="asdf">
              <div id="test3">
                <img src={long} alt="long" />
              </div>
              <div id="test4">
                <img src={long} alt="long" />
              </div>
            </div>
            <div className="asdf">
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
          </div>
        );
      case 2:
        console.log('2');
        return <JobTree />;

      case 3:
        console.log('3');
        const postslists = id.map((id) => (
          <div key={id.toString()}>
            <img src={icon_bookmark} alt="Icon_bookmark" className="bookmark" />
            <span>15:00</span>
            <img src={logo_samsung} alt="img" className="logo" />
            <p>
              <span className="calender-disp-span">삼성전자</span>
              <span>2020년 보험 영업</span>
            </p>
          </div>
        ));
        return (
          <div className="calender-container">
            <div className="calender-content-date">
              <button
                className="calender-left"
                onClick={() => setweekNum(weekNum - 1)}
              >
                left
              </button>
              <span className="calender-span">
                {monthNum}월{weekNum}주차 마감 공고
              </span>
              <button
                className="calender-right"
                onClick={() => setweekNum(weekNum + 1)}
              >
                right
              </button>
            </div>
            <div className="calender-disp">{postslists}</div>
            <div className="ad-container"></div>
          </div>
        );
      default:
        break;
    }
  };
  return (
    <>
      <div className="main-recruit-container">
        <div className="main-recruit-content">
          <input className="search-input" />
          <button
            className="search-btn"
            onChange={(e) => setKeyword(e.target.value)}
          >
            <span className="search-text">검색</span>
          </button>
          <div className="status-div">
            <span className="text">
              이력서를 완성하고 담당자에게 전문적인 추천을 받아보세요
            </span>
            <button className="btn"></button>
          </div>
          <div className=""></div>
          <div className="btn-content">
            <button className="btn1" onClick={() => setbtn(BANNER_BUTTON)}>
              <span className="btn-text"> 배너(기본)</span>
            </button>
            <button className="btn2" onClick={() => setbtn(AD_BUTTON)}>
              <span className="btn-text"> 인기 공고</span>
            </button>
            <button className="btn3" onClick={() => setbtn(RECRUIT_BUTTON)}>
              <span className="btn-text"> 채용 달력</span>
            </button>
          </div>
          {/* 광고 banner layout */}
          {switchFuntion(btn)}
          <span className="span-content">오늘 이 공고, 놓치지 마세요!</span>
          <div className="asdf">
            <div className="fjfj1">
              <img src={squre2} alt="squre2" />
              <span className="company-name-lar">기업명</span>
              <span className="company-name-mid">직무명</span>
              <span className="company-name-sm">ㅇㅇ시 ㅇㅇ구</span>
            </div>
            <div className="fjfj">
              <img src={squre3} alt="squre3" />
              <span className="company-name-lar">기업명</span>
              <span className="company-name-mid">직무명</span>
              <span className="company-name-sm">ㅇㅇ시 ㅇㅇ구</span>
            </div>
            <div className="fjfj">
              <img src={squre4} alt="squre4" />
              <span className="company-name-lar">기업명</span>
              <span className="company-name-mid">직무명</span>
              <span className="company-name-sm">ㅇㅇ시 ㅇㅇ구</span>
            </div>
            <div className="fjfj">
              <img src={squre5} alt="squre5" />
              <span className="company-name-lar">기업명</span>
              <span className="company-name-mid">직무명</span>
              <span className="company-name-sm">ㅇㅇ시 ㅇㅇ구</span>
            </div>
          </div>
          <span className="span-content">이력서 작성이 어려우신가요?</span>
          <div className="banner-content5">
            <div className="boxed1">
              <div className="circul">
                <img src={resume} alt="resume" />
              </div>
              <span className="img-span">이력서 작성하기</span>
            </div>
            <div className="boxed">
              <div className="circul">
                <img src={hangeul} alt="hangeul" />
              </div>
              <span className="img-span">글자수 세기</span>
            </div>
            <div className="boxed">
              <div className="circul">
                <img src={calcu} alt="calcu" />
              </div>
              <span className="img-span">글자수 세기</span>
            </div>
            <div className="boxed">
              <div className="circul">
                <img src={gradu} alt="gradu" />
              </div>
              <span className="img-span">학점 계산하기</span>
            </div>
            <div className="boxed">
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
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const appendRef = useRef(null);

  const addFuntion = () => {
    return appendRef.current.append();
  };
  // const buttonItems = numbers.map((number) => (
  //   <ApolloProvider client={client} key={number.toString()}>
  //     <Query
  //       query={gql`
  //         {
  //           getCommonWork(id: ID!) {
  //             ID
  //             VAL
  //           }
  //         }
  //       `}
  //     >
  //       {({ loading, error, data }) => {
  //         if (loading) return <p>Loading</p>;
  //         if (error) return <p>error ㅠㅠ</p>;
  //         return data.getCommonWork.map(({ ID, VAL }) => (
  //           <button
  //             className="lv1"
  //             onClick={() => {
  //               setSelected(!selected);
  //               setSelected3(false);
  //               console.log("i'm level 1");
  //             }}
  //           >
  //             {VAL}
  //           </button>
  //         ));
  //       }}
  //     </Query>
  //   </ApolloProvider>
  // ));
  const buttonItems = numbers.map((number) => (
    <button
      key={number.toString()}
      className="lv1"
      disabled={!selected}
      onClick={() => setSelected3(!selected3)}
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
  return (
    <div className="ad-container">
      <div className="button-container">{buttonItems}</div>
      <div className="button-container">{button2Items}</div>
      <div className="button-container">{button3Items}</div>
      <div ref={appendRef} className="ad-content-append"></div>
    </div>
  );
};
