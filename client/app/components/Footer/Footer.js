import React from 'react';
import Logo from './logo.svg';
import '../../styles/Footer';

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p className="p1">서비스 소개</p>
        <hr className="v1"></hr>
        <p className="p2">이용약관</p>
        <hr className="v1"></hr>
        <p className="p2">개인정보처리방침</p>
        <hr className="v1"></hr>
        <p className="p2">고객센터</p>
      </div>
      <div className="footer-hr" />
      <div className="footer-content2">
        <img src={Logo} alt="Logo" className="footer_logo" />
        <p className="footer-text">
          제뉴이스트(주) 패플라이 고객센터 : (070) 8778-1222 (평일 09:00 ~
          18:00, 주말 및 공휴일 휴무) 우21998, 인천시 연수구 하모니로 138번길 11
          송도캐슬센트럴파크 102동 331호 | 대표: 김진규 사업자등록: 548-59-00430
          | 통신판매업 신고번호 제2020-인천연수-00000호 Copyright ©
          (주)제뉴이스트, All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
