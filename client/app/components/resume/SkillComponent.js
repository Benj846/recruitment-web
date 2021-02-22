import React, { useState, useRef } from 'react';
import '../../styles/SkillComponent.css';
import icon_close_32px from './logo_and_images/icon_close_32px.png';

function SkillComponent(props) {
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
      <SkillListComponent ids={ids} onRemove={onRemove} />
    </div>
  );
}

function SkillListComponent({ ids, onRemove }) {
  return (
    <>
      {ids.map((id) => (
        <section key={id} className="body-detail">
          <div className="year-close">
            <div className="period-wrap content-row">
              <span className="content-title">보유기간</span>
              <input type="month" className="acquisition-date" />
              <input type="month" className="acquisition-date" />
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
            <input type="" className="input-box" />
            <input type="" className="skill-level" />
          </div>
          <div className="util content-col">
            <span className="content-title">활용영역</span>
            <input type="" className="skill-usage" />
          </div>
        </section>
      ))}
    </>
  );
}
export default SkillComponent;
