import React, { useState, useRef } from 'react';
import '../../styles/SignInComponent'

function SignInComponent({closePopup}) {
    const [showSignup, setShowSignup] = useState(false);
    const togglePopup = () => {
        setShowSignup(!showSignup);           
    }
    return(
        <div className="signin-container">
            <div className="signin-content">
                <div className="member-close-popup">
                    <div>
                        <button className="personal-member">개인회원</button>
                        <button className="company-member">기업회원</button>
                    </div>
                    <button className="close-button" onClick={closePopup}>닫기</button>
                </div>
                <div className="header">
                    <div className="company-name">Fapply</div>
                    <div className="preamble-one">여러분의 소중한 커리어</div>
                    <div className="preamble-two">Fapply와 함께 만들어나가요!</div>
                </div>
                <div className="body">
                    <div className="title">로그인 정보</div>
                    <div className="input-content">
                        <input className="input-email-phone" name="email-phone" placeholder="이메일 or 전화번호"/>
                        <input className="input-password" name="password" placeholder="비밀번호"/>
                    </div>
                    <div className="signin-find-idpw-content">
                        <button>로그인</button>
                        <button>ID/PW 찾기</button>
                    </div>
                    <div className="signin-throw-social-title">채널 로그인하기</div>
                    <div className="social-content">
                        <div className="naver"></div>
                        <div className="kakao"></div>
                        <div className="facebook"></div>
                        <div className="google"></div>
                        <div className="apple"></div>
                    </div>
                    <div className="signup-fapply">
                        <button className="signup-button" onClick={togglePopup}>Fapply 회원되기</button>
                    </div>                    
                </div>
                {showSignup ? <SignupComponent closePopup={closePopup}/> : null}
            </div>
        </div>
    );
}

