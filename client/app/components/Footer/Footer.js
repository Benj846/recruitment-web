import React from 'react';
import Logo from './logo.svg';
import icon_download from './icon_download.png';

import '../../styles/Footer';

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <ul className="footer-menu">
          <li className="fm-list">서비스 소개</li>
          <li className="fm-list">이용약관</li>
          <li className="fm-list">개인정보처리방침</li>
          <li className="fm-list">고객센터</li>
        </ul>
      </div>
      <div className="footer-copy-wrap">
        <div className="footer-inner">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <div className="footer-txt-wrap">
            <span className="corp-name">제뉴이스트(주) 패플라이</span>
            <p className="txt">
              고객센터 : (070) 8778-1222 (평일 09:00 ~ 18:00, 주말 및 공휴일
              휴무)
            </p>
            <p className="txt">
              우21998, 인천시 연수구 하모니로 138번길 11 송도캐슬센트럴파크
              102동 331호 | 대표: 김진규
            </p>
            <p className="txt">
              사업자등록: 548-59-00430 | 통신판매업 신고번호
              제2020-인천연수-00000호
            </p>
            <span className="copyright">
              Copyright© (주)제뉴이스트, All rights reserved.
            </span>
          </div>
          <div className="direct-wrap">
            <ul className="direct-menu">
              <li className="di-list">
                <img
                  src={icon_download}
                  className="di-ico"
                  alt="download icon"
                />
                <span className="di-txt">iOS Application</span>
              </li>
              <li className="di-list">
                <img
                  src={icon_download}
                  className="di-ico"
                  alt="download icon"
                />
                <span className="di-txt">Android Application</span>
              </li>
              <li className="di-list">
                <img
                  src={icon_download}
                  className="di-ico"
                  alt="download icon"
                />
                <span className="di-txt">제뉴이스트(주) 소개 PDF</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
