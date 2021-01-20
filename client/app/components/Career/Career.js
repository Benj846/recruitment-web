import Axios from 'axios';
import React, { useState, useRef } from 'react';
import Footer from '../Footer/Footer';
import '../../styles/Career.css';
import logoAuction from './images/logo_auction@2x.png';

function Career() {
  const [all, setAll] = useState(0);
  const [received, setReceived] = useState(0);
  const [interviewRec, setInterveiwRec] = useState(0);
  const [result, setResult] = useState(0);
  const [proposal, setProposal] = useState(false);
  return (
    <div className="career-return-wrapper">
      <div className="career-filter">
        <button className="filter-buttons">채용제안 관리</button>
        <button className="filter-buttons">채용지원 관리</button>
        <button className="filter-buttons">추천관리</button>
        <button className="filter-buttons">AI Job 추천</button>
        <button
          className="filter-buttons"
          onClick={() => setProposal(!proposal)}
        >
          toggle switch
        </button>
      </div>

      <div className="career-span-container">
        <div className="text">채용제안 관리</div>
        <span className="career-span-content-true">
          최근1년간 받은 요청을 확인할 수 있습니다
        </span>
        <div className="career-button-container">
          <button className="career-buttons">전체{all}건</button>
          <button className="career-buttons">
            이력서 열람요청 {received}건
          </button>
          <button className="career-buttons">면접요청 {interviewRec}건</button>
          <button className="career-buttons">결과발표 {result}건</button>
        </div>
        <div className="career-body">
          {proposal ? (
            <div className="plaintext">
              채용제안이 아직 없네요. <br />
              AI 추천 리스트를 보러가시겠어요?
              <br />
              <button className="aiJob">AI Job 추천 보러가기</button>
            </div>
          ) : (
            <div className="career-content">
              <div className="career-span-content-false">
                <div className="career-status">
                  <span>이력서 열람 요청</span>
                </div>
                <div className="career-comp-name">(주)카카오커머스</div>
                <div className="date">2021.01.06 13:00</div>
              </div>
              <div className="vertical-line"></div>
              <div className="career-comp-logo">
                <img src={logoAuction} alt="logoAuction" className="logo" />
              </div>
              <div className="vertical-line2"></div>
              <div className="span-wrapper">
                <div className="span-day-time">
                  답변 가능 기한이 3일 10시간 05분 남았습니다
                </div>
                <div className="postname">서비스 직군 모집</div>
                <div className="area-type">경기 성남시 | 정규직, 계약직</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Career;
