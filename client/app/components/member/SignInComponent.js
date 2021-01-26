import React, { useState, useRef, useEffect } from 'react';
import Select from 'react-select';
import '../../styles/SignInComponent';
import partyPopper from './images/party-popper.png';
import closeBtn from './images/close_button.svg';
import fapplyLogo from './images/Fapply_logo.svg';
const axios = require('axios');

function SignInComponent({ closePopup, customStyle, showSignin }) {
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

  const [member, setMember] = useState('personal');

  const setMemberBtn = (e) => {
    const className = e.target.className;
    setMember('personal');
    if (className === 'personal') {
      personalBtn.current.style.outline = 'none';
      personalBtn.current.style.background =
        '#009999 0% 0% no-repeat padding-box';
      personalBtn.current.style.borderRadius = '3px 0px 0px 3px';
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
      companyBtn.current.style.borderRadius = '0px 3px 3px 0px';
      companyBtn.current.style.opacity = '1';
    } else {
      companyBtn.current.style.outline = 'none';
      companyBtn.current.style.background =
        '#009999 0% 0% no-repeat padding-box';
      companyBtn.current.style.borderRadius = '3px 0px 0px 3px';
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
      personalBtn.current.style.borderRadius = '0px 3px 3px 0px';
      personalBtn.current.style.opacity = '1';
    }
  };

  return (
    <div id="signin-container" style={customStyle}>
      <div id="signin-content">
        <div className="logo-close-popup">
          <button className="close-button" onClick={closePopup}>
            <img src={closeBtn} />
          </button>
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
              name="email-phone"
              placeholder="이메일 주소 입력하기"
            />
            <input
              className="input-password"
              name="password"
              placeholder="비밀번호"
            />
          </div>
          <button className="signin-button">패플라이 로그인</button>
          <div className="signin-find-idpw-content">
            <button className="find-idpw" onClick={toggleFindIdPw}>
              아이디/비밀번호 찾기
            </button>
            <div className="between-line">|</div>
            <button className="signup-button" onClick={toggleSignup}>
              회원가입
            </button>
          </div>
          <div className="signin-throw-social-title">채널 로그인하기</div>
          <div className="social-content">
            <div className="naver"></div>
            <div className="kakao"></div>
            <div className="facebook"></div>
            <div className="google"></div>
            <div className="apple"></div>
          </div>
        </div>
        {showSignup ? (
          <AcceptAgreement closePopup={closePopup} member={member} />
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
          {member === 'personal' ? (
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
    setShowSignup(!showSignup);
  };
  const emailValidateRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  //const emailValidateRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{3}$/i;

  const [email, setEmail] = useState('');
<<<<<<< HEAD
=======
  const emailValidateRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{3}$/i;
  //const emailValidateRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
>>>>>>> ea7514522f894866bf8c21d0d212ed025d7358dc
  const [isCorrectEmailForm, setCorrectEmailForm] = useState(true);
  const inputEmailRef = useRef();
  const submitEmailRef = useRef();
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(true);

  const validateEmailForm = (e) => {
    const value = e.target.value;
    setEmail(value);
    const flag = emailValidateRegex.test(value);
    setCorrectEmailForm(flag);
    if (!flag && value !== '') {
      inputEmailRef.current.style.border = '1px solid #FE5741';
    } else if (value === '') {
      inputEmailRef.current.style.border = '1px solid #CCCCCC';
    } else if (flag === true) {
      inputEmailRef.current.style.border = '1px solid #009999';
      setIsNextBtnDisabled(false);
      // axios
      //   .get('/member/count')
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(error, err);
      //   });
<<<<<<< HEAD
      //   axios
      //     .post('/member/count', {
      //       email: { email }
      //     })
      //     .then((res) => {
      //       console.log(res);
      //     })
      //     .catch((err) => {
      //       console.log(error, err);
      //     });
=======

      axios
        .post('/member/insert', {
          email: value
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(error, err);
        });
>>>>>>> ea7514522f894866bf8c21d0d212ed025d7358dc
    }
  };

  return (
    <div id="with-email-container">
      <div id="with-email-content">
        <div className="member-close-popup">
          <div className="empty-space"></div>
          {member === 'personal' ? (
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
          <InputSignupWithEmail closePopup={closePopup} member={member} />
        ) : null}
      </div>
    </div>
  );
}

function InputSignupWithEmail({ closePopup, member }) {
  const [showSignup, setShowSignup] = useState(false);
  const [isPhoneOrEmail, setPhoneOrEmail] = useState(false);
  const togglePopup = () => {
    setShowSignup(!showSignup);
  };

  const togglePhoneEmail = (f) => {
    const flag = f;
    setPhoneOrEmail(flag);
  };
  return (
    <div id="input-with-email-container">
      <div id="input-with-email-content">
        <div className="member-close-popup">
          <div className="empty-space"></div>
          {member === 'personal' ? (
            <div>개인회원 가입하기</div>
          ) : (
            <div>기업회원 가입하기</div>
          )}
          <button className="close-button" onClick={closePopup}>
            <img src={closeBtn} />
          </button>
        </div>
        <div className="header">
          <div className="title">패플라이 회원가입</div>
        </div>
        <div className="body">
          <span className="signup-name">이름</span>
          <input
            className="input-signup-name"
            placeholder="이름을 입력해주세요"
          />
          <span className="signup-password">비밀번호</span>
          <input
            className="input-signup-password"
            placeholder="8~12자의 영문, 숫자, 특수문자 중 2가지 이상 조합 필수"
          />
          <span className="signup-password">비밀번호 확인</span>
          <input
            className="input-signup-password-confirm"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
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
        {showSignup ? <SelectTaskYouWant closePopup={closePopup} /> : null}
      </div>
    </div>
  );
}

function SelectTaskYouWant({ closePopup }) {
  const [showSignup, setShowSignup] = useState(false);
  const togglePopup = () => {
    setShowSignup(!showSignup);
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
        <div className="member-close-popup">
          <div>
            <button className="personal-member">개인회원</button>
            <button className="company-member">기업회원</button>
          </div>
          <button className="close-button" onClick={closePopup}>
            닫기
          </button>
        </div>
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
          <button className="signup-done" onClick={togglePopup}>
            가입완료
          </button>
          <button className="signup-later" onClick={togglePopup}>
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
          <button className="go-signup" onClick={togglePopup}>
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
