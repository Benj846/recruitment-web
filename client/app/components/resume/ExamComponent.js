import React, { useState, useRef } from 'react';
import '../../styles/ExamComponent';

function ExamComponent({ resumeInfo, onChange, onClick }) {
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
        <div className="title">공인시험</div>
        <div className="add-items" onClick={onCreate}>
          추가하기+
        </div>
      </div>
      <hr className="division-line" />
      <ExamListComponent
        ids={ids}
        onRemove={onRemove}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  );
}

function ExamListComponent({ ids, onRemove, onChange, onClick }) {
  return (
    <>
      {ids.map((id) => (
        <div key={id} className="body-detail">
          <div className="year-close">
            <div>
              <span className="acquisition">취득년월</span>
              <input
                type="month"
                className="acquisition-date"
                name="exmonth"
                onChange={onChange}
              />
            </div>
            <div
              className="close-info"
              onClick={() => {
                onRemove(id);
              }}
            >
              X
            </div>
          </div>
          <div className="exam-wrapper">
            <div className="">
              <span className="acquisition">공인시험명</span>
              <input className="input-box" name="exname" onChange={onChange} />
            </div>
            <div>
              <span className="acquisition">급수</span>
              <input className="input-box" name="exlevel" onChange={onChange} />
            </div>
          </div>
          <div className="exam-wrapper">
            <div>
              <span className="acquisition">기관명</span>
              <input
                className="input-box"
                name="exagency"
                onChange={onChange}
              />
            </div>
            <div>
              <span className="acquisition">공인점수</span>
              <input className="input-box" name="exscore" onChange={onChange} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ExamComponent;
