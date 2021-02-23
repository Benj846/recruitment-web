import React, { useState, useRef } from 'react';
import '../../styles/SkillComponent.css';

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
        <div className="title">보유기술</div>
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
        <div key={id} className="body-detail">
          <div className="year-close">
            <div>
              <span className="acquisition">보유기간</span>
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
              <input className="acquisition-period" disabled="disabled" />
            </div>
            <div className="close-info" onClick={() => onRemove(id)}>
              X
            </div>
          </div>
          <div className="wrapper">
            <div className="input-wrapper">
              <span className="acquisition">스킬명</span>
              <input className="input-box" name="sname" onChange={onChange} />
            </div>
            <div>
              <select
                className="skill-level"
                name="slevel"
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
          </div>
          <div>
            <span className="acquisition">활용영역</span>
            <input className="skill-usage" name="sdesc" onChange={onChange} />
          </div>
        </div>
      ))}
    </>
  );
}
export default SkillComponent;
