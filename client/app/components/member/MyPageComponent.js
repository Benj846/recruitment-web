import React, { useState } from 'react';
import Select from 'react-select';
import '../../styles/MyPageComponent';
import david from './images/david.jpg';

function MyPageComponent() {
    const [memberInfo, setMemberInfo] = useState({
        name: 'david gandy',
        gender: 'male',
        birth: '1980-02-19',
        phone: '010-0000-0000',
        email: 'user@mail.com'
    });

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

    return(
        <div id="mypage-container">
            <div id="mypage-content">
                <div className="profile-title">나의 프로필</div>
                {/* <hr className="div-line"/> */}
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
                        <button className="change-phone-btn">변경</button>
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
                <div className="customize-job">
                    <div className="header">
                        <div className="title-content">
                            <span className="title">내가 설정한 관심 직무</span>
                            <span className="sub-title">세부 직무는 최대 6개까지 설정할 수 있습니다.</span>
                        </div>                    
                        <button className="submit">등록하기</button>
                    </div>
                    <hr className="job-div"/>
                </div>
            </div>
        </div>
    );
}

export default MyPageComponent;