import React, { useState } from 'react';
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
                    {showSignup ? 
                        <SignupComponent closePopup={closePopup}/> : null}
                </div>
            </div>
        </div>
    );
}

function SignupComponent({ closePopup }) {
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
                <div className="body">                    
                    <input type="checkbox" className="check-all"></input>
                    <span className="check-all-title">전체동의</span>
                    <hr className="div-line"/>
                    <div>
                        <div className="personal-info-collect-content">
                            <input type="checkbox" className="personal-info-collect"></input>
                            <span className="personal-info-collect-title">[필수] 개인정보 수집 및 이용 동의</span>                        
                        </div>
                        <div className="view-detail">상세보기</div>
                    </div>
                    <div>
                        <input type="checkbox" className="age-fourteen"></input>
                        <span className="age-fourteen-title">[필수] 만 14세 이상</span>
                    </div>
                    <div>
                        <div className="marketing-accept-content">
                            <input type="checkbox" className="marketing-accept"></input>
                            <span className="marketing-accept-title">[선택] 마케팅 정보 수신 동의</span>
                        </div>
                        <div className="view-detail">상세보기</div>
                    </div>
                    <div className="next-button-content">
                        <button>다음으로 넘어가기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInComponent;