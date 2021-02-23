import React, { useEffect, useState } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Select from 'react-select';
import '../../styles/MyPageComponent';
import david from './images/david.jpg';
import closeBtn from './images/close_button.svg';
import emptyHeart from './images/empty_heart.png';
import fullHeart from './images/full_heart.png';
import emptyBookmark from './images/empty_bookmark.png';
import fullBookmark from './images/full_bookmark.png';
import MainComponent from '../Main/MainComponent';
import ResumeComponent from '../resume/ResumeComponent';
import axios from 'axios';

function MyPageComponent() {
  const API_HOST = 'http://localhost:3333';
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
  };

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
  };

  const toggleResume = () => {
    const clicked = !isResumeClicked;
    setResumeClicked(clicked);
  };

  const toggleBookmarkClick = () => {
    setBookmarkClicked(!isBookmarkClicked);
  };

  const toggleAccountClick = () => {
    // if (isAccountClicked === true) {
    //     return;
    // } else {
    //     setProfileClicked(false);
    //     setAccountClicked(true);
    //     setNoticeClicked(false);
    //     setBookmarkClicked(false);
    // }
  };

  const menuNumber = {
    profile: 0,
    recruitOffer: 1,
    recruitNotice: 2,
    etc: 3,
    resumeList: 4,
    writeResume: 5,
    recentViewNotice: 6,
    bookmarkedCompanyList: 7,
    bookmarkedRecruitList: 8,
    accountManagement: 9
  };
  Object.freeze(menuNumber);
  const [menu, setMenu] = useState(menuNumber.profile);

  const PrintComponent = () => {
    switch (menu) {
      case menuNumber.profile:
        return <Profile />;
      case menuNumber.recruitOffer:
        return <RecruitOffer />;
      // case menuNumber.recruitNotice:
      //     return <RecruitNotice/>
      case menuNumber.resumeList:
        return <ResumeList />;
      case menuNumber.writeResume:
        return <MakeResume />;
      case menuNumber.recentViewNotice:
        return <RecentViewNotice />;
      case menuNumber.bookmarkedCompanyList:
        return <BookmarkedCompanyList />;
      case menuNumber.bookmarkedRecruitList:
        return <BookmarkedRecruitList />;
      case menuNumber.accountManagement:
        return <AccountManagement />;
    }
  };

  return (
    <section id="mypage-wrapper">
      <aside className="mypage-skyscraper">
        <div className="profile" onClick={() => setMenu(menuNumber.profile)}>
          프로필/관심직무 관리
        </div>
        <div className="notice" onClick={toggleNoticeClick}>
          알림
        </div>
        {isNoticeClicked ? (
          <nav className="notice-clicked">
            <div
              className="recruit-offer"
              onClick={() => setMenu(menuNumber.recruitOffer)}
            >
              채용제안
            </div>
            <div
              className="recruit-notice"
              onClick={() => setMenu(menuNumber.recruitNotice)}
            >
              채용공고
            </div>
            <div className="etc">기타</div>
          </nav>
        ) : null}
        <div className="resume" onClick={toggleResume}>
          이력서관리
        </div>
        {isResumeClicked ? (
          <nav className="resume-clicked">
            <div
              className="resume-list"
              onClick={() => setMenu(menuNumber.resumeList)}
            >
              이력서 목록
            </div>
            <div
              className="edit-resume"
              onClick={() => setMenu(menuNumber.writeResume)}
            >
              이력서 작성
            </div>
            <div className="career-list">경력기술서 목록</div>
          </nav>
        ) : null}
        <div className="book-mark" onClick={toggleBookmarkClick}>
          북마크
        </div>
        {isBookmarkClicked ? (
          <nav className="bookmark-clicked">
            <div
              className="recent-view-notice"
              onClick={() => setMenu(menuNumber.recentViewNotice)}
            >
              최근 본 공고
            </div>
            <div
              className="like-company-list"
              onClick={() => setMenu(menuNumber.bookmarkedCompanyList)}
            >
              관심 기업 목록
            </div>
            <div
              className="like-notice-list"
              onClick={() => setMenu(menuNumber.bookmarkedRecruitList)}
            >
              관심 공고 목록
            </div>
          </nav>
        ) : null}
        <div
          className="account"
          onClick={() => setMenu(menuNumber.accountManagement)}
        >
          계정관리
        </div>
      </aside>
      <main id="mypage-container">{PrintComponent()}</main>
    </section>
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
  };

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
        borderColor: state.isFocused ? null : null
      }
    })
  };

  const [profileName, setProfileName] = useState([]);
  const [profilePath, setProfilePath] = useState([]);
  const [filePreview, setfilePreview] = useState('');
  const [filePath, setFilePath] = useState(david);

  const FileChange = (e) => {
    setProfileName(e.target.files[0]);
    setProfilePath(e.target.value);
    setfilePreview(URL.createObjectURL(e.target.files[0]));
  };

  //DB이미지 불러오기, 1자리에 id나 email 넣어서 고객 식별
  async function getImage() {
    try {
      const response = await axios.get('/api/getimage/' + 1);
      // console.log(response.data);
      // console.log(response.data[0].PIC);
      const dataArr = response.data[0].PIC;
      setFilePath(dataArr);
    } catch (error) {
      console.error(error);
    }
  }

  //이미지 업데이트
  const onClickSubmit = (e) => {
    const formData = new FormData();
    formData.append('profileName', profileName);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios.post('/api/upload', formData, config);
  };

  //이미지 삭제
  async function deleteImage() {
    await axios.post('/api/deleteimage');
  }

  return (
    <section id="profile-container">
      <article className="profile-content">
        <div className="profile-title">나의 프로필</div>
        <hr className="div-line" />
        <div className="info">
          <div className="pic">
            <div style={{ display: 'flex' }}>
              {filePreview == '' ? (
                (getImage(),
                filePath == null ? (
                  <img
                    src={david}
                    width="160px"
                    height="220px"
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <img
                    src={filePath}
                    width="160px"
                    height="220px"
                    style={{ objectFit: 'cover' }}
                  />
                ))
              ) : (
                <img
                  src={filePreview}
                  width="160px"
                  height="220px"
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
            <div className="buttons">
              {/* <button className="change-btn">변경</button> */}
              <label className="change-btn" for="change-bt">
                변경
              </label>
              <input
                id="change-bt"
                style={{ display: 'none' }}
                type="file"
                name="file"
                file={profileName}
                onChange={FileChange}
              />
              <button className="delete-btn" onClick={deleteImage}>
                삭제
              </button>
            </div>
          </div>
          <div className="basic">
            <span className="name font-style">이름</span>
            <input
              className="input-name"
              defaultValue={memberInfo.name}
              disabled={true}
            />
            <span className="gender font-style">성별</span>
            <button className="male">남</button>
            <button className="female">여</button>
            <span className="birth-title font-style">생년월일</span>
            <input
              className="birth"
              disabled={true}
              defaultValue={memberInfo.birth}
            />
            <span className="phone-title font-style">전화번호</span>
            <input className="input-phone" defaultValue={memberInfo.phone} />
            <button className="change-phone-btn" onClick={toggleChangePhone}>
              변경
            </button>
            <span className="email-title font-style">이메일</span>
            <input
              className="input-email"
              defaultValue={memberInfo.phone}
              disabled={true}
            />
            <span className="job-status font-style">구직상태</span>
            <Select
              styles={customStyle}
              placeholder="선택해주세요"
              className="select-job-status"
            />
            <hr className="basic-div" />
            <div className="mailing-avail">
              <span className="font-style">수신여부</span>
              <div className="content">
                <span className="font-style">
                  마케팅/이벤트 관련 SMS/MMS 수신동의
                </span>
                <button className="marketing-btn"></button>
                <span className="font-style">
                  패플라이 AI JOB 추천 메일 수신 여부
                </span>
                <button className="job-offer-btn"></button>
                <span className="font-style">공지/이벤트 메일 수신 여부</span>
                <button className="noti-event-btn"></button>
                <span className="font-style">관심기업 관련 메일 수신 여부</span>
                <button className="like-btn"></button>
              </div>
            </div>
          </div>
        </div>
        {isPhoneChangeClicked ? (
          <ChangePhoneNumber closePopup={toggleChangePhone} />
        ) : null}
        <div className="customize-job">
          <div className="header">
            <div className="title-content">
              <span className="title">내가 설정한 관심 직무</span>
              <span className="sub-title">
                세부 직무는 최대 6개까지 설정할 수 있습니다.
              </span>
            </div>
            <button className="submit">등록하기+</button>
          </div>
          <hr className="job-div" />
          <div className="main">
            <div className="added-job">아직 등록된 관심직무가 없습니다.</div>
            <button className="save-btn" onClick={onClickSubmit}>
              변경사항 저장
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

function ChangePhoneNumber({ closePopup }) {
  return (
    <div className="change-phone-container">
      <div className="change-phone-content">
        <div className="close-popup">
          <img src={closeBtn} className="btn" onClick={closePopup}></img>
        </div>
        <div className="title">휴대폰 번호 변경</div>
        <div className="input-content">
          <div className="input-phone-title">휴대폰 번호 입력</div>
          <input className="phone" placeholder="숫자만 입력해주세요" />
          <button className="confirm-phone">확인</button>
          <div className="verify-title">인증번호 확인</div>
          <input
            className="number"
            placeholder="인증번호 네 자리를 입력해주세요."
          />
          <button className="confirm-verify">확인</button>
        </div>
      </div>
    </div>
  );
}

function RecruitOffer() {
  const [items, setofferItems] = useState([
    {
      id: 1,
      company: '네이버',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    },
    {
      id: 2,
      company: '삼성전자',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
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
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    },
    {
      id: 5,
      company: '우아한형제들',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    },
    {
      id: 6,
      company: '현대자동차',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    },
    {
      id: 7,
      company: '카카오',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    },
    {
      id: 8,
      company: '어메이징 브루잉 컴퍼니',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    },
    {
      id: 9,
      company: '여기어때',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    },
    {
      id: 10,
      company: 'Vercel',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    }
  ]);

  return (
    <section id="recruit-offer-container">
      <article id="recruit-offer-content">
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
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.company}</td>
                <td>{item.content}</td>
                <td>{item.date}</td>
                <td>{item.expired}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pager">1 2 3 4 5 6 7 8 9 10</div>
      </article>
    </section>
  );
}

function RecruitNotice() {
  const [noticeItems, setNoticeItems] = useState([
    {
      id: 1,
      company: '네이버',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    },
    {
      id: 2,
      company: '삼성전자',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
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
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    },
    {
      id: 5,
      company: '우아한형제들',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    },
    {
      id: 6,
      company: '현대자동차',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    },
    {
      id: 7,
      company: '카카오',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    },
    {
      id: 8,
      company: '어메이징 브루잉 컴퍼니',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    },
    {
      id: 9,
      company: '여기어때',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    },
    {
      id: 10,
      company: 'Vercel',
      content:
        '담당자로부터 이력서 공개요청이 도착했습니다. 이 요청은 처음 영국에서 시작되어',
      date: '21-01-08 13:00',
      expired: '21-02-07 13:00'
    }
  ]);

  return (
    <section id="recruit-notice-container">
      <article id="recruit-notice-content">
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
            {noticeItems.map((item) => (
              <tr key={item.id}>
                <td>{item.company}</td>
                <td>{item.content}</td>
                <td>{item.date}</td>
                <td>{item.expired}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pager">1 2 3 4 5 6 7 8 9 10</div>
      </article>
    </section>
  );
}

function ResumeList() {
  const [items, setofferItems] = useState([
    {
      id: 1,
      isRepresentative: true,
      title: '현대자동차_마케팅_홍길동',
      finishDate: '2020.11.30'
    },
    {
      id: 2,
      isRepresentative: false,
      title: '현대모비스_기획/마케팅_홍길동',
      finishDate: '2021.1.20'
    },
    {
      id: 3,
      isRepresentative: false,
      title: '쿠팡_인사총무_홍길동',
      finishDate: '2021.1.20'
    },
    {
      id: 4,
      isRepresentative: false,
      title: '네이버_마케팅_홍길동',
      finishDate: '2021.1.30'
    },
    {
      id: 5,
      isRepresentative: false,
      title: '카카오_마케팅_홍길동',
      finishDate: '2021.2.1'
    }
  ]);

  return (
    <section id="resume-list-container">
      <article id="resume-list-content">
        <nav>
          <ul className="resume-breadcrumb">
            <li className="breadcrumb-items">이력서 관리 &gt; </li>
            <li className="breadcrumb-items">이력서 목록</li>
          </ul>
        </nav>
        <div className="preamble">
          <div>-공개될 대표 이력서는 1개만 가능합니다.</div>
          <div>-미완성 이력서는 공개되지 않습니다.</div>
          <div>
            -입사지원을 한 후 해당 이력서의 내용을 수정해도 지원한 이력서의
            내용은 바뀌지 않습니다.
          </div>
        </div>
        <div className="title-content">
          <div>
            <span className="title">최대 10개 중 </span>
            <span>{items.length}</span>
            <span>건</span>
          </div>
          <button>신규 이력서 만들기 +</button>
        </div>
        {items.map((item) => (
          <div className="resume-box-container" key={item.id}>
            <div className="resume-box-content">
              <div className="header">
                {item.isRepresentative ? (
                  <div className="representative-resume">대표 이력서</div>
                ) : (
                  <div className="normal-resume">이력서</div>
                )}
                <div>
                  <span className="status">작성완료</span>
                  <span className="modified-date">
                    최종수정일:{item.finishDate}
                  </span>
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
          </div>
        ))}
      </article>
    </section>
  );
}

function MakeResume() {
  return (
    <section id="make-resume-container">
      <nav>
        <ul className="recent-notice-breadcrumb">
          <li className="breadcrumb-items">북마크 &gt;</li>
          <li className="breadcrumb-items">&nbsp;최근 본 공고</li>
        </ul>
      </nav>
      <article id="resume-container">
        <ResumeComponent />
      </article>
    </section>
  );
}

function RecentViewNotice() {
  const [items, setofferItems] = useState([
    {
      id: 1,
      dDay: 15,
      like: true,
      region: '경기 성남시',
      employmentForm: '정규직, 계약직',
      education: '학력무관',
      career: '경력 2년 이상',
      hashTag: ['#라이브커머스', '#상품기획및소싱'],
      bookmarked: true,
      companyName: '(주)카카오커머스',
      title: '서비스 직군 모집',
      finishDate: '2021.2.12 16:00'
    },
    {
      id: 2,
      dDay: 5,
      like: false,
      region: '서울 중구',
      employmentForm: '정규직',
      education: '학력무관',
      career: '경력무관',
      hashTag: ['#프론트엔드', '#백엔드'],
      bookmarked: false,
      companyName: '(주)SK 플래닛',
      title: '개발 직군 모집',
      finishDate: '2021.1.30 18:00'
    },
    {
      id: 3,
      dDay: 10,
      like: true,
      region: '경기 성남시',
      employmentForm: '정규직, 계약직',
      education: '학력무관',
      career: '경력 2년 이상',
      hashTag: ['#안드로이드', '#ios'],
      bookmarked: false,
      companyName: '네이버페이',
      title: '경력 개발자 모집',
      finishDate: '2021.4.1 14:00'
    },
    {
      id: 4,
      dDay: 12,
      like: false,
      region: '서울 송파구',
      employmentForm: '정규직',
      education: '학력무관',
      career: '경력 2년 이상',
      hashTag: ['#프론트엔드', '#react', '#react-native'],
      bookmarked: true,
      companyName: '우아한형제들',
      title: '시니어 프론트 엔드 개발자 모집',
      finishDate: '2021.3.1 15:00'
    },
    {
      id: 5,
      dDay: 10,
      like: true,
      region: '경기 성남시',
      employmentForm: '정규직, 계약직',
      education: '학력무관',
      career: '경력 2년 이상',
      hashTag: ['#중고로운평화나라', '#당신의근처에'],
      bookmarked: true,
      companyName: '당근마켓',
      title: '평화로운 중고딩 모집',
      finishDate: '2021.1.11 13:00'
    }
  ]);

  return (
    <section id="recent-notice-container">
      <article id="recent-notice-content">
        <nav>
          <ul className="recent-notice-breadcrumb">
            <li className="breadcrumb-items">북마크 &gt;</li>
            <li className="breadcrumb-items">&nbsp;최근 본 공고</li>
          </ul>
        </nav>
        <div className="preamble"></div>
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
        {items.map((item) => (
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
                    {item.like ? (
                      <img src={emptyHeart} />
                    ) : (
                      <img src={fullHeart} />
                    )}
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
                  {item.bookmarked ? (
                    <img src={fullBookmark} />
                  ) : (
                    <img src={emptyBookmark} />
                  )}
                </div>
              </div>
              <div className="details">
                <span>{item.region} </span>
                <span>{item.employmentForm} </span>
                <span>{item.education} </span>
                <span>{item.career} </span>
              </div>
              <div className="hash-tags">
                {item.hashTag.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

function BookmarkedCompanyList() {
  const [items, setItems] = useState([
    {
      id: 1,
      corporationName: '(주)카카오',
      region: '경기 성남시',
      aveAnnualSalary: '평균 연봉 8,000만원',
      logo: 'logo',
      business: '인터넷 정보매개 서비스업',
      representatives: '여민수/조수용',
      corporationScale: '대기업(TOP100)',
      members: '2,800명',
      revenue: '4조',
      operatingProfit: '3,500억',
      isBookmarked: true
    },
    {
      id: 2,
      corporationName: '(주)카카오',
      region: '경기 성남시',
      aveAnnualSalary: '평균 연봉 8,000만원',
      logo: 'logo',
      business: '인터넷 정보매개 서비스업',
      representatives: '여민수/조수용',
      corporationScale: '대기업(TOP100)',
      members: '2,800명',
      revenue: '4조',
      operatingProfit: '3,500억',
      isBookmarked: true
    },
    {
      id: 3,
      corporationName: '(주)카카오',
      region: '경기 성남시',
      aveAnnualSalary: '평균 연봉 8,000만원',
      logo: 'logo',
      business: '인터넷 정보매개 서비스업',
      representatives: '여민수/조수용',
      corporationScale: '대기업(TOP100)',
      members: '2,800명',
      revenue: '4조',
      operatingProfit: '3,500억',
      isBookmarked: true
    },
    {
      id: 4,
      corporationName: '(주)카카오',
      region: '경기 성남시',
      aveAnnualSalary: '평균 연봉 8,000만원',
      logo: 'logo',
      business: '인터넷 정보매개 서비스업',
      representatives: '여민수/조수용',
      corporationScale: '대기업(TOP100)',
      members: '2,800명',
      revenue: '4조',
      operatingProfit: '3,500억',
      isBookmarked: true
    }
  ]);

  const [recruits, setRecruits] = useState([
    {
      id: 1,
      remain: 5,
      corporation: '카카오커머스',
      recruitDetail: '서비스 직군 모집',
      finishDate: '2021.01.30 16:00'
    },
    {
      id: 2,
      remain: 7,
      corporation: '카카오',
      recruitDetail: '백엔드 개발자 모집',
      finishDate: '2021.01.30 16:00'
    },
    {
      id: 3,
      remain: 7,
      corporation: '카카오페이',
      recruitDetail: '프론트엔드 개발자 모집',
      finishDate: '2021.01.30 16:00'
    }
  ]);

  return (
    <section id="bookmarked-corp-container">
      <article id="bookmarked-corp-content">
        <nav>
          <ul className="bookmarked-corp-breadcrumb">
            <li className="breadcrumb-items">북마크 &gt;</li>
            <li className="breadcrumb-items">&nbsp;관심 기업 목록</li>
          </ul>
        </nav>
        <div className="preamble"></div>
        <div className="title-content">
          <div>
            <span>총 </span>
            <span>{items.length}</span>
            <span>건</span>
          </div>
          <div>
            <span>알람 수신 여부</span>
            <button className="yes-or-no">여부</button>
          </div>
        </div>
        {items.map((item) => (
          <div className="body-container" key={item.id}>
            <div className="corp-content">
              <div className="summary">
                <div className="left">
                  <div>{item.corporationName}</div>
                  <div>{item.region}</div>
                  <div>{item.aveAnnualSalary}</div>
                </div>
                <div className="right">
                  <div>{item.logo}</div>
                </div>
              </div>
              <div className="detail">
                <div className="left">
                  <div className="first-col">
                    <div>업종</div>
                    <div>기업규모</div>
                    <div>매출액</div>
                  </div>
                  <div className="second-col">
                    <div>{item.business}</div>
                    <div>{item.corporationScale}</div>
                    <div>{item.revenue}</div>
                  </div>
                  <div className="third-col">
                    <div>대표자명</div>
                    <div>직원수</div>
                    <div>영업이익</div>
                  </div>
                  <div className="fourth-col">
                    <div>{item.representatives}</div>
                    <div>{item.members}</div>
                    <div>{item.operatingProfit}</div>
                  </div>
                </div>
                <div className="right">
                  <span>
                    관심기업
                    <img src={fullHeart} />
                  </span>
                </div>
              </div>
            </div>
            <div className="employment-content">
              <div className="recruit-count">진행 중 채용 공고 4건</div>
              {recruits.map((recruit) => (
                <div className="row-content" key={recruit.id}>
                  <div className="finish-guide">
                    {recruit.remain <= 5 ? (
                      <div className="almost">마감임박</div>
                    ) : (
                      <div className="still">채용 중</div>
                    )}
                    <div className="recruit-corporation">
                      [{recruit.corporation}]
                    </div>
                    <div className="recruit-job">{recruit.recruitDetail}</div>
                  </div>
                  <div className="finish-date">마감일 {recruit.finishDate}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

function BookmarkedRecruitList() {
  const [items, setofferItems] = useState([
    {
      id: 1,
      dDay: 15,
      like: true,
      region: '경기 성남시',
      employmentForm: '정규직, 계약직',
      education: '학력무관',
      career: '경력 2년 이상',
      hashTag: ['#라이브커머스', '#상품기획및소싱'],
      bookmarked: true,
      companyName: '(주)카카오커머스',
      title: '서비스 직군 모집',
      finishDate: '2021.2.12 16:00'
    },
    {
      id: 2,
      dDay: 5,
      like: false,
      region: '서울 중구',
      employmentForm: '정규직',
      education: '학력무관',
      career: '경력무관',
      hashTag: ['#프론트엔드', '#백엔드'],
      bookmarked: false,
      companyName: '(주)SK 플래닛',
      title: '개발 직군 모집',
      finishDate: '2021.1.30 18:00'
    },
    {
      id: 3,
      dDay: 10,
      like: true,
      region: '경기 성남시',
      employmentForm: '정규직, 계약직',
      education: '학력무관',
      career: '경력 2년 이상',
      hashTag: ['#안드로이드', '#ios'],
      bookmarked: false,
      companyName: '네이버페이',
      title: '경력 개발자 모집',
      finishDate: '2021.4.1 14:00'
    },
    {
      id: 4,
      dDay: 12,
      like: false,
      region: '서울 송파구',
      employmentForm: '정규직',
      education: '학력무관',
      career: '경력 2년 이상',
      hashTag: ['#프론트엔드', '#react', '#react-native'],
      bookmarked: true,
      companyName: '우아한형제들',
      title: '시니어 프론트 엔드 개발자 모집',
      finishDate: '2021.3.1 15:00'
    },
    {
      id: 5,
      dDay: 10,
      like: true,
      region: '경기 성남시',
      employmentForm: '정규직, 계약직',
      education: '학력무관',
      career: '경력 2년 이상',
      hashTag: ['#중고로운평화나라', '#당신의근처에'],
      bookmarked: true,
      companyName: '당근마켓',
      title: '평화로운 중고딩 모집',
      finishDate: '2021.1.11 13:00'
    }
  ]);

  return (
    <section id="bookmarked-recruit-container">
      <article id="bookmarked-recruit-content">
        <nav>
          <ul className="bookmarked-recruit-breadcrumb">
            <li className="breadcrumb-items">북마크 &gt;</li>
            <li className="breadcrumb-items">&nbsp;관심 공고 목록</li>
          </ul>
        </nav>
        <div className="inquiry-box">
          <span>총&nbsp;</span>
          <span>{items.length}</span>
          <span>건</span>
          <div className="inquiry-content">
            <div className="first-row">
              <div className="register">관심공고 등록일</div>
              <button>1개월</button>
              <button>3개월</button>
              <button>6개월</button>
              <div className="choose-date-title">날짜선택</div>
              <input type="date" className="choose-date-start" />
              <input type="date" className="choose-date-end" />
            </div>
            <div className="second-row">
              <div className="status-title">공고 진행여부</div>
              <select className="select-status" defaultValue="guide">
                <option value="guide" disabled={true}>
                  선택하세요
                </option>
                <option value="on-progress">진행 중</option>
                <option value="all">전체</option>
                <option value="finished">마감</option>
              </select>
              <div className="search-title">검색분류</div>
              <select className="search-corporation" defaultValue="guide">
                <option value="guide" disabled={true}>
                  선택하세요
                </option>
                <option value="corporation">기업명</option>
                <option value="recruit">공고명</option>
                <option value="area">모집분야</option>
                <option value="detail">상세내용</option>
              </select>
              <input className="search-keyword" />
              <button className="browse-btn">검색하기</button>
            </div>
          </div>
        </div>
        <div className="title-content">
          <div>
            <button>전체선택</button>
            <button>선택삭제</button>
          </div>
        </div>
        {items.map((item) => (
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
                    {item.like ? (
                      <img src={emptyHeart} />
                    ) : (
                      <img src={fullHeart} />
                    )}
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
                  {item.bookmarked ? (
                    <img src={fullBookmark} />
                  ) : (
                    <img src={emptyBookmark} />
                  )}
                </div>
              </div>
              <div className="details">
                <span>{item.region} </span>
                <span>{item.employmentForm} </span>
                <span>{item.education} </span>
                <span>{item.career} </span>
              </div>
              <div className="hash-tags">
                {item.hashTag.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

function AccountManagement() {
  const [a, setA] = useState({
    asdklfjasdkl: '',
    asklfasjd: ''
  });
  const [showInputPassClicked, setShowInputPassClick] = useState(true);
  const [showPhoneMember, setShowPhoneMember] = useState(false);
  const [isChangePassClicked, setChangePassClick] = useState(false);
  const [showLeavedClicked, setShowLeavedClicked] = useState(false);
  const [showLeaveCompledted, setShowLeaveCompledted] = useState(false);

  const toggleInputPassword = () => {
    setShowInputPassClick(!showInputPassClicked);
    setShowPhoneMember(!showPhoneMember);
  };

  const toggleChangePassClick = () => {
    const clicked = !isChangePassClicked;
    setChangePassClick(clicked);
    if (clicked === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  };
  const toggleLeaveService = () => {
    setShowPhoneMember(!showPhoneMember);
    setShowLeavedClicked(!showLeavedClicked);
  };
  const [showLeavePopup, setShowLeavePopup] = useState(false);
  const toggleLeavePopup = () => {
    const clicked = !showLeavePopup;
    setShowLeavePopup(clicked);
    if (clicked === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  };

  const onSubmit = () => {
    // close LeavePopup
    const clicked = !showLeavePopup;
    setShowLeavePopup(clicked);
    setShowLeavedClicked(!showLeavedClicked);
    setShowLeaveCompledted(!showLeaveCompledted);
  };

  const goToMain = () => {};

  return (
    <>
      {showInputPassClicked ? (
        <section id="account-management-container">
          <article id="account-management-content">
            <div>계정관리</div>
            <div className="password-content">
              <div className="password-reinput-title">패스워드 재입력</div>
              <div className="password-guide">
                <div>회원님의 정보를 안전하게 보호하기 위해</div>
                <div>패스워드를 다시 한 번 입력해주세요.</div>
              </div>
              <input
                placeholder="password를 재입력해주세요."
                className="reinput-password"
              />
              <div className="reinput-password-btn">
                <button onClick={toggleInputPassword}>입력하기</button>
              </div>
            </div>
          </article>
        </section>
      ) : null}
      {showPhoneMember ? (
        <section id="phone-member-container">
          <article id="phone-member-content">
            <span>계정관리</span>
            <span>로그인 계정:fapply@gmail.com</span>
            <div className="password-content">
              <div className="password-reinput-title">비밀번호 변경</div>
              <button
                className="change-password-btn"
                onClick={toggleChangePassClick}
              >
                비밀번호 변경하기
              </button>
              <div className="leave-service-title">회원탈퇴</div>
              <button
                className="leave-service-btn"
                onClick={toggleLeaveService}
              >
                Fapply 탈퇴하기
              </button>
            </div>
            {isChangePassClicked ? (
              <ChangePasswordComponent closePopup={toggleChangePassClick} />
            ) : null}
          </article>
        </section>
      ) : null}
      {showLeavedClicked ? (
        <section id="leave-service-container">
          <nav>
            <ul className="leave-recruit-breadcrumb">
              <li className="breadcrumb-items">계정관리 &gt;</li>
              <li className="breadcrumb-items">&nbsp;회원탈퇴</li>
            </ul>
          </nav>
          <article id="leave-service-content">
            <div className="pre-guide-content">
              <div>탈퇴하시기 전에</div>
              <div>아래의 내용을 확인해주세요</div>
            </div>
            <div className="guide-content">
              <div>
                - 탈퇴 시 회원님의 모든 정보와 이력서가 영구적으로 삭제되며,
                다시는 복구할 수 없습니다.
              </div>
              <div>
                - 이력서의 저장을 원하실 경우, 탈퇴 전에 이력서 관리 페이지에서
                다운로드 해주세요.
              </div>
              <div>
                - 이미 제출된 정보는 전달받은 자의 소유로 간주되어 자동으로
                삭제되지 않으며, 탈퇴 시 수정이나 삭제가 불가능합니다.
              </div>
              <div>
                - 패플라이 회원에서 탈퇴하실 경우, 추천 보상금을 받으실 수
                없습니다. 잔여 보상금이 있으면 탈퇴 이전에 정산해주세요.
              </div>
              <div>
                - 기업에 대한 지원 내역은 관련 법령에 의거하여 탈퇴 후 최장
                5년간 저장됩니다.
              </div>
              <div>
                - 이상의 내용을 확인한 뒤 탈퇴를 원할 경우, 아래의 버튼을
                클릭해주세요.
              </div>
            </div>
            <div className="leave-service-btn">
              <button onClick={toggleLeavePopup}>탈퇴하기</button>
            </div>
            {showLeavePopup ? (
              <LeaveReasonComponent
                closePopup={toggleLeavePopup}
                onSubmit={onSubmit}
              />
            ) : null}
          </article>
        </section>
      ) : null}
      {showLeaveCompledted ? (
        <section id="leave-completed-container">
          <nav>
            <ul className="leave-completed-breadcrumb">
              <li className="breadcrumb-items">계정관리 &gt;</li>
              <li className="breadcrumb-items">&nbsp;회원탈퇴</li>
            </ul>
          </nav>
          <article id="leave-completed-content">
            <div className="completed-box">
              <div>탈퇴가 완료되었습니다.</div>
              <div>패플라이를 이용해주셔서 감사합니다.</div>
              <div>더 나은 패플라이가 되겠습니다</div>
              <Link to={'/'}>
                <button className="back-to-main">메인으로 돌아가기</button>
              </Link>
              <Switch>
                <Route exact path="/" component={MainComponent} />
              </Switch>
            </div>
          </article>
        </section>
      ) : null}{' '}
    </>
  );
}
function LeaveReasonComponent({ closePopup, onSubmit }) {
  return (
    <section id="leave-reason-container">
      <article id="leave-reason-content">
        <button className="close-popup" onClick={closePopup}>
          X
        </button>
        <div className="leave-reason-title">탈퇴 사유를 알려주세요</div>
        <select className="select-reason" defaultValue="placeholder">
          <option value="placeholder" className="default" disabled={true}>
            탈퇴 사유 선택하기
          </option>
          <option value="completed">패플라이에서구직이 완료 되었습니다.</option>
          <option value="not-enough">채용공고가 부족합니다.</option>
          <option value="security-problem">개인정보 유출이 우려됩니다.</option>
          <option value="too-much-noti">홍보성 알림이 너무 많습니다.</option>
          <option value="completed-through-other">
            타사를 통해 구직이 완료되었습니다.
          </option>
        </select>
        <textarea
          className="reason-textarea"
          placeholder="직접 입력(50자 이내)"
        ></textarea>
        <button className="confirm-btn" onClick={onSubmit}>
          제출하기
        </button>
      </article>
    </section>
  );
}

function ChangePasswordComponent({ closePopup }) {
  return (
    <section id="change-password-container">
      <article id="change-password-content">
        <button className="close-popup" onClick={closePopup}>
          X
        </button>
        <div className="change-password-title">비밀번호 변경</div>
        <div className="new-password-title">신규 비밀번호</div>
        <input
          className="input-new-password"
          placeholder="8-12자의 영문, 숫자, 특수문자 중 2가지 이상 조합 필수"
        />
        <div className="confirm-password-title">비밀번호 확인</div>
        <input className="confirm-password" placeholder="비밀번호 재입력" />
        <button className="confirm-btn">확인</button>
      </article>
    </section>
  );
}

export default MyPageComponent;
