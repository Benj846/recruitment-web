import React, { useState, useRef, useEffect } from 'react';
import Select from 'react-select';
import '../../styles/SignInComponent';
import partyPopper from './images/party-popper.png';
import closeBtn from './images/close_button.svg';
import fapplyLogo from './images/Fapply_logo.svg';
import icon_fb from './images/icon_fb.svg';
import icon_nv from './images/icon_nv.svg';
import icon_kk from './images/icon_kk.svg';
import icon_gg from './images/icon_gg.svg';
import icon_ap from './images/icon_ap.svg';
const axios = require('axios');

function SignInComponent({ closePopup, setLoginInfo }) {
  const [showSignup, setShowSignup] = useState(false);
  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const [showFindIdPw, setShowFindIdPw] = useState(false);
  const toggleFindIdPw = () => {
    setShowFindIdPw(!showFindIdPw);
  };

  const personalBtn = useRef();
  const companyBtn = useRef();
  useEffect(() => {
    personalBtn.current.click();
  }, []);

  // 개인: -1, 기업 인사 담당자: 1
  const [utype, setUtype] = useState(-1);
  const [loginInfo, setLofinInfo] = useState({
    email: '',
    password: ''
  });
  const setMemberBtn = (e) => {
    setUtype(-1);
    const className = e.target.className;
    if (className === 'personal') {
      personalBtn.current.style.outline = 'none';
      personalBtn.current.style.background =
        '#009999 0% 0% no-repeat padding-box';
      personalBtn.current.style.font =
        'normal normal medium 14px/20px Noto Sans KR';
      personalBtn.current.style.letterSpacing = '0px';
      personalBtn.current.style.color = '#ffffff';
      personalBtn.current.style.border = 'none';
      personalBtn.current.style.opacity = '1';

      companyBtn.current.style.width = '230px';
      companyBtn.current.style.height = '50px';
      companyBtn.current.style.background = 'none';
      companyBtn.current.style.border = '1px solid #cccccc';
      companyBtn.current.style.color = 'black';
      companyBtn.current.style.opacity = '1';
    } else {
      setUtype(-2);
      companyBtn.current.style.outline = 'none';
      companyBtn.current.style.background =
        '#009999 0% 0% no-repeat padding-box';
      companyBtn.current.style.font =
        'normal normal medium 14px/20px Noto Sans KR';
      companyBtn.current.style.letterSpacing = '0px';
      companyBtn.current.style.color = '#ffffff';
      companyBtn.current.style.border = 'none';
      companyBtn.current.style.opacity = '1';

      personalBtn.current.style.width = '230px';
      personalBtn.current.style.height = '50px';
      personalBtn.current.style.background = 'none';
      personalBtn.current.style.border = '1px solid #cccccc';
      personalBtn.current.style.color = 'black';
      personalBtn.current.style.opacity = '1';
    }
  };

  const login = async () => {
    try {
      // console.log(loginInfo.email);
      // console.log(utype);
      const result = await axios.post('/member/login', {
        uid: loginInfo.email,
        utype: utype
      });
      console.log(result);
      if (result.data[0].COUNT === 1) {
        setLoginInfo({
          uid: loginInfo.email,
          isSuccess: true,
          userType: utype
        });
        closePopup();
      } else {
        alert('로그인 정보가 일치하지 않습니다.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setLofinInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  return (
    // <div id="signin-container" style={customStyle}>
    <div id="signin-container">
      <div id="signin-content">
        <div className="logo-close-popup">
          <button
            className="close-button"
            onClick={closePopup}
            style={{
              background: `url(${closeBtn}) no-repeat center center`
            }}
          ></button>
        </div>
        <img className="fapply_logo" src={fapplyLogo} />
        <div className="header">
          <div className="preamble-one">여러분의 소중한 커리어를</div>
          <div className="preamble-two">패플라이와 함께 만들어나가요!</div>
        </div>
        <div className="body">
          <div className="choose-member">
            <button
              className="personal"
              ref={personalBtn}
              onClick={setMemberBtn}
            >
              개인회원
            </button>
            <button className="company" ref={companyBtn} onClick={setMemberBtn}>
              기업회원
            </button>
          </div>
          <div className="input-content">
            <input
              className="input-email-phone"
              name="email"
              placeholder="이메일 주소 입력하기"
              onChange={onChange}
            />
            <input
              className="input-password"
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={onChange}
            />
          </div>
          <button className="signin-button" onClick={login}>
            패플라이 로그인
          </button>
          <div className="signin-find-idpw-content">
            <button className="find-idpw" onClick={toggleFindIdPw}>
              아이디/비밀번호 찾기
            </button>
            <button className="signup-button" onClick={toggleSignup}>
              회원가입
            </button>
          </div>
          <div className="signin-throw-social-title">1초 로그인하기</div>
          <div className="social-content">
            <div
              className="btn-social facebook"
              style={{ background: `url(${icon_fb}) no-repeat center center` }}
            ></div>
            <div
              className="btn-social naver"
              style={{ background: `url(${icon_nv}) no-repeat center center` }}
            ></div>
            <div
              className="btn-social kakao"
              style={{ background: `url(${icon_kk}) no-repeat center center` }}
            ></div>
            <div
              className="btn-social google"
              style={{ background: `url(${icon_gg}) no-repeat center center` }}
            ></div>
            <div
              className="btn-social apple"
              style={{ background: `url(${icon_ap}) no-repeat center center` }}
            ></div>
          </div>
        </div>
        {showSignup ? (
          <AcceptAgreement closePopup={closePopup} member={utype} />
        ) : null}
        {showFindIdPw ? <FindIwPwComponent closePopup={closePopup} /> : null}
      </div>
    </div>
  );
}

function FindIwPwComponent({ closePopup }) {
  return (
    <div id="find-idpw-container">
      <div className="find-idpw-content">
        <div className="logo-close-popup">
          <div className="empty-space"></div>
          <div>아이디/비밀번호 찾기</div>
          <button className="close-button" onClick={closePopup}>
            <img src={closeBtn} />
          </button>
        </div>
        <div className="find-buttons">
          <button className="id-btn">ID 찾기</button>
          <button className="pw-btn">비밀번호 찾기</button>
        </div>
        <div className="body">
          <div className="input-content">
            <div>이름</div>
            <input className="name" placeholder="이름을 입력해주세요" />
            <div className="phone-title-content">
              <div className="title">휴대폰 번호 입력</div>
              <div className="guide">
                프로필에 인증된 휴대폰 번호와 일치해야 합니다
              </div>
            </div>
            <div className="phone-input-content">
              <input
                className="phone"
                placeholder="휴대폰 번호를 입력해주세요"
              />
              <button className="verify-phone-btn">인증</button>
            </div>
            <div className="verify-confirm-title">인증번호 확인</div>
            <div className="verify-input-content">
              <input
                className="number"
                placeholder="인증번호 네 자리를 입력해주세요."
              />
              <button className="btn">확인</button>
            </div>
            <button className="submit">확인</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AcceptAgreement({ closePopup, member }) {
  const [isPersonalInfoCilcked, setPersonalInfoCilcked] = useState(false);
  const [isMarketingInfoCilcked, setMarketingInfoCilcked] = useState(false);
  const togglePersonalInfo = () => {
    const clicked = !isPersonalInfoCilcked;
    setPersonalInfoCilcked(clicked);
    if (clicked === true) {
      signUpBody.current.style.marginTop = '35px';
      nextButton.current.style.marginTop = '65px';
    } else {
      signUpBody.current.style.marginTop = '150px';
      nextButton.current.style.marginTop = '50px';
    }
  };

  const toggleMarketingInfo = () => {
    const clicked = !isMarketingInfoCilcked;
    setMarketingInfoCilcked(clicked);

    if (clicked === true) {
      if (isPersonalInfoCilcked === true) {
        nextButton.current.style.marginTop = '-35px';
      } else {
        nextButton.current.style.marginTop = '-50px';
      }
    } else {
      if (isPersonalInfoCilcked === true) {
        nextButton.current.style.marginTop = '65px';
      } else {
        nextButton.current.style.marginTop = '50px';
      }
    }
  };

  const checkAll = () => {
    const allChecked = !isAllCheck;
    if (allChecked === true) {
      setIsAllCheck(true);
      setIsPeronalInfoChecked(true);
      setIsAgeFourteenChecked(true);
      setIsMarketingInfoChecked(true);
    } else {
      setIsAllCheck(false);
      setIsPeronalInfoChecked(false);
      setIsAgeFourteenChecked(false);
      setIsMarketingInfoChecked(false);
    }
  };

  const checkPersonalInfo = () => {
    setIsPeronalInfoChecked(!isPersonalInfoChecked);
  };

  const checkAgeFourteen = () => {
    setIsAgeFourteenChecked(!isAgeFourteenChecked);
  };

  const checkMarketingInfo = () => {
    setIsMarketingInfoChecked(!isMarketingInfoChecked);
  };

  const signUpBody = useRef();
  const nextButton = useRef();
  const [isAllCheck, setIsAllCheck] = useState(false);
  const [isPersonalInfoChecked, setIsPeronalInfoChecked] = useState(false);
  const [isAgeFourteenChecked, setIsAgeFourteenChecked] = useState(false);
  const [isMarketingInfoChecked, setIsMarketingInfoChecked] = useState(false);

  const [showSignup, setShowSignup] = useState(false);
  const togglePopup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div id="signup-container">
      <div id="signup-content">
        <div className="member-close-popup">
          <div className="empty-space"></div>
          {member === -1 ? (
            <div>개인회원 가입하기</div>
          ) : (
            <div>기업회원 가입하기</div>
          )}
          <button className="close-button" onClick={closePopup}>
            <img src={closeBtn} />
          </button>
        </div>
        <div className="header">
          <img src={fapplyLogo} />
          <div className="preamble-one">여러분의 소중한 커리어</div>
          <div className="preamble-two">Fapply와 함께 만들어나가요!</div>
        </div>
        <div className="body" ref={signUpBody}>
          <input
            type="checkbox"
            className="check-all"
            checked={isAllCheck}
            onChange={checkAll}
          ></input>
          <span className="check-all-title" onClick={checkAll}>
            전체동의
          </span>
          <hr className="div-line" />
          <div className="personal-info-collect-container">
            <div>
              <div className="personal-info-collect-content">
                <input
                  type="checkbox"
                  className="personal-info-collect"
                  checked={isPersonalInfoChecked}
                  onChange={checkPersonalInfo}
                ></input>
                <span
                  className="personal-info-collect-title"
                  onClick={checkPersonalInfo}
                >
                  [필수] 개인정보 수집 및 이용 동의
                </span>
              </div>
              <div className="view-detail" onClick={togglePersonalInfo}>
                상세보기
              </div>
            </div>
            {isPersonalInfoCilcked ? (
              <div className="full">
                이것은 개인 정보에 관한 내용입니다. 이것은 개인 정보에 관한
                내용입니다. 이것은 개인 정보에 관한 내용입니다. 이것은 개인
                정보에 관한 내용입니다. 이것은 개인 정보에 관한 내용입니다.
                이것은 개인 정보에 관한 내용입니다. 이것은 개인 정보에 관한
                내용입니다. 이것은 개인 정보에 관한 내용입니다. 이것은 개인
                정보에 관한 내용입니다. 이것은 개인 정보에 관한 내용입니다.
                이것은 개인 정보에 관한 내용입니다. 이것은 개인 정보에 관한
                내용입니다.
              </div>
            ) : null}
          </div>
          <div>
            <input
              type="checkbox"
              className="age-fourteen"
              checked={isAgeFourteenChecked}
              onChange={checkAgeFourteen}
            ></input>
            <span className="age-fourteen-title" onClick={checkAgeFourteen}>
              [필수] 만 14세 이상
            </span>
          </div>
          <div className="marketing-accept-container">
            <div>
              <div className="marketing-accept-content">
                <input
                  type="checkbox"
                  className="marketing-accept"
                  checked={isMarketingInfoChecked}
                  onChange={checkMarketingInfo}
                ></input>
                <span
                  className="marketing-accept-title"
                  onClick={checkMarketingInfo}
                >
                  [선택] 마케팅 정보 수신 동의
                </span>
              </div>
              <div className="view-detail" onClick={toggleMarketingInfo}>
                상세보기
              </div>
            </div>
            {isMarketingInfoCilcked ? (
              <div className="full">
                이것은 마케팅 정보 수신 동의에 관한 내용입니다. 이것은 마케팅
                정보 수신 동의에 관한 내용입니다. 이것은 마케팅 정보 수신 동의에
                관한 내용입니다. 이것은 마케팅 정보 수신 동의에 관한 내용입니다.
                이것은 마케팅 정보 수신 동의에 관한 내용입니다. 이것은 마케팅
                정보 수신 동의에 관한 내용입니다. 이것은 마케팅 정보 수신 동의에
                관한 내용입니다. 이것은 마케팅 정보 수신 동의에 관한 내용입니다.
              </div>
            ) : null}
          </div>
          <div className="next-button-content">
            <button ref={nextButton} onClick={togglePopup}>
              다음으로 넘어가기
            </button>
          </div>
        </div>
        {showSignup ? (
          <SignupWithEmail closePopup={closePopup} member={member} />
        ) : null}
      </div>
    </div>
  );
}

function SignupWithEmail({ closePopup, member }) {
  const [showSignup, setShowSignup] = useState(false);
  const togglePopup = () => {
    getMemberCount();
  };

  const getMemberCount = async () => {
    try {
      const result = await axios.post('/member/count', {
        email: email
      });
      const count = result.data[0].COUNT;
      if (count !== 0) {
        alert('이미 존재하는 이메일입니다.');
        return;
      } else {
        setShowSignup(!showSignup);
      }
    } catch (error) {
      console.log(error);
    }

    // axios
    // .post('/member/count', { email })
    // .then((res) => {
    //   const count = res.data[0].COUNT;
    //   if (count !== 0) {
    //     alert('이미 존재하는 이메일입니다.');
    //     return;
    //   } else {
    //     setShowSignup(!showSignup);
    //   }
    // })
    // .catch((err) => {
    //   console.log(error, err);
    // });
  };
  const emailValidateRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  //const emailValidateRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{3}$/i;

  const [email, setEmail] = useState('');
  // const emailValidateRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{3}$/i;
  //const emailValidateRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  const [isCorrectEmailForm, setCorrectEmailForm] = useState(true);
  const inputEmailRef = useRef();
  const submitEmailRef = useRef();
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(true);

  const validateEmailForm = (e) => {
    const value = e.target.value;
    setEmail(value);
    //setEmail('fapply@genuinest.com');
    const flag = emailValidateRegex.test(value);
    setCorrectEmailForm(flag);
    if (!flag && value !== '') {
      inputEmailRef.current.style.border = '1px solid #FE5741';
    } else if (value === '') {
      inputEmailRef.current.style.border = '1px solid #CCCCCC';
    } else if (flag === true) {
      inputEmailRef.current.style.border = '1px solid #009999';
      setIsNextBtnDisabled(false);
    }
  };

  return (
    <div id="with-email-container">
      <div id="with-email-content">
        <div className="member-close-popup">
          <div className="empty-space"></div>
          {member === -1 ? (
            <div>개인회원 가입하기</div>
          ) : (
            <div>기업회원 가입하기</div>
          )}
          <button className="close-button" onClick={closePopup}>
            <img src={closeBtn} />
          </button>
        </div>
        <div className="header">
          <img src={fapplyLogo} />
          <div className="preamble-one">여러분의 소중한 커리어</div>
          <div className="preamble-two">Fapply와 함께 만들어나가요!</div>
        </div>
        <div className="body">
          <span>이메일 주소로 가입하기</span>
          <input
            className="input-email-phone"
            placeholder="이메일 입력"
            onChange={validateEmailForm}
            ref={inputEmailRef}
            value={email}
          ></input>
          {isCorrectEmailForm ? null : (
            <div className="guide-input-email">
              올바른 이메일 형식을 입력해주세요
            </div>
          )}
          <button
            className="submit-email"
            onClick={togglePopup}
            disabled={isNextBtnDisabled}
            ref={submitEmailRef}
          >
            다음으로 이동
          </button>
          <hr className="div-line" />
          <div className="social-channels">
            <button>f</button>
            <button>N</button>
            <button>K</button>
            <button>G</button>
            <button>A</button>
          </div>
          <div className="guide-text">
            <div>걱정마세요! 여러분의 지원 내역은 sns에 노출되지 않습니다.</div>
            <div>
              회원가입 시 개인정보 처리방침과 이용약관을 확인하였으며
              동의합니다.
            </div>
          </div>
        </div>
        {showSignup ? (
          <InputSignupWithEmail
            closePopup={closePopup}
            member={member}
            email={email}
          />
        ) : null}
      </div>
    </div>
  );
}

function InputSignupWithEmail({ closePopup, member, email }) {
  const [showSignup, setShowSignup] = useState(false);
  const [isPhoneOrEmail, setPhoneOrEmail] = useState(false);
  const [memberInfo, setMemberInfo] = useState({
    uid: email,
    name: '',
    utype: member
  });
  const [corpInfo, setCorpInfo] = useState({
    uid: email,
    name: '',
    number: '',
    utype: member,
    ctype: ''
  });

  const onChange = (e) => {
    setMemberInfo({ ...memberInfo, [e.target.name]: e.target.value });
  };

  const onCorpChange = (e) => {
    //console.log(e.target.name, e.target.value);
    setCorpInfo({ ...corpInfo, [e.target.name]: e.target.value });
  };

  const togglePopup = () => {
    setShowSignup(!showSignup);
    // console.log(email);
    // console.log(memberInfo.name);
    // console.log(memberInfo.password);
  };

  const togglePhoneEmail = (f) => {
    const flag = f;
    setPhoneOrEmail(flag);
  };

  const normalCorpBtn = useRef();
  const searchFirmBtn = useRef();
  useEffect(() => {
    if (member === 1) {
      normalCorpBtn.current.click();
    }
  }, []);

  // 일반기업 회원:0, 서치펌 회원:1
  const [corpMember, setCorpMember] = useState(0);

  const industryOptions = [
    { value: '반도체·전자·통신', label: '반도체·전자·통신' },
    { value: '전기·전자장비', label: '전기·전자장비' },
    { value: '전력·전기·연료', label: '전력·전기·연료' },
    { value: '화학·방산', label: '화학·방산' },
    { value: '기계·설비·장비', label: '기계·설비·장비' },
    { value: '자동차·부품', label: '자동차·부품' },
    { value: '조선·철도·항공', label: '조선·철도·항공' },
    { value: '설계·엔지니어링·연구개발', label: '설계·엔지니어링·연구개발' },
    { value: '건설·토목', label: '건설·토목' },
    { value: '상하수·환경', label: '상하수·환경' },
    { value: '제약·바이오', label: '제약·바이오' },
    { value: 'IT·통신', label: 'IT·통신' },
    { value: '광고·사회·조사', label: '광고·사회·조사' },
    { value: '소비재 제조', label: '소비재 제조' },
    { value: '금융·보험', label: '금융·보험' },
    { value: '소비재 유통·판매', label: '소비재 유통·판매' },
    { value: '기타 도매·판매', label: '기타 도매·판매' },
    { value: '미디어·방송·영화', label: '미디어·방송·영화' },
    { value: '부동산', label: '부동산' },
    { value: '컨설팅·자문', label: '컨설팅·자문' },
    { value: '전문서비스', label: '전문서비스' },
    { value: '생활·여가서비스', label: '생활·여가서비스' },
    { value: '서비스기타', label: '서비스기타' },
    { value: '여객·운송·물류', label: '여객·운송·물류' },
    { value: '제철·금속·비금속', label: '제철·금속·비금속' },
    { value: '기관·단체', label: '기관·단체' },
    { value: '농림·수산·광업', label: '농림·수산·광업' },
    { value: '가구·귀금속·취미용품·기타', label: '가구·귀금속·취미용품·기타' },
    { value: '지주회사·본부', label: '지주회사·본부' }
  ];
  const companyTypeOptions = [
    { value: '대기업', label: '대기업' },
    { value: '중견기업', label: '중견기업' },
    { value: '강소기업', label: '강소기업' },
    { value: '외국계기업', label: '외국계기업' },
    { value: '공기업공사', label: '공기업공사' },
    { value: '스타트업', label: '스타트업' },
    { value: '기타', label: '기타' }
  ];
  const setMemberBtn = (e) => {
    const className = e.target.className;
    if (className === 'normal-corp') {
      setCorpMember(0);
      normalCorpBtn.current.style.outline = 'none';
      normalCorpBtn.current.style.background =
        '#009999 0% 0% no-repeat padding-box';
      //normalCorpBtn.current.style.borderRadius = '3px 0px 0px 3px';
      normalCorpBtn.current.style.font =
        'normal normal medium 14px/20px Noto Sans KR';
      normalCorpBtn.current.style.letterSpacing = '0px';
      normalCorpBtn.current.style.color = '#ffffff';
      normalCorpBtn.current.style.border = 'none';
      normalCorpBtn.current.style.opacity = '1';

      searchFirmBtn.current.style.width = '230px';
      searchFirmBtn.current.style.height = '50px';
      searchFirmBtn.current.style.background = 'none';
      searchFirmBtn.current.style.border = '1px solid #cccccc';
      searchFirmBtn.current.style.color = 'black';
      //searchFirmBtn.current.style.borderRadius = '0px 3px 3px 0px';
      searchFirmBtn.current.style.opacity = '1';
    } else {
      setCorpMember(1);
      searchFirmBtn.current.style.outline = 'none';
      searchFirmBtn.current.style.background =
        '#009999 0% 0% no-repeat padding-box';
      //searchFirmBtn.current.style.borderRadius = '3px 0px 0px 3px';
      searchFirmBtn.current.style.font =
        'normal normal medium 14px/20px Noto Sans KR';
      searchFirmBtn.current.style.letterSpacing = '0px';
      searchFirmBtn.current.style.color = '#ffffff';
      searchFirmBtn.current.style.border = 'none';
      searchFirmBtn.current.style.opacity = '1';

      normalCorpBtn.current.style.width = '230px';
      normalCorpBtn.current.style.height = '50px';
      normalCorpBtn.current.style.background = 'none';
      normalCorpBtn.current.style.border = '1px solid #cccccc';
      normalCorpBtn.current.style.color = 'black';
      //normalCorpBtn.current.style.borderRadius = '0px 3px 3px 0px';
      normalCorpBtn.current.style.opacity = '1';
    }
  };

  const [showNextPopup, setShowNextPopup] = useState(false);
  const toggleNextPopup = () => {
    setShowNextPopup(!showNextPopup);
  };

  return (
    <>
      <div id="input-with-email-container">
        <div id="input-with-email-content">
          <div className="member-close-popup">
            <div className="empty-space"></div>
            {member === -1 ? (
              <div>개인회원 가입하기</div>
            ) : (
              <div>기업회원 가입하기</div>
            )}
            <button className="close-button" onClick={closePopup}>
              <img src={closeBtn} />
            </button>
          </div>
          <div className="body">
            {member === -1 ? (
              <div className="personal-member">
                <span className="signup-name">이름</span>
                <input
                  className="input-signup-name"
                  placeholder="이름을 입력해주세요"
                  name="name"
                  onChange={onChange}
                />
                <span className="signup-password">비밀번호</span>
                <input
                  className="input-signup-password"
                  placeholder="8~12자의 영문, 숫자, 특수문자 중 2가지 이상 조합 필수"
                  name="pw"
                  type="password"
                  onChange={onChange}
                />
                <span className="signup-password">비밀번호 확인</span>
                <input
                  className="input-signup-password-confirm"
                  placeholder="비밀번호를 다시 한 번 입력해주세요"
                  type="password"
                />
                <span className="signup-password">핸드폰 인증하기</span>
                <div className="verify">
                  <input
                    className="input-info-for-verify"
                    placeholder="번호를 입력해주세요"
                  ></input>
                  <button className="verify-btn">인증</button>
                </div>
                <div className="verify-confirm-title">인증번호 확인</div>
                <div className="verify-confirm">
                  <input
                    className="input-info-for-verify-confirm"
                    placeholder="인증번호 6자리를 입력해주세요."
                  ></input>
                  <button className="verify-confirm-btn">확인</button>
                </div>
                <button className="select-job-btn" onClick={togglePopup}>
                  직무 선택하기
                </button>
              </div>
            ) : (
              <div className="company-member">
                <div>회원종류 선택</div>
                <div className="corp-member">
                  <button
                    className="normal-corp"
                    ref={normalCorpBtn}
                    onClick={setMemberBtn}
                  >
                    일반기업 회원
                  </button>
                  <button
                    className="search-firm"
                    ref={searchFirmBtn}
                    onClick={setMemberBtn}
                  >
                    서치펌 회원
                  </button>
                </div>
                <div className="name">기업명</div>
                <input
                  className="input-company-name"
                  placeholder="30자 이내로 입력 가능합니다."
                  name="name"
                  onChange={onCorpChange}
                />
                <div className="business-registration-number-title">
                  사업자 등록 번호
                </div>
                <input
                  className="input-business-registration-number"
                  placeholder="-없이 10자 입력"
                  name="number"
                  onChange={onCorpChange}
                />
                <div className="choose-industry">산업 선택</div>
                <Select className="select-industry" options={industryOptions} />
                <div className="company-type">기업 형태</div>
                <Select
                  className="select-company-type"
                  options={companyTypeOptions}
                />
                <button className="next-btn" onClick={toggleNextPopup}>
                  다음
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {showSignup ? (
        <SelectTaskYouWant
          closePopup={closePopup}
          memberInfo={memberInfo}
          member={member}
        />
      ) : null}
      {showNextPopup ? (
        <InputPasswordWithCorpMember
          closePopup={closePopup}
          corpInfo={corpInfo}
          utype={member}
          ctype={corpMember}
        />
      ) : null}
    </>
  );
}

function InputPasswordWithCorpMember({ closePopup, corpInfo, utype, ctype }) {
  const [showSignupEnd, setShowSignupEnd] = useState(false);
  const insertCorpMember = async () => {
    try {
      const result = await axios.post('/corp/insert', {
        uid: info.uid,
        name: info.name,
        password: info.password,
        utype: info.utype,
        ctype: info.ctype
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const toggleShowSignupEnd = () => {
    const clicked = !showSignupEnd;
    setShowSignupEnd(clicked);
    if (clicked === true) {
      insertCorpMember();
    }
  };

  const { uid, name, pw, usr_type } = corpInfo;
  const [info, setInfo] = useState({
    uid: uid,
    name: name,
    password: '',
    utype: utype,
    ctype: ctype
  });
  const onChangePassword = (e) => {
    console.log([e.target.name], e.target.value);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* {console.log('uid', info.uid)}
      {console.log('name', info.name)}
      {console.log('password', info.password)}
      {console.log('utype', info.utype)}
      {console.log('ctype', info.ctype)} */}
      <section id="input-password-corp-container">
        <section id="input-password-corp-content">
          <div className="member-close-popup">
            <div className="empty-space"></div>
            {utype === -1 ? (
              <div>개인회원 가입하기</div>
            ) : (
              <div>기업회원 가입하기</div>
            )}
            <button className="close-button" onClick={closePopup}>
              <img src={closeBtn} />
            </button>
          </div>
          <div className="body">
            <div className="password-title">비밀번호</div>
            <div>
              <input
                className="input-password"
                type="password"
                placeholder="8-12자의 영문, 숫자, 특수문자 중 2가지 이상 조합 필수"
                name="password"
                onChange={onChangePassword}
              />
            </div>
            <div className="password-title-confirm-title">비밀번호 확인</div>
            <div>
              <input
                className="verify-input-password"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
                type="password"
              />
            </div>
            <div>
              <button className="next-btn" onClick={toggleShowSignupEnd}>
                다음
              </button>
            </div>
          </div>
        </section>
      </section>
      {showSignupEnd ? <SignupEnd closePopup={closePopup} /> : null}
    </>
  );
}

function SelectTaskYouWant({ closePopup, memberInfo }) {
  const [showSignup, setShowSignup] = useState(false);
  useEffect(() => {
    console.log(memberInfo);
  }, []);

  const completedWithTasks = async () => {
    try {
      const result = await axios.post('/member/insert', {
        uid: memberInfo.uid,
        name: memberInfo.name,
        password: memberInfo.pw,
        utype: memberInfo.utype
      });
      setShowSignup(!showSignup);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const completedWithoutTasks = async () => {
    try {
      const result = await axios.post('/member/insert', {
        uid: memberInfo.uid,
        name: memberInfo.name,
        password: memberInfo.pw,
        utype: memberInfo.utype
      });
      setShowSignup(!showSignup);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const color = '#cccccc';
  const customStyles = {
    control: (base, state) => ({
      ...base,
      height: '50px',
      minHeight: '50px',
      boxShadow: state.isFocused ? 0 : 0,
      borderColor: state.isFocused ? color : color,
      '&:hover': {
        borderColor: state.isFocused ? null : null
      }
    })
  };
  const jobFamilyOptions = [{ value: '경영/사무', label: '경영/사무' }];
  const SelectJobFamily = () => {
    return (
      <Select
        options={jobFamilyOptions}
        placeholder="경영/사무"
        styles={customStyles}
      />
    );
  };

  const jobGroupOptions = [
    { value: '기획/전략/경영', label: '기획/전략/경영' },
    { value: '인사/노무/교육', label: '인사/노무/교육' },
    { value: '사무/총무/법무/특허', label: '사무/총무/법무/특허' },
    { value: '재무/세무/IR', label: '재무/세무/IR' }
  ];
  const SelectJobGroup = () => {
    return (
      <Select
        options={jobGroupOptions}
        placeholder="기획/전략/경영"
        styles={customStyles}
      />
    );
  };

  const jobOptions = [
    { value: '사업기획', label: '사업기획' },
    { value: '경영혁신', label: '경영혁신' },
    { value: '사업제휴', label: '사업제휴' }
  ];
  const SelectJob = () => {
    return (
      <Select
        options={jobOptions}
        placeholder="사업제휴"
        isMulti
        styles={customStyles}
      />
    );
  };

  const detailJobOptions = [
    { value: '사업기획', label: '사업기획' },
    { value: '경영혁신', label: '경영혁신' },
    { value: '사업제휴asdf', label: '사업제휴asdfasdf' }
  ];
  const SelectDetailJob = () => {
    return (
      <Select
        options={detailJobOptions}
        placeholder="조직관리"
        isMulti
        isSearchable={false}
        styles={customStyles}
      />
    );
  };
  return (
    <div className="select-task-container">
      <div className="select-task-content">
        {/* <div className="member-close-popup">
          <div>
            <button className="personal-member">개인회원</button>
            <button className="company-member">기업회원</button>
          </div>
          <button className="close-button" onClick={closePopup}>
            닫기
          </button>
        </div> */}
        <div className="header">
          <div className="title">관심 직무 선택하기</div>
          <div className="preamble">
            <div>아래 관심 직무를 선택하면</div>
            <div>더 정확한 채용정보를 추천받을 수 있어요.</div>
          </div>
          <div className="guide-preamble">
            경력은 현재 직종을, 신입은 관심 직종을 선택해주세요.
          </div>
        </div>
        <div className="body">
          <div className="select-job-family-title">직종 선택하기</div>
          <SelectJobFamily />
          <div className="select-job-group-title">직군 선택하기</div>
          <SelectJobGroup />
          <div className="select-job-title">
            <div>직무 선택하기</div>
            <div>최대 3개</div>
          </div>
          <SelectJob />
          <div className="select-detail-job-title">
            <div>세부직무 선택하기</div>
            <div>최대 6개</div>
          </div>
          <SelectDetailJob />
          <button className="signup-done" onClick={completedWithTasks}>
            가입완료
          </button>
          <button className="signup-later" onClick={completedWithoutTasks}>
            나중에 할게요
          </button>
        </div>
        {showSignup ? <SignupEnd closePopup={closePopup} /> : null}
      </div>
    </div>
  );
}

function SignupEnd({ closePopup }) {
  const [showPopup, setShowSignup] = useState(false);
  const togglePopup = () => {
    setShowSignup(!showPopup);
  };

  const backgroudRgba = {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  };

  return (
    <div className="signup-end-container">
      <div className="signup-end-content">
        <div className="header">
          <div className="preamble-one">
            <img src={partyPopper}></img>
            <div>짝짝짝!</div>
            <div>패플라이 가입을 축하합니다.</div>
            <div>빛나는 커리어를 함께 만들어요!</div>
          </div>
          <div className="preamble-two">
            <div>패플라이와 함께 다양한 커리어를</div>
            <div>구경하러 가보시겠어요?</div>
          </div>
          <button className="go-signup" onClick={closePopup}>
            로그인하러 가기
          </button>
          {/* <button className="go-signup">로그인하러 가기</button> */}
        </div>
        {showPopup ? (
          <SignInComponent
            closePopup={closePopup}
            customStyle={backgroudRgba}
          />
        ) : null}
      </div>
    </div>
  );
}
export default SignInComponent;
