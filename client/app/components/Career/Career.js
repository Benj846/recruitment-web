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
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [reqest, setRequest] = useState(true);
  const recived = number.map((number) => (
    <div className="career-content" key={number.toString()}>
      <div className="career-span-content-false">
        <div className="career-status">
          <span>이력서 열람 요청</span>
        </div>
        <span className="career-comp-name">(주)카카오커머스</span>
        <span className="date">2021.01.06 13:00</span>
      </div>
      <div className="career-comp-logo">
        <img src={logoAuction} alt="logoAuction" className="logo" />
      </div>
      <div className="span-wrapper">
        <div className="span-day-time">
          <span>답변 가능 기한이 </span>
          <span>3일 10시간 05분</span>
          <span> 남았습니다</span>
        </div>
        <span className="postname">서비스 직군 모집</span>
        <div className="recruit-info">
          <span className="area-type">경기 성남시</span>
          <span className="area-type">정규직, 계약직</span>
        </div>
      </div>
      <div className="career-content-button">
        <button className="btn-confirm" onClick={() => setRequest(false)}>
          요청확인
        </button>
        <button className="btn-history">진행내역</button>
      </div>
    </div>
  ));
  return (
    <div className="career-root">
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
          <div className="text">
            <span className="txt">총</span>
            <span className="count">NN</span>
            <span className="txt">개의 채용 제안을 받았습니다.</span>
          </div>
          <span className="career-span-content-true">
            내가 받은 채용 제안입니다.
          </span>
          {/* <div className="career-button-container">
            <button className="career-buttons">전체{all}건</button>
            <button className="career-buttons">
              이력서 열람요청 {received}건
            </button>
            <button className="career-buttons">
              면접요청 {interviewRec}건
            </button>
            <button className="career-buttons">결과발표 {result}건</button>
          </div> */}
          <div className="career-body">
            {proposal ? (
              <div className="plaintext">
                <div className="txt">
                  <span>채용제안이 아직 없네요.</span>
                  <span>AI 추천 리스트를 보러가시겠어요?</span>
                </div>
                <button className="aiJob">AI Job 추천 보러가기</button>
              </div>
            ) : (
              <>{recived}</>
            )}
          </div>
        </div>
        <div className="sky-scrapper">Sky scrapper</div>
      </div>
      <Footer />
    </div>
  );
}

export default Career;
