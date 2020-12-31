import React, { useState } from 'react';
import '../../styles/RecruitmentComponent';
import Footer from '../Footer/Footer';
//import 'react-slideshow-image/dist/styles.css';
import ImageGallery from 'react-image-gallery';
import resume from '../Main/images/resume.svg';
import hangeul from '../Main/images/hangeul.svg';
import gradu from '../Main/images/gradu.svg';
import certificate from '../Main/images/certificate.svg';
import calcu from '../Main/images/calcu.svg';
import slide_1 from '../Main/images/slide_1.png';
import slide_2 from '../Main/images/slide_2.png';
import slide_3 from '../Main/images/slide_3.png';
import slide_4 from '../Main/images/slide_4.png';
import long from '../Main/images/long.png';
import squre1 from '../Main/images/squre1.png';
import squre2 from '../Main/images/squre2.png';
import squre3 from '../Main/images/squre3.png';
import squre4 from '../Main/images/squre4.png';
import squre5 from '../Main/images/squre5.png';
function RecruitmentComponent(props) {
  const [btn, setbtn] = useState(false);

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

  return (
    <>
      <div className="recruit-container">
        <div className="filter-container">
          <button className="filter-search" onClick={() => setbtn(!btn)}>
            조건 검색
          </button>
          <button className="filter-popular">인기 채용 공고</button>
          <button className="filter-today">오늘 마감 공고</button>
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
            <button className="btn-power">파워공고</button>
            <button className="btn-common">일반공고</button>
            <span className="more-span">더 보기</span>
          </div>
          {btn ? <div className="search-popup"></div> : <div></div>}

          {/* 광고 banner layout */}
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
        </div>
      </div>
      <Footer />
    </>
  );
}
export default RecruitmentComponent;
