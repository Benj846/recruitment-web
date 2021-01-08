import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import '../../styles/MyPageComponent';
import david from './images/david.jpg';
import closeBtn from './images/close_button.svg';

function MyPageComponent() {

    const API_HOST = "http://localhost:3333";
    const MYPAGE_API_URL = `${API_HOST}/mypage`;
    // const fetchMypage = () => {
    //     fetch(`${MYPAGE_API_URL}`)
    //         .then(res => res.json())
    //         .then(json=>SVGMetadataElement(json))
    // }
    // useEffect(() => {
    //     fetchMypage()
    // }, []);

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

    const [isProfileClicked, setProfileClicked] = useState(true);
    const [isResumeClicked, setResumeClicked] = useState(false);
    const [isNoticeClicked, setNoticeClicked] = useState(false);
    const [isBookmarkClicked, setBookmarkClicked] = useState(false);
    const [isAccountClicked, setAccountClicked] = useState(false);

    const toggleProfileClick = () => {
        if (isProfileClicked === true) {
            return;
        }
        else {            
            setProfileClicked(true);
            setNoticeClicked(false);
            setBookmarkClicked(false);
            setAccountClicked(false);
        }
    }

    const toggleNoticeClick = () => {
        const flag = !isNoticeClicked;
        setNoticeClicked(flag);
    }

    const [isOfferClicked, setOfferClicked] = useState(false);
    const [isLikeCompanyClicked, setLikeCompanyClicked] = useState(false);
    const [isLikeNoticeClicked, setLikeNoticeClicked] = useState(false);
    const [isEtcClicked, setEtcClicked] = useState(false);


    const toggleOfferClick = () => {
        if (isOfferClicked === true) {
            return;
        } else {
            setOfferClicked(true);
            setLikeCompanyClicked(false);
            setLikeNoticeClicked(false);
            setEtcClicked(false);
            setProfileClicked(false);
        }
    }

    const toggleResume = () => {
        const clicked = !isResumeClicked;
        setResumeClicked(clicked);
    }

    const toggleBookmarkClick = () => {
        // if(isBookmarkClicked === true) {
        //     return;
        // } else {
        //     setProfileClicked(false);
        //     setNoticeClicked(false);
        //     setBookmarkClicked(true);
        //     setAccountClicked(false);
        // }
    }

    const toggleAccountClick = () => {
        if (isAccountClicked === true) {
            return;
        } else {
            setProfileClicked(false);
            setAccountClicked(true);
            setNoticeClicked(false);            
            setBookmarkClicked(false);
        }
    }

    const [noticeItems, setNoticeItems] = useState([
        {
            id: 1,
            company: '네이버',
            content: '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
            date: '21-01-08 13:00',
            expired: '21-02-07 13:00'
        },
        {
            id: 2,
            company: '삼성전자',
            content: '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
            date: '21-01-08 13:00',
            expired: '21-02-07 13:00'
        },
        {
            id: 3,
            company: '딜리버리 히어로',
            content: '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
            date: '21-01-08 13:00',
            expired: '21-02-07 13:00'
        },
        {
            id: 4,
            company: '쿠팡',
            content: '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
            date: '21-01-08 13:00',
            expired: '21-02-07 13:00'
        },
        {
            id: 5,
            company: '우아한형제들',
            content: '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
            date: '21-01-08 13:00',
            expired: '21-02-07 13:00'
        },
        {
            id: 6,
            company: '현대자동차',
            content: '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
            date: '21-01-08 13:00',
            expired: '21-02-07 13:00'
        },
        {
            id: 7,
            company: '카카오',
            content: '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
            date: '21-01-08 13:00',
            expired: '21-02-07 13:00'
        },
        {
            id: 8,
            company: '어메이징 브루잉 컴퍼니',
            content: '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
            date: '21-01-08 13:00',
            expired: '21-02-07 13:00'
        },
        {
            id: 9,
            company: '여기어때',
            content: '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
            date: '21-01-08 13:00',
            expired: '21-02-07 13:00'
        },
        {
            id: 10,
            company: 'Vercel',
            content: '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
            date: '21-01-08 13:00',
            expired: '21-02-07 13:00'
        }
    ]);
    
    return(
        <div id="mypage-wrapper">
            <div className="mypage-skyscraper">
                <div className="profile" onClick={toggleProfileClick}>프로필/관심직무 관리</div>
                <div className="notice" onClick={toggleNoticeClick}>알림</div>
                {isNoticeClicked ?
                    <div className="notice-clicked-content">
                        <div className="offer" onClick={toggleOfferClick}>채용제안</div>
                        <div className="like-company">관심기업</div>
                        <div className="like-notice">관심공고</div>
                        <div className="etc">기타</div>
                    </div>
                    : null}
                <div className="resume" onClick={toggleResume}>이력서관리</div>
                {isResumeClicked ? 
                    <div class="resume-clicked-content">
                        <div className="resume-list">이력서 목록</div>
                        <div className="edit-resume">이력서 작성</div>
                        <div className="career-list">경력기술서 목록</div>
                    </div>
                : null}
                <div className="book-mark" onClick={toggleBookmarkClick}>북마크</div>
                <div className="account" onClick={toggleAccountClick}>계정관리</div>
            </div>

            <div id="mypage-container">         
                {/* 나의 프로필 */}
                {isProfileClicked ?
                <div id="profile-container">
                    <div className="profile-content">
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
                : null}
                {/* 나의 프로필 */}

                {/* 채용 제안 */}
                {isOfferClicked ? 
                <div id="offer-container">
                    <div id="offer-content">
                        <div className="header">                            
                            <div className="title">
                                <span className="main">채용제안</span>
                                <span className="sub">기업에서 보내온 채용 제안입니다.</span>
                            </div>
                            <div className="select-rows-content">
                                <select className="select-rows" defaultValue="10">
                                    <option value="10">10개씩 노출</option>
                                    <option value="20">20개씩 노출</option>
                                    <option value="30">30개씩 노출</option>
                                    <option value="50">50개씩 노출</option>
                                </select>
                            </div>
                        </div>
                        <div className="notice-guide">
                            알림을 확인할 수 있습니다. 알림은 3개월 후 삭제됩니다.
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>회사명</th>
                                    <th>알림내용</th>
                                    <th>요청일시</th>
                                    <th>마감일정</th>
                                </tr>
                            </thead>                            
                            <tbody>
                                {
                                    noticeItems.map(item => (
                                        <tr key = {item.id} >
                                            <td>{item.company}</td>
                                            <td>{item.content}</td>
                                            <td>{item.date}</td>
                                            <td>{item.expired}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="pager">1 2 3 4 5 6 7 8 9 10</div>
                    </div>
                </div>
                : null}
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