import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import '../../styles/MyPageComponent';
import david from './images/david.jpg';
import closeBtn from './images/close_button.svg';
import Resume from '../resume/Resume';
import emptyHeart from './images/empty_heart.png';
import fullHeart from './images/full_heart.png';
import emptyBookmark from './images/empty_bookmark.png';
import fullBookmark from './images/full_bookmark.png';


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

    // const initValues = new Array(menuNumber.length);
    // initValues.fill(false);
    // const [menu, setMenu] = useState();
    // const toggleProfileClick = () => {
    //     if (isProfileClicked === true) {
    //         return;
    //     }
    //     else {            
    //         setProfileClicked(true);            
    //         setOfferClicked(false);
    //         setBookmarkClicked(false);
    //         setAccountClicked(false);
    //     }
    // }

    const toggleNoticeClick = () => {
        setNoticeClicked(!isNoticeClicked);
    }

    //const [isProfileClicked, setProfileClicked] = useState(true);
    const [isResumeClicked, setResumeClicked] = useState(false);
    const [isNoticeClicked, setNoticeClicked] = useState(false);
    const [isBookmarkClicked, setBookmarkClicked] = useState(false);
    // const [isAccountClicked, setAccountClicked] = useState(false);

    const [isOfferClicked, setOfferClicked] = useState(false);
    // const [isRecruitClicked, setRecruitClicked] = useState(false);
    // const [isLikeRecruitClicked, setLikeRecruitClicked] = useState(false);
    // const [isEtcClicked, setEtcClicked] = useState(false);    

    // const toggleAllToFalse = () => {
    //     // 프로필
    //     setProfileClicked(false);            
    //     // 알림
    //     setOfferClicked(false);
    //     setRecruitClicked(false);        
    //     setLikeRecruitClicked(false);
    //     // 이력서


    //     // 북마크

    //     setAccountClicked(false);
    // }

    const toggleOfferClick = () => {
        setOfferClicked(!isOfferClicked);
    }

    const toggleResume = () => {
        const clicked = !isResumeClicked;
        setResumeClicked(clicked);
    }

    const toggleBookmarkClick = () => {
        setBookmarkClicked(!isBookmarkClicked);
    }

    const toggleAccountClick = () => {
        // if (isAccountClicked === true) {
        //     return;
        // } else {
        //     setProfileClicked(false);
        //     setAccountClicked(true);
        //     setNoticeClicked(false);            
        //     setBookmarkClicked(false);
        // }
    }  

    const menuNumber = {profile: 0, recruitOffer: 1, recruitNotice:2, etc: 3, resumeList:4, 
                        writeResume: 5, recentViewNotice: 6};
    Object.freeze(menuNumber);
    const [menu, setMenu] = useState(menuNumber.profile);

    const PrintComponent = () => {
        switch(menu) {
            case menuNumber.profile:
                return <Profile/>
            case menuNumber.recruitOffer:
                return <RecruitOffer />
            // case menuNumber.recruitNotice:
            //     return <RecruitNotice/>
            case menuNumber.resumeList:
                return <ResumeList />
            case menuNumber.writeResume:
                return <Resume />
            case menuNumber.recentViewNotice:
                return <RecentViewNotice />
        }
    }
    
    return(
        <article id="mypage-wrapper">
            <aside className="mypage-skyscraper">
                <div className="profile" onClick={() => setMenu(menuNumber.profile)}>프로필/관심직무 관리</div>
                <div className="notice" onClick={toggleNoticeClick}>알림</div>
                {isNoticeClicked ?
                    <nav className="notice-clicked">
                        <div className="recruit-offer" onClick={() => setMenu(menuNumber.recruitOffer)}>채용제안</div>
                        <div className="recruit-notice" onClick={() => setMenu(menuNumber.recruitNotice)}>채용공고</div>                        
                        <div className="etc">기타</div>
                    </nav>
                    : null}
                <div className="resume" onClick={toggleResume}>이력서관리</div>
                {isResumeClicked ? 
                    <nav className="resume-clicked">
                        <div className="resume-list" onClick={() => setMenu(menuNumber.resumeList)}>이력서 목록</div>
                        <div className="edit-resume" onClick={() => setMenu(menuNumber.writeResume)}>이력서 작성</div>
                        <div className="career-list">경력기술서 목록</div>
                    </nav>
                : null}
                <div className="book-mark" onClick={toggleBookmarkClick}>북마크</div>
                {isBookmarkClicked ? 
                <nav className="bookmark-clicked">
                    <div className="recent-view-notice" onClick={() => setMenu(menuNumber.recentViewNotice)}>최근 본 공고</div>
                    <div className="like-company-list">관심 기업 목록</div>
                    <div className="like-notice-list">관심 공고 목록</div>
                </nav>
                : null}
                <div className="account" onClick={toggleAccountClick}>계정관리</div>
            </aside>
            <main id="mypage-container">         
                {PrintComponent()}
                {console.log(menuNumber.profile)}
            </main>
        </article>
    );
}

