import React, { useState, useRef } from 'react';
import '../../styles/SkillComponent.css';
import icon_arrow_down_40px from './logo_and_images/icon_arrow_down_40px.png';
import icon_close_32px from './logo_and_images/icon_close_32px.png';

function SkillComponent({ resumeInfo, onChange, onClick }) {
  const [ids, setIds] = useState([]);
  const refId = useRef(0);

  const onCreate = () => {
    const id = refId.current;
    setIds([...ids, id]);
    refId.current += 1;
  };

  const onRemove = (selectedId) => {
    setIds(ids.filter((id) => id !== selectedId));
  };

  return (
    <div className="skill-info">
      <div className="title-container">
        <div className="skill-title">보유기술</div>
        <div className="add-items" onClick={onCreate}>
          추가하기+
        </div>
      </div>
      <hr className="division-line" />
      <SkillListComponent
        ids={ids}
        onRemove={onRemove}
        resumeInfo={resumeInfo}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  );
}

function SkillListComponent({ ids, onRemove, onChange, onClick }) {
  return (
    <>
      {ids.map((id) => (
        <section key={id} className="body-detail">
          <div className="year-close">
            <div className="period-wrap content-row">
              <span className="content-title">보유기간</span>
              <input
                type="month"
                name="ssmonth"
                className="acquisition-date"
                onChange={onChange}
              />
              <input
                type="month"
                name="semonth"
                className="acquisition-date"
                onChange={onChange}
              />
              <div className="acquisition-period">
                <span className="year">00</span>
                <span className="year-hold">년</span>
                <span className="month">00</span>
                <span className="month-hold">개월</span>
              </div>
            </div>
            <img
              className="close-info"
              src={icon_close_32px}
              onClick={() => onRemove(id)}
            />
          </div>
          <div className="skill-name content-row">
            <span className="content-title">스킬명</span>
            <input className="input-box" name="sname" onChange={onChange} />
            <select
              className="skill-level"
              name="slevel"
              style={{
                background: `url(${icon_arrow_down_40px}) no-repeat 100% 0`
              }}
              onChange={onChange}
              defaultValue="non-value"
            >
              <option value="non-value" disabled={true}>
                선택
              </option>
              <option value="상">상</option>
              <option value="중">중</option>
              <option value="하">하</option>
            </select>
          </div>
          <div className="util content-col">
            <span className="content-title">활용영역</span>
            <input className="skill-usage" name="sdesc" onChange={onChange} />
          </div>
        </section>
      ))}
    </>
  );
}
export default SkillComponent;
