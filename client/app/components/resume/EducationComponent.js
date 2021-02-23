import React, { useState, useRef } from 'react';
import icon_search from './logo_and_images/icon_search_40px.png';
import icon_arrow_down from './logo_and_images/icon_arrow_down_40px.png';
import icon_close_green from './logo_and_images/icon_close.png';
import '../../styles/EducationComponent';

function EducationComponent({
  resumeInfo,
  onChange,
  onClick,
  onAddMajor,
  onRemoveMajor
}) {
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
            onAddMajor={onAddMajor}
            onRemoveMajor={onRemoveMajor}
          />
        );
      case '3':
        return (
          <Transfer
            onChange={onChange}
            onClick={onClick}
            resumeInfo={resumeInfo}
            onAddMajor={onAddMajor}
            onRemoveMajor={onRemoveMajor}
          />
        );
      case '2':
        return (
          <University
            onChange={onChange}
            onClick={onClick}
            resumeInfo={resumeInfo}
            onAddMajor={onAddMajor}
            onRemoveMajor={onRemoveMajor}
          />
        );
      case '4':
        return (
          <Master
            onChange={onChange}
            onClick={onClick}
            resumeInfo={resumeInfo}
            onAddMajor={onAddMajor}
            onRemoveMajor={onRemoveMajor}
          />
        );
      case '5':
        setIsMasterClicked(true);
        return (
          <Doctorate
            onChange={onChange}
            onClick={onClick}
            resumeInfo={resumeInfo}
            onAddMajor={onAddMajor}
            onRemoveMajor={onRemoveMajor}
          />
        );
    }
  };

  return (
    <div className="education-info">
      <span className="education-title">학력사항</span>
      <hr className="division-line" />
      <div className="first-row content-row">
        <div className="final-content content-col">
          <span className="content-title">최종학력</span>
          <select
            className="select-education"
            defaultValue="non-value"
            onChange={(e) => {
              onChangeEdu(e);
              onChange(e);
            }}
            style={{ background: `url(${icon_arrow_down}) no-repeat 100% 0` }}
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
        </div>
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
        <div className="first-row content-row">
          <div className="level">
            <span className="content-title">고등학교</span>
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
              name="school"
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
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">재학기간</span>
            <div className="input-wrapper">
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
          <div className="major-content content-col">
            <div className="major-name content-title">전공분류</div>
            <select
              className="select-major"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
              className="select-major"
              name="edmajor"
              onChange={onChange}
            >
              <option value="인문계열">인문계열</option>
              <option value="실업계열">실업계열</option>
              <option value="기타">기타</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

function College({ onChange, onClick, resumeInfo, onAddMajor, onRemoveMajor }) {
  const [ids, setIds] = useState([]);
  const refId = useRef(0);
  const onCreate = () => {
    const id = refId.current;
    setIds(ids.concat(id));
    //setLastId(id);
    refId.current += 1;
  };

  const onRemove = (selectedId) => {
    const newIds = ids.filter((id) => id !== selectedId);
    setIds(newIds);
    //setLastId(newIds[newIds.length - 1]);
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
              name="school"
              onChange={onChange}
            >
              <option value="default-value" disabled="disabled">
                선택
              </option>
              <option value="농협대">농협대</option>
              <option value="문경대">문경대</option>
              <option value="경북보건대">경북보건대</option>
              <option value="한국승강기대">한국승강기대</option>
              <option value="원광보건대">원광보건대</option>
              <option value="거제대">거제대</option>
            </select>
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">재학기간</span>
            <div className="input-wrapper">
              <input
                type="month"
                className="in-school-period-input"
                name="edsmonth"
                onChange={onChange}
              />
              <input
                type="month"
                className="in-school-period-input"
                name="edemonth"
                onChange={onChange}
              />
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
              onChange={onChange}
              name="edregion"
              defaultValue="default-value"
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
          <div className="major-content content-col">
            <div className="major-name content-title">전공분류</div>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="non-value"
                name="edmajor"
                onChange={onAddMajor}
              >
                <option value="non-value">선택</option>
                <option value="어문학">어문학</option>
                <option value="영어영문">영어영문</option>
                <option value="중어중문">중어중문</option>
                <option value="일어일문">일어일문</option>
                <option value="국어국문">국어국문</option>
                <option value="인문과학">인문과학</option>
                <option value="사회과학">사회과학</option>
                <option value="상경계열">상경계열</option>
                <option value="경영경제">경영경제</option>
                <option value="회계학">회계학</option>
                <option value="금속/비금속공학">금속/비금속공학</option>
                <option value="컴퓨터/시스템공학">컴퓨터/시스템공학</option>
                <option value="기계공학">기계공학</option>
              </select>
              <button className="add-major" onClick={onCreate}>
                전공추가
              </button>
            </div>
          </div>
        </div>
        <AddedMajor
          ids={ids}
          onRemove={onRemove}
          onCreate={onCreate}
          onAddMajor={onAddMajor}
          onRemoveMajor={onRemoveMajor}
        />{' '}
      </div>
    </>
  );
}

function AddedMajor({ ids, order, onRemove, onAddMajor, onRemoveMajor }) {
  return ids.map((id) => (
    <div key={id} className="major-content-add content-col">
      <div className="content-title">전공분류</div>
      <div className="select-add-wrap">
        <select
          className="select-major"
          defaultValue="non-value"
          name="edmajor"
          onChange={onAddMajor}
        >
          <option value="non-value" disabled={true}>
            선택
          </option>
          <option value="어문학">어문학</option>
          <option value="영어영문">영어영문</option>
          <option value="중어중문">중어중문</option>
          <option value="일어일문">일어일문</option>
          <option value="국어국문">국어국문</option>
          <option value="인문과학">인문과학</option>
          <option value="사회과학">사회과학</option>
          <option value="상경계열">상경계열</option>
          <option value="경영경제">경영경제</option>
          <option value="회계학">회계학</option>
          <option value="금속/비금속공학">금속/비금속공학</option>
          <option value="컴퓨터/시스템공학">컴퓨터/시스템공학</option>
          <option value="기계공학">기계공학</option>
        </select>
        <button
          className="close-info"
          style={{ background: `url(${icon_close_green}) no-repeat 0 center` }}
          onClick={(e) => {
            onRemove(id, order);
            onRemoveMajor(e);
          }}
        >
          삭제
        </button>
      </div>
    </div>
  ));
}

function Transfer({
  onChange,
  onClick,
  resumeInfo,
  onAddMajor,
  onRemoveMajor
}) {
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
              name="beforetrans"
              onChange={onChange}
            >
              <option value="default-value" disabled="disabled">
                선택
              </option>
              <option value="서울대">서울대</option>
              <option value="연세대">연세대</option>
              <option value="고려대">고려대</option>
              <option value="서강대">서강대</option>
              <option value="성균관대">성균관대</option>
              <option value="한양대">한양대</option>
              <option value="서울시립대">서울시립대</option>
              <option value="경희대">경희대</option>
              <option value="중앙대">중앙대</option>
              <option value="한국외대">한국외대</option>
            </select>
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">재학기간</span>
            <div className="input-wrapper">
              <input
                type="month"
                className="in-school-period-input"
                name="beforetrans_smonth"
              />
              <input
                type="month"
                className="in-school-period-input"
                name="beforetrans_emonth"
              />
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
              onChange={onChange}
              name="beforetrans_region"
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
          <div className="major-content content-col">
            <div className="major-name content-title">전공분류</div>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="non-value"
                name="beforetrans_major"
                onChange={onAddMajor}
              >
                <option value="non-value" disabled={true}>
                  선택
                </option>
                <option value="어문학">어문학</option>
                <option value="영어영문">영어영문</option>
                <option value="중어중문">중어중문</option>
                <option value="일어일문">일어일문</option>
                <option value="국어국문">국어국문</option>
                <option value="인문과학">인문과학</option>
                <option value="사회과학">사회과학</option>
                <option value="상경계열">상경계열</option>
                <option value="경영경제">경영경제</option>
                <option value="회계학">회계학</option>
                <option value="금속/비금속공학">금속/비금속공학</option>
                <option value="컴퓨터/시스템공학">컴퓨터/시스템공학</option>
                <option value="기계공학">기계공학</option>
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

function University({
  onChange,
  onClick,
  resumeInfo,
  onAddMajor,
  onRemoveMajor
}) {
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
              name="university"
              onChange={onChange}
            >
              <option value="default-value" disabled="disabled">
                선택
              </option>
              <option value="서울대">서울대</option>
              <option value="카이스트">카이스트</option>
              <option value="포항공대">포항공대</option>
            </select>
          </div>

          <div className="in-school-period content-col">
            <span className="content-title">재학기간</span>
            <div className="input-wrapper">
              <input
                type="month"
                className="in-school-period-input"
                name="uni_smonth"
                onChange={onChange}
              />
              <input
                type="month"
                className="in-school-period-input"
                name="uni_emonth"
                onChange={onChange}
              />
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
              onChange={onChange}
              name="uni_region"
            >
              <option value="default-value">선택</option>
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

          <div className="major-content content-col">
            <span className="content-title">전공분류</span>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="non-value"
                name="uni_major"
                onChange={onAddMajor}
              >
                <option value="non-value">선택</option>
                <option value="어문학">어문학</option>
                <option value="영어영문">영어영문</option>
                <option value="중어중문">중어중문</option>
                <option value="일어일문">일어일문</option>
                <option value="국어국문">국어국문</option>
                <option value="인문과학">인문과학</option>
                <option value="사회과학">사회과학</option>
                <option value="상경계열">상경계열</option>
                <option value="경영경제">경영경제</option>
                <option value="회계학">회계학</option>
                <option value="금속/비금속공학">금속/비금속공학</option>
                <option value="컴퓨터/시스템공학">컴퓨터/시스템공학</option>
                <option value="기계공학">기계공학</option>
              </select>
              <button className="add-major" onClick={onCreate}>
                전공추가
              </button>
            </div>
          </div>
        </div>
        <AddedMajor ids={ids} onRemove={onRemove} onAddMajor={onAddMajor} />
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
