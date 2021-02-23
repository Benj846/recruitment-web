import React, { useState, useRef } from 'react';
import icon_search from './logo_and_images/icon_search_40px.png';
import icon_arrow_down from './logo_and_images/icon_arrow_down_40px.png';
import icon_close_green from './logo_and_images/icon_close.png';
import '../../styles/EducationComponent';

function EducationComponent({ resumeInfo, onChange, onClick }) {
  const [value, setValue] = useState();
  const [isIntegratedChecked, setIsIntegratedChecked] = useState(false);
  const [isMasterClicked, setIsMasterClicked] = useState(false);

  const handleCheckBoxChange = () => {
    const checked = !isIntegratedChecked;
    setIsIntegratedChecked(checked);
    const result = <Doctorate isIntegratedChecked={checked} />;
    setValue(result);
  };

  const [flag, setFlag] = useState();
  const onChangeEdu = (e) => {
    //const targetValue = e.target.value;
    const flag = e.target.value;
    setFlag(flag);
    setIsMasterClicked(false);
  };

  const printEducation = () => {
    switch (flag) {
      case '0':
        return (
          <HighSchool
            onChange={onChange}
            onClick={onClick}
            resumeInfo={resumeInfo}
          />
        );
      case '1':
        return (
          <College
            onChange={onChange}
            onClick={onClick}
            resumeInfo={resumeInfo}
          />
        );
        break;
      case '3':
        result = <Transfer />;
        break;
      case '2':
        result = <University />;
        break;
      case '4':
        result = <Master />;
        break;
      case '5':
        setIsMasterClicked(true);
        return <Doctorate />;
    }
  };

  return (
    <div className="education-info">
      <span className="education-title">학력사항</span>
      <hr className="division-line" />
      <div className="final-content">
        <div className="title">최종학력</div>
        <select
          className="select-education"
          defaultValue="non-value"
          onChange={onChangeEdu}
          name="etype"
        >
          <option value="non-value" disabled="disabled">
            최종학력을 선택해주세요
          </option>
          <option value="0">고졸</option>
          <option value="1">초대졸</option>
          <option value="3">편입</option>
          <option value="2">학사</option>
          <option value="4">석사</option>
          <option value="5">박사</option>
        </select>
        {isMasterClicked ? (
          <>
            <div className="integrated" onClick={handleCheckBoxChange}>
              <input
                type="checkbox"
                checked={isIntegratedChecked}
                onChange={handleCheckBoxChange}
                id="a1"
              />
              <label className="el-checkbox-style" htmlFor="a1"></label>
              <span className="integrated-title">석박사 연계과정</span>
            </div>
          </>
        ) : null}
      </div>
      <div className="added-education">{printEducation()}</div>
    </div>
  );
}

