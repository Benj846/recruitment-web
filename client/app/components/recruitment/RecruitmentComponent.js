import React, { useState } from 'react';
import '../../styles/RecruitmentComponent';
import Footer from '../Footer/Footer';
//import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import ImageGallery from 'react-image-gallery';
function RecruitmentComponent(props) {
  const BANNER_BUTTON = 1;
  const AD_BUTTON = 2;
  const RECRUIT_BUTTON = 3;
  // const [input, setInput] = useState('');
  const [btn, setbtn] = useState(AD_BUTTON);
  const slideImages = [
    'images/slide_2.png',
    'images/',
    'images/slide_3.jpg',
    'images/slide_4.jpg'
  ];
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/'
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/'
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/'
    }
  ];
  const switchFuntion = (btn) => {
    switch (btn) {
      case 1:
        console.log('1');
        return (
          <div className="banner-container">
            <div className="banner-content1">palce holder</div>
            <div className="asdf">
              <div id="test1">1</div>
              <div id="test2">2</div>
            </div>
            <div className="asdf">
              <div id="test3">3</div>
              <div id="test4">4</div>
            </div>
            <div className="asdf">
              <div className="fjfj1">1</div>
              <div className="fjfj">2</div>
              <div className="fjfj">3</div>
              <div className="fjfj">4</div>
            </div>
          </div>
        );
      case 2:
        console.log('2');
        return (
          <div className="ad-container">
            <ImageGallery
              items={images}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              showBullets={true}
              autoPlay={true}
            />
          </div>
        );
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
          <span className="span-content">이력서 작성이 어려우신가요?</span>
          <div className="banner-content5">
            <div className="boxed1">1</div>
            <div className="boxed">2</div>
            <div className="boxed">3</div>
            <div className="boxed">4</div>
            <div className="boxed">5</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default RecruitmentComponent;
