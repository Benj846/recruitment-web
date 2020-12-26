import React, { useState } from 'react';
import '../../styles/RecruitmentComponent';
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
function RecruitmentComponent(props) {
  const BANNER_BUTTON = 1;
  const AD_BUTTON = 2;
  const RECRUIT_BUTTON = 3;
  const [btn, setbtn] = useState(BANNER_BUTTON);

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

        return (
          <div className="calender-container">
            <div>this is 3</div>
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
export default RecruitmentComponent;

const JobTree = () => {
  const [selected, setSelected] = useState(false);
  const [selected3, setSelected3] = useState(false);
  return (
    <div className="ad-container">
      <div className="button-container">
        <button
          className="lv1"
          onClick={() => {
            setSelected(!selected);
            setSelected3(false);
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
      <div className="button-container">
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
        <button
          className="lv2"
          disabled={!selected}
          onClick={() => setSelected3(!selected3)}
        >
          lv2.선택직무
        </button>
      </div>
      <div className="button-container">
        <button className="lv1" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv1" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv1" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv1" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv1" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv1" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv1" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv1" disabled={!selected3}>
          lv3.선택직무
        </button>
        <button className="lv1" disabled={!selected3}>
          lv3.선택직무
        </button>
      </div>
    </div>
  );
};