function HighSchool({ onChange, onClick, resumeInfo }) {
  return (
    <>
      <div className="education-container">
        <div className="name-period-content">
          <div className="level">고등학교</div>
          <div className="title">학교명</div>
          <select
            className="title-input"
            defaultValue="default-value"
            name="high"
            onChange={onChange}
          >
            <option value="default-value" disa-bled="disabled">
              선택
            </option>
            <option value="영동고">영동고</option>
            <option value="경기고">경기고</option>
            <option value="과천고">과천고</option>
            <option value="휘문고">휘문고</option>
            <option value="중대부고">중대부고</option>
            <option value="현대고">현대고</option>
          </select>
          <div className="in-school-period">재학기간</div>
          <input
            type="month"
            className="in-school-period-input"
            name="edsmonth"
            onChange={onChange}
          ></input>
          <input
            type="month"
            className="in-school-period-input"
            name="edemonth"
            onChange={onChange}
          ></input>
        </div>
        <div className="location">
          <div className="location-title">소재지</div>
          <select
            className="location-input"
            defaultValue="default-value"
            name="edregion"
            onChange={onChange}
          >
            <option value="default-value"></option>
            <option value="서울">서울</option>
            <option value="경기">경기</option>
            <option value="인천">인천</option>
            <option value="대전">대전</option>
            <option value="세종">세종</option>
            <option value="충남">충남</option>
            <option value="충북">충북</option>
            <option value="광주">광주</option>
            <option value="전남">전남</option>
            <option value="전북">전북</option>
            <option value="대구">대구</option>
            <option value="경남">경남</option>
            <option value="경북">경북</option>
            <option value="강원">강원</option>
          </select>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <div className="location-title content-title">소재지</div>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
            >
              <option value="default-value">소재지를 선택하세요</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="major-content content-col">
            <div className="major-name content-title">전공분류</div>
            <select
              className="select-major"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
            >
              <option value="default-value" disabled="disabled">
                인문계열
              </option>
              <option value="실업계열">실업계열</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

function College({ onChange, onClick, resumeInfo }) {
  const [ids, setIds] = useState([]);
  const refId = useRef(0);
  const onCreate = () => {
    const id = refId.current;
    setIds(ids.concat(id));
    setLastId(id);
    refId.current += 1;
  };

  const onRemove = (selectedId) => {
    const newIds = ids.filter((id) => id !== selectedId);
    setIds(newIds);
    setLastId(newIds[newIds.length - 1]);
  };

  return (
    <>
      <div className="education-container">
        <div className="name-period-content">
          <div className="level">대학교</div>
          <div className="title">학교명</div>
          <select className="title-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled"></option>
            <option value="2">하버드</option>
            <option value="3">옥스퍼드</option>
          </select>
          <div className="in-school-period">재학기간</div>
          <input type="month" className="in-school-period-input" />
          <input type="month" className="in-school-period-input" />
        </div>
        <div className="location">
          <div className="location-title">소재지</div>
          <select className="location-input" defaultValue="default-value">
            <option value="default-value"></option>
            <option value="서울">서울</option>
            <option value="인천">인천</option>
          </select>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <div className="location-title content-title">소재지</div>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
            >
              <option value="default-value"></option>
              <option value="서울">서울</option>
              <option value="인천">인천</option>
            </select>
          </div>
          <div className="major-content content-col">
            <div className="major-name content-title">전공분류</div>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="국어국문"
              >
                <option value="국어국문">국어국문</option>
                <option value="영어영문">영어영문</option>
              </select>
              <button className="add-major" onClick={onCreate}>
                전공추가
              </button>
            </div>
          </div>
        </div>
        <AddedMajor ids={ids} onRemove={onRemove} onCreate={onCreate} />
      </div>
    </>
  );
}

function AddedMajor({ ids, onRemove, order }) {
  return ids.map((id) => (
    <div key={id} className="major-content-add content-col">
      <div className="content-title">전공분류</div>
      <div className="select-add-wrap">
        <select className="select-major" defaultValue="국어국문">
          <option value="국어국문">국어국문</option>
          <option value="영어영문">영어영문</option>
        </select>
        <button
          className="close-info"
          style={{ background: `url(${icon_close_green}) no-repeat 0 center` }}
          onClick={() => onRemove(id, order)}
        >
          삭제
        </button>
      </div>
    </div>
  ));
}

function Transfer() {
  const [idsOne, setIdsOne] = useState([]);
  const [idsTwo, setIdsTwo] = useState([]);
  const refId = useRef([0, 0]);
  const firstArea = 0;
  const secondArea = 1;
  const onCreate = (index) => {
    const id = refId.current[index];
    if (index === firstArea) {
      setIdsOne([...idsOne, id]);
    } else if (index === secondArea) {
      setIdsTwo([...idsTwo, id]);
    }
    refId.current[index] += 1;
  };

  const onRemove = (selectedId, order) => {
    if (order === firstArea) {
      const newIds = idsOne.filter((id) => id !== selectedId);
      setIdsOne(newIds);
    } else if (order === secondArea) {
      const newIds = idsTwo.filter((id) => id !== selectedId);
      setIdsTwo(newIds);
    }
  };

  return (
    <>
      <div className="education-container">
        <div className="first-row content-row">
          <div className="level">
            <span className="content-title">대학교</span>
            <span className="content-title">(편입 전)</span>
          </div>
          <div className="name-school content-col">
            <div className="content-title">학교명</div>
            <select
              className="title-input"
              style={{
                background: `url(${icon_search}) no-repeat 98% center`,
                backgroundSize: `32px 32px`
              }}
              defaultValue="default-value"
            >
              <option value="default-value" disabled="disabled">
                패플대학교
              </option>
              <option value="2">하버드</option>
              <option value="3">옥스퍼드</option>
            </select>
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">재학기간</span>
            <div className="input-wrapper">
              <input type="month" className="in-school-period-input" />
              <input type="month" className="in-school-period-input" />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <div className="location-title content-title">소재지</div>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
            >
              <option value="default-value"></option>
              <option value="서울">서울</option>
              <option value="인천">인천</option>
            </select>
          </div>
          <div className="major-content content-col">
            <div className="major-name content-title">전공분류</div>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="국어국문"
              >
                <option value="국어국문">국어국문</option>
                <option value="영어영문">영어영문</option>
              </select>
              <button className="add-major" onClick={() => onCreate(firstArea)}>
                전공추가
              </button>
            </div>
          </div>
        </div>
        <AddedMajor ids={idsOne} order={firstArea} onRemove={onRemove} />

        <div className="first-row content-row after-transfer">
          <div className="level">
            <span className="content-title">대학교</span>
            <span className="content-title">(편입 후)</span>
          </div>
          <div className="name-school content-col">
            <div className="content-title">학교명</div>
            <select
              className="title-input"
              style={{
                background: `url(${icon_search}) no-repeat 98% center`,
                backgroundSize: `32px 32px`
              }}
              defaultValue="default-value"
            >
              <option value="default-value" disabled="disabled">
                패플대학교
              </option>
              <option value="2">하버드</option>
              <option value="3">옥스퍼드</option>
            </select>
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">재학기간</span>
            <div className="input-wrapper">
              <input type="month" className="in-school-period-input" />
              <input type="month" className="in-school-period-input" />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <div className="location-title content-title">소재지</div>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
            >
              <option value="default-value"></option>
              <option value="서울">서울</option>
              <option value="인천">인천</option>
            </select>
          </div>
          <div className="major-content content-col">
            <div className="major-name content-title">전공분류</div>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="국어국문"
              >
                <option value="국어국문">국어국문</option>
                <option value="영어영문">영어영문</option>
              </select>
              <button
                className="add-major"
                onClick={() => onCreate(secondArea)}
              >
                전공추가
              </button>
            </div>
          </div>
        </div>
        <AddedMajor ids={idsTwo} order={secondArea} onRemove={onRemove} />
      </div>
    </>
  );
}

function University() {
  const [ids, setIds] = useState([]);
  const refId = useRef(0);
  const onCreate = () => {
    const id = refId.current;
    setIds([...ids, id]);
    refId.current += 1;
  };

  const onRemove = (selectedId) => {
    const newIds = ids.filter((id) => id !== selectedId);
    setIds(newIds);
  };

  return (
    <>
      <div className="education-container">
        <div className="first-row content-row">
          <div className="level">
            <span className="content-title">대학교</span>
          </div>
          <div className="name-school content-col">
            <span className="content-title">학교명</span>
            <select
              className="title-input"
              style={{
                background: `url(${icon_search}) no-repeat 98% center`,
                backgroundSize: `32px 32px`
              }}
              defaultValue="default-value"
            >
              <option value="default-value" disabled="disabled">
                선택
              </option>
              <option value="2">하버드</option>
              <option value="3">옥스퍼드</option>
            </select>
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">재학기간</span>
            <div className="input-wrapper">
              <input type="month" className="in-school-period-input" />
              <input type="month" className="in-school-period-input" />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <span className="content-title">소재지</span>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
            >
              <option value="default-value"></option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="major-content content-col">
            <span className="content-title">전공분류</span>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="국어국문"
              >
                <option value="국어국문">국어국문</option>
                <option value="영어영문">영어영문</option>
              </select>
              <button className="add-major" onClick={onCreate}>
                전공추가
              </button>
            </div>
          </div>
        </div>
        <AddedMajor ids={ids} onRemove={onRemove} />
      </div>
    </>
  );
}

function Master() {
  const [idsOne, setIdsOne] = useState([]);
  const [idsTwo, setIdsTwo] = useState([]);
  const refId = useRef([0, 0]);
  const firstArea = 0;
  const secondArea = 1;
  const onCreate = (index) => {
    const id = refId.current[index];
    if (index === firstArea) {
      setIdsOne([...idsOne, id]);
    } else if (index === secondArea) {
      setIdsTwo([...idsTwo, id]);
    }
    refId.current[index] += 1;
  };

  const onRemove = (selectedId, order) => {
    if (order === firstArea) {
      const newIds = idsOne.filter((id) => id !== selectedId);
      setIdsOne(newIds);
    } else if (order === secondArea) {
      const newIds = idsTwo.filter((id) => id !== selectedId);
      setIdsTwo(newIds);
    }
  };

  return (
    <>
      <div className="education-container">
        <div className="first-row content-row">
          <div className="level">
            <span className="content-title">대학교</span>
          </div>
          <div className="name-school content-col">
            <div className="content-title">학교명</div>
            <select
              className="title-input"
              style={{
                background: `url(${icon_search}) no-repeat 98% center`,
                backgroundSize: `32px 32px`
              }}
              defaultValue="default-value"
            >
              <option value="default-value" disabled="disabled">
                패플대학교
              </option>
              <option value="2">하버드</option>
              <option value="3">옥스퍼드</option>
            </select>
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">재학기간</span>
            <div className="input-wrapper">
              <input type="month" className="in-school-period-input" />
              <input type="month" className="in-school-period-input" />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <div className="location-title content-title">소재지</div>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
            >
              <option value="default-value"></option>
              <option value="서울">서울</option>
              <option value="인천">인천</option>
            </select>
          </div>
          <div className="major-content content-col">
            <div className="major-name content-title">전공분류</div>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="국어국문"
              >
                <option value="국어국문">국어국문</option>
                <option value="영어영문">영어영문</option>
              </select>
              <button className="add-major" onClick={() => onCreate(firstArea)}>
                전공추가
              </button>
            </div>
          </div>
        </div>
        <AddedMajor ids={idsOne} order={firstArea} onRemove={onRemove} />

        <div className="first-row content-row after-transfer">
          <div className="level">
            <span className="content-title">대학원</span>
          </div>
          <div className="name-school content-col">
            <div className="content-title">학교명</div>
            <select
              className="title-input"
              style={{
                background: `url(${icon_search}) no-repeat 98% center`,
                backgroundSize: `32px 32px`
              }}
              defaultValue="default-value"
            >
              <option value="default-value" disabled="disabled">
                패플대학교
              </option>
              <option value="2">하버드</option>
              <option value="3">옥스퍼드</option>
            </select>
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">재학기간</span>
            <div className="input-wrapper">
              <input type="month" className="in-school-period-input" />
              <input type="month" className="in-school-period-input" />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <div className="location-title content-title">소재지</div>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
            >
              <option value="default-value"></option>
              <option value="서울">서울</option>
              <option value="인천">인천</option>
            </select>
          </div>
          <div className="major-content content-col">
            <div className="major-name content-title">전공분류</div>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="국어국문"
              >
                <option value="국어국문">국어국문</option>
                <option value="영어영문">영어영문</option>
              </select>
              <button
                className="add-major"
                onClick={() => onCreate(secondArea)}
              >
                전공추가
              </button>
            </div>
          </div>
        </div>
        <AddedMajor ids={idsTwo} order={secondArea} onRemove={onRemove} />
      </div>
    </>
  );
}

function Doctorate({ isIntegratedChecked }) {
  const [idsOne, setIdsOne] = useState([]);
  const [idsTwo, setIdsTwo] = useState([]);
  const [idsThree, setIdsThree] = useState([]);
  const refId = useRef([0, 0, 0]);
  const firstArea = 0;
  const secondArea = 1;
  const thirdArea = 2;
  const onCreate = (index) => {
    const id = refId.current[index];
    if (index === firstArea) {
      setIdsOne([...idsOne, id]);
    } else if (index === secondArea) {
      setIdsTwo([...idsTwo, id]);
    } else {
      setIdsThree([...idsThree, id]);
    }
    refId.current[index] += 1;
  };

  const onRemove = (selectedId, order) => {
    if (order === firstArea) {
      const newIds = idsOne.filter((id) => id !== selectedId);
      setIdsOne(newIds);
    } else if (order === secondArea) {
      const newIds = idsTwo.filter((id) => id !== selectedId);
      setIdsTwo(newIds);
    } else {
      const newIds = idsThree.filter((id) => id !== selectedId);
      setIdsThree(newIds);
    }
  };

  return (
    <>
      <div className="education-container">
        <div className="first-row content-row">
          <div className="level">
            <span className="content-title">대학교</span>
          </div>
          <div className="name-school content-col">
            <div className="content-title">학교명</div>
            <select
              className="title-input"
              style={{
                background: `url(${icon_search}) no-repeat 98% center`,
                backgroundSize: `32px 32px`
              }}
              defaultValue="default-value"
            >
              <option value="default-value" disabled="disabled">
                패플대학교
              </option>
              <option value="2">하버드</option>
              <option value="3">옥스퍼드</option>
            </select>
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">재학기간</span>
            <div className="input-wrapper">
              <input type="month" className="in-school-period-input" />
              <input type="month" className="in-school-period-input" />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <div className="location-title content-title">소재지</div>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
            >
              <option value="default-value"></option>
              <option value="서울">서울</option>
              <option value="인천">인천</option>
            </select>
          </div>
          <div className="major-content content-col">
            <div className="major-name content-title">전공분류</div>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="국어국문"
              >
                <option value="국어국문">국어국문</option>
                <option value="영어영문">영어영문</option>
              </select>
              <button className="add-major" onClick={() => onCreate(firstArea)}>
                전공추가
              </button>
            </div>
          </div>
        </div>
        <AddedMajor ids={idsOne} order={firstArea} onRemove={onRemove} />

        {isIntegratedChecked ? (
          <>
            <div className="education-container">
              <div className="first-row content-row">
                <div className="level">
                  <span className="content-title">대학원</span>
                  <span className="content-title">(석박사)</span>
                </div>
                <div className="name-school content-col">
                  <div className="content-title">학교명</div>
                  <select
                    className="title-input"
                    style={{
                      background: `url(${icon_search}) no-repeat 98% center`,
                      backgroundSize: `32px 32px`
                    }}
                    defaultValue="default-value"
                  >
                    <option value="default-value" disabled="disabled">
                      패플대학교
                    </option>
                    <option value="2">하버드</option>
                    <option value="3">옥스퍼드</option>
                  </select>
                </div>
                <div className="in-school-period content-col">
                  <span className="content-title">재학기간</span>
                  <div className="input-wrapper">
                    <input type="month" className="in-school-period-input" />
                    <input type="month" className="in-school-period-input" />
                  </div>
                </div>
              </div>
              <div className="second-row">
                <div className="location content-col">
                  <div className="location-title content-title">소재지</div>
                  <select
                    className="location-input"
                    style={{
                      background: `url(${icon_arrow_down}) no-repeat 100% 0`
                    }}
                    defaultValue="default-value"
                  >
                    <option value="default-value"></option>
                    <option value="서울">서울</option>
                    <option value="인천">인천</option>
                  </select>
                </div>
                <div className="major-content content-col">
                  <div className="major-name content-title">전공분류</div>
                  <div className="select-add-wrap">
                    <select
                      className="select-major"
                      style={{
                        background: `url(${icon_arrow_down}) no-repeat 100% 0`
                      }}
                      defaultValue="국어국문"
                    >
                      <option value="국어국문">국어국문</option>
                      <option value="영어영문">영어영문</option>
                    </select>
                    <button
                      className="add-major"
                      onClick={() => onCreate(secondArea)}
                    >
                      전공추가
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <AddedMajor ids={idsTwo} order={secondArea} onRemove={onRemove} />
          </>
        ) : (
          <>
            <div className="education-container">
              <div className="first-row content-row">
                <div className="level">
                  <span className="content-title">대학원(석사)</span>
                </div>
                <div className="name-school content-col">
                  <div className="content-title">학교명</div>
                  <select
                    className="title-input"
                    style={{
                      background: `url(${icon_search}) no-repeat 98% center`,
                      backgroundSize: `32px 32px`
                    }}
                    defaultValue="default-value"
                  >
                    <option value="default-value" disabled="disabled">
                      패플대학교
                    </option>
                    <option value="2">하버드</option>
                    <option value="3">옥스퍼드</option>
                  </select>
                </div>
                <div className="in-school-period content-col">
                  <span className="content-title">재학기간</span>
                  <div className="input-wrapper">
                    <input type="month" className="in-school-period-input" />
                    <input type="month" className="in-school-period-input" />
                  </div>
                </div>
              </div>
              <div className="second-row">
                <div className="location content-col">
                  <div className="location-title content-title">소재지</div>
                  <select
                    className="location-input"
                    style={{
                      background: `url(${icon_arrow_down}) no-repeat 100% 0`
                    }}
                    defaultValue="default-value"
                  >
                    <option value="default-value"></option>
                    <option value="서울">서울</option>
                    <option value="인천">인천</option>
                  </select>
                </div>
                <div className="major-content content-col">
                  <div className="major-name content-title">전공분류</div>
                  <div className="select-add-wrap">
                    <select
                      className="select-major"
                      style={{
                        background: `url(${icon_arrow_down}) no-repeat 100% 0`
                      }}
                      defaultValue="국어국문"
                    >
                      <option value="국어국문">국어국문</option>
                      <option value="영어영문">영어영문</option>
                    </select>
                    <button
                      className="add-major"
                      onClick={() => onCreate(firstArea)}
                    >
                      전공추가
                    </button>
                  </div>
                </div>
              </div>
              <AddedMajor ids={idsOne} order={firstArea} onRemove={onRemove} />

              <div className="first-row content-row after-transfer">
                <div className="level">
                  <span className="content-title">대학원(박사)</span>
                </div>
                <div className="name-school content-col">
                  <div className="content-title">학교명</div>
                  <select
                    className="title-input"
                    style={{
                      background: `url(${icon_search}) no-repeat 98% center`,
                      backgroundSize: `32px 32px`
                    }}
                    defaultValue="default-value"
                  >
                    <option value="default-value" disabled="disabled">
                      패플대학교
                    </option>
                    <option value="2">하버드</option>
                    <option value="3">옥스퍼드</option>
                  </select>
                </div>
                <div className="in-school-period content-col">
                  <span className="content-title">재학기간</span>
                  <div className="input-wrapper">
                    <input type="month" className="in-school-period-input" />
                    <input type="month" className="in-school-period-input" />
                  </div>
                </div>
              </div>
              <div className="second-row">
                <div className="location content-col">
                  <div className="location-title content-title">소재지</div>
                  <select
                    className="location-input"
                    style={{
                      background: `url(${icon_arrow_down}) no-repeat 100% 0`
                    }}
                    defaultValue="default-value"
                  >
                    <option value="default-value"></option>
                    <option value="서울">서울</option>
                    <option value="인천">인천</option>
                  </select>
                </div>
                <div className="major-content content-col">
                  <div className="major-name content-title">전공분류</div>
                  <div className="select-add-wrap">
                    <select
                      className="select-major"
                      style={{
                        background: `url(${icon_arrow_down}) no-repeat 100% 0`
                      }}
                      defaultValue="국어국문"
                    >
                      <option value="국어국문">국어국문</option>
                      <option value="영어영문">영어영문</option>
                    </select>
                    <button
                      className="add-major"
                      onClick={() => onCreate(secondArea)}
                    >
                      전공추가
                    </button>
                  </div>
                </div>
              </div>
              <AddedMajor ids={idsTwo} order={secondArea} onRemove={onRemove} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default EducationComponent;
