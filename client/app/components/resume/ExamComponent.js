import React, { useState, useRef } from 'react';
import '../../styles/ExamComponent';
import icon_close_32px from './logo_and_images/icon_close_32px.png';

function ExamComponent(props) {
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
    <div className="exam-info">
      <div className="title-container">
        <div className="exam-title">공인시험</div>
        <div className="add-items" onClick={onCreate}>
          추가하기+
        </div>
      </div>
      <hr className="division-line" />
      <ExamListComponent ids={ids} onRemove={onRemove} />
    </div>
  );
}

function ExamListComponent({ ids, onRemove }) {
  return (
    <>
      {ids.map((id) => (
        <section key={id} className="body-detail">
          <div className="year-close content-row">
            <div className="acquisition content-col">
              <span className="content-title">취득년월</span>
              <input type="month" className="acquisition-date" />
            </div>
            <img
              className="close-info"
              src={icon_close_32px}
              onClick={() => {
                onRemove(id);
              }}
            />
          </div>
          <div className="exam-wrapper content-row">
            <div className="name content-col">
              <span className="content-title">공인시험명</span>
              <input className="input-box" />
            </div>
            <div className="rating content-col">
              <span className="content-title">급수</span>
              <input className="input-box" />
            </div>
          </div>
          <div className="exam-wrapper content-row">
            <div className="institution content-col">
              <span className="content-title">기관명</span>
              <input className="input-box" />
            </div>
            <div className="score content-col">
              <span className="content-title">공인점수</span>
              <input className="input-box" />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default ExamComponent;