function Profile() {
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

    return(
        <article id="profile-container">
            <section className="profile-content">
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
            </section>
        </article>
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

function RecruitOffer() { 
    const [offerItems, setofferItems] = useState([
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
            content: '담당자로부터 이력서 공개요청이 도착했습니다.',
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
        <article id="recruit-offer-container">
            <section id="recruit-offer-content">
                <div className="title-content">                            
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
                            offerItems.map(item => (
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
            </section>
        </article>
    );
}

function RecruitNotice() {
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
            content: '담당자로부터 이력서 공개요청이 도착했습니다.',
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
        <article id="recruit-notice-container">
            <section id="recruit-notice-content">
                <div className="header">                            
                    <div className="title">
                        <span className="main">채용공고</span>
                        <span className="sub">북마크한 기업의 활동 알림입니다.</span>
                    </div>
                    {/* <div className="select-rows-content">
                        <select className="select-rows" defaultValue="10">
                            <option value="10">10개씩 노출</option>
                            <option value="20">20개씩 노출</option>
                            <option value="30">30개씩 노출</option>
                            <option value="50">50개씩 노출</option>
                        </select>
                    </div> */}
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
            </section>
        </article>
    );
}

function ResumeList() {
    const [offerItems, setofferItems] = useState([
        {
            id: 1,
            isRepresentative: true,
            title: '현대자동차_마케팅_홍길동',
            finishDate:'2020.11.30'
        },
        {
            id: 2,
            isRepresentative: false,
            title: '현대모비스_기획/마케팅_홍길동',
            finishDate:'2021.1.20',
        },   
        {
            id: 3,
            isRepresentative: false,
            title: '쿠팡_인사총무_홍길동',
            finishDate:'2021.1.20',
        },   
        {
            id: 4,
            isRepresentative: false,
            title: '네이버_마케팅_홍길동',
            finishDate:'2021.1.30',
        },   
        {
            id: 5,
            isRepresentative: false,
            title: '카카오_마케팅_홍길동',
            finishDate:'2021.2.1',
        }  
    ]);

    return(
        <article id="resume-list-container">
            <section id="resume-list-content">
                <nav>
                    <ul className="resume-breadcrumb">
                        <li className="breadcrumb-items">이력서 관리 &gt; </li>                        
                        <li className="breadcrumb-items">이력서 목록</li>
                    </ul>
                </nav>
                <div className="preamble">
                    <div>-공개될 대표 이력서는 1개만 가능합니다.</div>
                    <div>-미완성 이력서는 공개되지 않습니다.</div>
                    <div>-입사지원을 한 후 해당 이력서의 내용을 수정해도 지원한 이력서의 내용은 바뀌지 않습니다.</div>
                </div>
                <div className="title-content">
                    <div>
                        <span className="title">최대 10개 중 </span>
                        <span>{offerItems.length}</span>
                        <span>건</span>
                    </div>
                    <button>신규 이력서 만들기 +</button>
                </div>
                {offerItems.map(item=>
                <div className="resume-box-container" key={item.id}>
                    <div className="resume-box-content">
                        <div className="header">
                            {item.isRepresentative ? 
                            <div className="representative-resume">대표 이력서</div> : <div className="normal-resume">이력서</div>
                            }                            
                            <div>
                                <span className="status">작성완료</span>
                                <span className="modified-date">최종수정일:{item.finishDate}</span>
                            </div>
                        </div>
                        <div>(자소서명) {item.title} </div>                        
                        <div className="resume-bottom">
                            <div className="left">
                                <span>공개 설정 변경: 공개</span>
                                <button>변경</button>
                                <span>지원내역 보기</span>
                            </div>
                            <div className="right">
                                <button className="export">내보내기</button>
                                <button className="copy">복사하기</button>
                                <button className="delet">삭제하기</button>
                                <button className="modify">수정하기</button>
                            </div>
                        </div>
                    </div>
                </div>)}               
            </section>
        </article>
    );
}

function RecentViewNotice() {
    const [offerItems, setofferItems] = useState([
        {
            id: 1,
            dDay: 15,
            like: true,
            region: '경기 성남시',
            employmentForm: '정규직, 계약직',
            education: '학력무관',
            career: '경력 2년 이상',
            bookmarked: true,
            companyName: '(주)카카오커머스',
            title: '서비스 직군 모집',
            finishDate:'2021.2.12 16:00'
        },
        {
            id: 2,
            dDay: 5,
            like: false,
            region: '서울 중구',
            employmentForm: '정규직',
            education: '학력무관',
            career: '경력무관',
            bookmarked: false,
            companyName: '(주)SK 플래닛',
            title: '개발 직군 모집',
            finishDate:'2021.1.30 18:00'
        },
        {
            id: 3,
            dDay: 10,
            like: true,
            region: '경기 성남시',
            employmentForm: '정규직, 계약직',
            education: '학력무관',
            career: '경력 2년 이상',
            bookmarked: false,
            companyName: '네이버페이',
            title: '경력 개발자 모집',
            finishDate:'2021.4.1 14:00'
        },
        {
            id: 4,
            dDay: 12,
            like: false,
            region: '서울 송파구',
            employmentForm: '정규직',
            education: '학력무관',
            career: '경력 2년 이상',
            bookmarked: true,
            companyName: '우아한형제들',
            title: '시니어 프론트 엔드 개발자 모집',
            finishDate:'2021.3.1 15:00'
        },
        {
            id: 5,
            dDay: 10,
            like: true,
            region: '경기 성남시',
            employmentForm: '정규직, 계약직',
            education: '학력무관',
            career: '경력 2년 이상',
            bookmarked: true,
            companyName: '당근마켓',
            title: '평화로운 중고딩 모집',
            finishDate:'2021.1.11'
        }
    ]);

    return(
        <article id="recent-notice-container">
            <section id="recent-notice-content">
                <nav>
                    <ul className="recent-notice-breadcrumb">
                        <li className="breadcrumb-items">북마크 &gt; </li>                        
                        <li className="breadcrumb-items">최근 본 공고</li>
                    </ul>
                </nav>
                <div className="preamble">
                </div>
                <div className="title-content">
                    <div>
                        <div>-최대 100개의 최근 본 공고내역이 조회됩니다.</div>
                        <div>-삭제된 공고는 조회되지 않습니다.</div>                    
                    </div>
                    <div>
                        <button>전체선택</button>
                        <button>선택삭제</button>
                    </div>                    
                </div>
                {offerItems.map(item=>
                <div className="body-container" key={item.id}>
                    <div className="company-content">                        
                        <div className="left">
                            <div className="top">
                                <div className="d-day">
                                    <span>D-</span>
                                    <span>{item.dDay}</span>
                                </div>
                                <div className="like">
                                    <span className="like-company">관심기업</span>
                                    {item.like ? <img src={emptyHeart}/> : <img src={fullHeart}/>}                                    
                                </div>
                            </div>
                            <div className="bottom"> 
                                <div>{item.companyName}</div>
                                <div>{item.finishDate}</div>
                            </div>
                        </div>
                        <div className="right">
                            <div>logo</div>
                        </div>
                    </div>
                    <div className="main-content">
                        <div className="header">
                            <div>
                                [{item.companyName}] {item.title}
                            </div>
                            <div className="bookmark-post">
                                <span>관심공고</span>
                                {item.bookmarked ? 
                                <img src={fullBookmark}/> : <img src={emptyBookmark}/>}
                            </div>

                        </div>
                    </div>
                </div>)}               
            </section>
        </article>
    );
}

export default MyPageComponent;