function SignupComponent({ closePopup }) {

    const [isPersonalInfoCilcked, setPersonalInfoCilcked] = useState(false);
    const [isMarketingInfoCilcked, setMarketingInfoCilcked] = useState(false);
    const togglePersonalInfo = () => {
        const clicked = !isPersonalInfoCilcked;
        setPersonalInfoCilcked(clicked);
        if(clicked === true) {
            signUpBody.current.style.marginTop = '35px';
            nextButton.current.style.marginTop = '65px';
        } else {
            signUpBody.current.style.marginTop = '150px';
            nextButton.current.style.marginTop = '50px';
        }
    }

    const toggleMarketingInfo = () => {
        const clicked = !isMarketingInfoCilcked;
        setMarketingInfoCilcked(clicked);

        if(clicked === true) {
            if (isPersonalInfoCilcked === true) {
                nextButton.current.style.marginTop = '-35px'
            } else {
                nextButton.current.style.marginTop = '-50px';
            }
        } else {
            if (isPersonalInfoCilcked === true) {
                nextButton.current.style.marginTop = '65px'
            } else {
                nextButton.current.style.marginTop = '50px';
            }
        }
    }

    const checkAll = () => {
        const allChecked = !isAllCheck;
        if( allChecked === true) {
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
    }

    const checkPersonalInfo = () => {
        setIsPeronalInfoChecked(!isPersonalInfoChecked);
    }

    const checkAgeFourteen = () => {
        setIsAgeFourteenChecked(!isAgeFourteenChecked);
    }

    const checkMarketingInfo = () => {
        setIsMarketingInfoChecked(!isMarketingInfoChecked);
    }

    const signUpBody = useRef();
    const nextButton = useRef();
    const [isAllCheck, setIsAllCheck] = useState(false);
    const [isPersonalInfoChecked, setIsPeronalInfoChecked] = useState(false);
    const [isAgeFourteenChecked, setIsAgeFourteenChecked] = useState(false);
    const [isMarketingInfoChecked, setIsMarketingInfoChecked] = useState(false);

    const [showSignup, setShowSignup] = useState(false);
    const togglePopup = () => {
        setShowSignup(!showSignup);           
    }

    return(
        <div className="signup-container">
            <div className="signup-content">
                <div className="member-close-popup">
                    <div>
                        <button className="personal-member">개인회원</button>
                        <button className="company-member">기업회원</button>
                    </div>
                    <button className="close-button" onClick={closePopup}>닫기</button>
                </div>
                <div className="header">
                    <div className="company-name">Fapply</div>
                    <div className="preamble-one">여러분의 소중한 커리어</div>
                    <div className="preamble-two">Fapply와 함께 만들어나가요!</div>
                </div>
                <div className="body" ref={signUpBody}>
                    <input type="checkbox" className="check-all" checked={isAllCheck} onChange={checkAll}></input>
                    <span className="check-all-title" onClick={checkAll}>전체동의</span>
                    <hr className="div-line"/>
                    <div className="personal-info-collect-container">
                        <div>
                            <div className="personal-info-collect-content">
                                <input type="checkbox" className="personal-info-collect" checked={isPersonalInfoChecked} 
                                onChange={checkPersonalInfo}></input>
                                <span className="personal-info-collect-title" onClick={checkPersonalInfo}>[필수] 개인정보 수집 및 이용 동의</span>                        
                            </div>
                            <div className="view-detail" onClick={togglePersonalInfo}>상세보기</div>
                        </div>
                        {isPersonalInfoCilcked ? <div className="full">
                            이것은 개인 정보에 관한 내용입니다.
                            이것은 개인 정보에 관한 내용입니다.
                            이것은 개인 정보에 관한 내용입니다.
                            이것은 개인 정보에 관한 내용입니다.
                            이것은 개인 정보에 관한 내용입니다.
                            이것은 개인 정보에 관한 내용입니다.
                            이것은 개인 정보에 관한 내용입니다.
                            이것은 개인 정보에 관한 내용입니다.
                            이것은 개인 정보에 관한 내용입니다.
                            이것은 개인 정보에 관한 내용입니다.
                            이것은 개인 정보에 관한 내용입니다.
                            이것은 개인 정보에 관한 내용입니다.
                            </div> : null}
                    </div>                  
                    <div>
                        <input type="checkbox" className="age-fourteen" checked={isAgeFourteenChecked} 
                        onChange={checkAgeFourteen}></input>
                        <span className="age-fourteen-title" onClick={checkAgeFourteen}>[필수] 만 14세 이상</span>
                    </div>
                    <div className="marketing-accept-container">
                        <div>
                            <div className="marketing-accept-content">
                                <input type="checkbox" className="marketing-accept" checked={isMarketingInfoChecked}
                                onChange={checkMarketingInfo}></input>
                                <span className="marketing-accept-title" onClick={checkMarketingInfo}>[선택] 마케팅 정보 수신 동의</span>
                            </div>
                            <div className="view-detail" onClick={toggleMarketingInfo}>상세보기</div>
                        </div>
                        {isMarketingInfoCilcked ? <div className="full">
                            이것은 마케팅 정보 수신 동의에 관한 내용입니다.
                            이것은 마케팅 정보 수신 동의에 관한 내용입니다.
                            이것은 마케팅 정보 수신 동의에 관한 내용입니다.
                            이것은 마케팅 정보 수신 동의에 관한 내용입니다.
                            이것은 마케팅 정보 수신 동의에 관한 내용입니다.
                            이것은 마케팅 정보 수신 동의에 관한 내용입니다.
                            이것은 마케팅 정보 수신 동의에 관한 내용입니다.
                            이것은 마케팅 정보 수신 동의에 관한 내용입니다.
                            </div> : null}
                    </div>
                    <div className="next-button-content">
                        <button ref={nextButton} onClick={togglePopup}>다음으로 넘어가기</button>
                    </div>
                </div>
                {showSignup ? <SigninWithPhoneEmail closePopup={closePopup}/> : null}
            </div>
        </div>
    );
}

function SigninWithPhoneEmail({closePopup}) {
    const [showSignup, setShowSignup] = useState(false);
    const togglePopup = () => {
        setShowSignup(!showSignup);           
    }
    return(
        <div className="with-phone-email-container">
            <div className="with-phone-email-content">
                <div className="member-close-popup">
                    <div>
                        <button className="personal-member">개인회원</button>
                        <button className="company-member">기업회원</button>
                    </div>
                    <button className="close-button" onClick={closePopup}>닫기</button>
                </div>
                <div className="header">
                    <div className="company-name">Fapply</div>
                    <div className="preamble-one">여러분의 소중한 커리어</div>
                    <div className="preamble-two">Fapply와 함께 만들어나가요!</div>
                </div>
                <div className="body">
                    <span>이메일 or 휴대폰 번호로 가입하기</span>
                    <input className="input-email-phone" placeholder="이메일 or 휴대폰 번호 입력"></input>
                    <button className="submit-email-phone" onClick={togglePopup}>이메일/휴대폰 번호로 가입하기</button>                    
                    <span className="or-text">or</span>
                    <button>카카오 계정으로 회원가입</button>
                    <button>네이버 계정으로 회원가입</button>
                    <button>페이스북 계정으로 회원가입</button>
                    <button>구글 계정으로 회원가입</button>
                    <button>애플 계정으로 회원가입</button>
                    <div className="guide-text">
                        <div>걱정마세요! 여러분의 지원 내역은 sns에 노출되지 않습니다.</div>
                        <div>회원가입 시 개인정보 처리방침과 이용약관을 확인하였으며 동의합니다.</div>
                    </div>
                </div>
                {showSignup ? <InputSignupWithPhoneEmail closePopup={closePopup}/> : null}
            </div>
        </div>
    );
}

function InputSignupWithPhoneEmail({ closePopup }) {
    const [showSignup, setShowSignup] = useState(false);
    const togglePopup = () => {
        setShowSignup(!showSignup);           
    }
    return(
        <div className="input-with-phone-email-container">
            <div className="input-with-phone-email-content">
                <div className="member-close-popup">
                    <div>
                        <button className="personal-member">개인회원</button>
                        <button className="company-member">기업회원</button>
                    </div>
                    <button className="close-button" onClick={closePopup}>닫기</button>
                </div>
                <div className="header">
                    <div className="company-name">Fapply</div>
                    <div className="preamble-one">여러분의 소중한 커리어</div>
                    <div className="preamble-two">Fapply와 함께 만들어나가요!</div>
                </div>
                <div className="body">
                        <div>
                            <span className="required">*</span>
                            <span className="signup-name"> 이름</span>
                        </div>
                        <input className="input-signup-name" placeholder="이름 입력"/>
                    <div>
                        <span className="required">*</span>
                        <span className="signup-password"> 비밀번호</span>
                    </div>
                    <input className="input-signup-password" placeholder="이름 입력"/>
                </div>
                {showSignup ? <SigninWithPhoneEmail closePopup={closePopup}/> : null}
            </div>
        </div>
    );
}
export default SignInComponent;