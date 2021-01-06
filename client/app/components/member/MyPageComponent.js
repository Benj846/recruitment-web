import React, { useState } from 'react';
import Select from 'react-select';
import '../../styles/MyPageComponent';
import david from './images/david.jpg';
import closeBtn from './images/close_button.svg';

function MyPageComponent() {
    const [memberInfo, setMemberInfo] = useState({
        name: 'david gandy',
        gender: 'male',
        birth: '1980-02-19',
        phone: '010-0000-0000',
        email: 'user@mail.com'
    });
    const [isPhoneChangeClicked, setPhoneChangeClicked] = useState(false);
    const toggleChangePhone = () => {
         const clicked = !isPhoneChangeClicked;
         setPhoneChangeClicked(clicked);
    }

    const customStyle = {
        control: (base, state) => ({
            ...base,            
            width: '230px',
            height: '40px',
            minHeight: '40px',
            borderRadius: '0px',
            boxShadow: state.isFocused ? 0 : 0,
            borderColor: state.isFocused ? '#DDDDDD' : '#DDDDDD',
            paddingLeft: '5px',
            fontSize: '14px',
            '&:hover': {
                borderColor : state.isFocused ? null : null
            },
        })
    }

    const [isResumeClicked, setResumeClicked] = useState(false);
    const toggleResume = () => {
        const clicked = !isResumeClicked;
        setResumeClicked(clicked);
    }
    
    return(
        <div id="mypage-wrapper">
            <div className="mypage-skyscraper">
                <div className="title">프로필/관심직무 관리</div>
                <div className="notice">알림</div>
                <div className="resume" onClick={toggleResume}>이력서관리</div>
                {isResumeClicked ? 
                    <div class="added-content">
                        <div className="resume-list">이력서 목록</div>
                        <div className="edit-resume">이력서 작성</div>
                        <div className="career-list">경력기술서 목록</div>
                    </div>
                : null}
                <div className="book-mark">북마크</div>
                <div className="account">계정관리</div>
            </div>

            <div id="mypage-container">
                <div id="mypage-content">
                    <div className="profile-title">나의 프로필</div>
                    <hr className="div-line"/>
                    <div className="info">                    
                        <div className="pic">
                            <img src={david} width="160px" height="220px"></img>
                            <div className="buttons">
                                <button className="change-btn">변경</button>
                                <button className="delete-btn">삭제</button>
                            </div>                        
                        </div>
                        <div className="basic">
                            <span className="name font-style">이름</span>
                            <input className="input-name" defaultValue={memberInfo.name} disabled={true}/>
                            <span className="gender font-style">성별</span>
                            <button className="male">남</button>
                            <button className="female">여</button>
                            <span className="birth-title font-style">생년월일</span>
                            <input className="birth" disabled={true} defaultValue={memberInfo.birth}/>
                            <span className="phone-title font-style">전화번호</span>
                            <input className="input-phone" defaultValue={memberInfo.phone}/>
                            <button className="change-phone-btn" onClick={toggleChangePhone}>변경</button>
                            <span className="email-title font-style">이메일</span>
                            <input className="input-email" defaultValue={memberInfo.phone} disabled={true}/>
                            <span className="job-status font-style">구직상태</span>
                            <Select styles={customStyle} placeholder="선택해주세요" className="select-job-status"/>
                            <hr className="basic-div"/>
                            <div className="mailing-avail">
                                <span className="font-style">수신여부</span>
                                <div className="content">
                                    <span className="font-style">마케팅/이벤트 관련 SMS/MMS 수신동의</span>
                                    <button className="marketing-btn"></button>
                                    <span className="font-style">패플라이 AI JOB 추천 메일 수신 여부</span>
                                    <button className="job-offer-btn"></button>
                                    <span className="font-style">공지/이벤트 메일 수신 여부</span>
                                    <button className="noti-event-btn"></button>
                                    <span className="font-style">관심기업 관련 메일 수신 여부</span>
                                    <button className="like-btn"></button>
                                </div>
                            </div>                        
                        </div>
                    </div>
                    {isPhoneChangeClicked ? <ChangePhoneNumber closePopup={toggleChangePhone}/> : null }
                    <div className="customize-job">
                        <div className="header">
                            <div className="title-content">
                                <span className="title">내가 설정한 관심 직무</span>
                                <span className="sub-title">세부 직무는 최대 6개까지 설정할 수 있습니다.</span>
                            </div>                    
                            <button className="submit">등록하기+</button>
                        </div>
                        <hr className="job-div"/>
                        <div className="main">
                            <div className="added-job">
                                아직 등록된 관심직무가 없습니다.
                            </div>                        
                            <button className="save-btn">변경사항 저장</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ChangePhoneNumber({closePopup}) {
return(
        <div className="change-phone-container">
            <div className="change-phone-content">
                <div className="close-popup">
                    <img src={closeBtn} className="btn" onClick={closePopup}></img>
                </div>
                <div className="title">휴대폰 번호 변경</div>
                <div className="input-content">
                    <div className="input-phone-title">휴대폰 번호 입력</div>
                    <input className="phone" placeholder="숫자만 입력해주세요"/>
                    <button className="confirm-phone">확인</button>
                    <div className="verify-title">인증번호 확인</div>
                    <input className="number" placeholder="인증번호 네 자리를 입력해주세요."/>
                    <button className="confirm-verify">확인</button>

                </div>
            </div>
        </div>
    );
}
export default MyPageComponent;