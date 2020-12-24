import React from 'react';
import '../../styles/SignInComponent'

function SignInComponent({closeSignIn}) {
    return(
        <div className="signin-container">
            <div className="signin-content">
                <div className="close-signin">
                    <button className="close-button" onClick={closeSignIn}>닫기</button>
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
                    <div className="signup-content">
                        <button className="signup-fapply">Fapply 회원되기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignInComponent;