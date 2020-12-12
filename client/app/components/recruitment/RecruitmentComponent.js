import React from 'react';
import { useState } from 'react';
import '../../styles/RecruitmentComponent';

function RecruitmentComponent(props) {
  const [input, setInput] = useState('');
  return (
    <div className="rec-wrapper">
      <input
        className="search-input"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
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
      <div className="btn-container">
        <button className="btn1">
          <span className="btn1-text"> 배너(기본)</span>
        </button>
        <button className="btn2">
          <span className="btn2-text"> 인기 공고</span>
        </button>
        <button className="btn3">
          <span className="btn3-text"> 채용 달력</span>
        </button>
      </div>
      {/* 광고 layout */}

      <div className="ad-container">
        <div className="ad-content1">lksadf</div>
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
    </div>
  );
}
export default RecruitmentComponent;
