import React, { useState, useRef } from 'react';
import '../../styles/DriverComponent';
import icon_close_32px from './logo_and_images/icon_close_32px.png';

function DriversComponent({ resumeInfo, onChange, onClick }) {
  const [ids, setIds] = useState([]);
  const refId = useRef(0);

  const onCreate = () => {
    const id = refId.current;
    setIds(ids.concat(id));
    refId.current += 1;
  };

  const onRemove = (selectedId) => {
    setIds(ids.filter((id) => id !== selectedId));
  };

  return (
    <div className="driver-info">
      <div className="title-container">
        <div className="driver-title">자격면허</div>
        <div className="add-items" onClick={onCreate}>
          추가하기+
        </div>
      </div>
      <hr className="division-line" />
      <DriversListComponent
        ids={ids}
        onRemove={onRemove}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  );
}

function DriversListComponent({ ids, onRemove, onChange, onClick }) {
  return (
    <>
      {ids.map((id) => (
        <div key={id} className="body-detail">
          <div className="year-close">
            <div>
              <span className="acquisition">취득년월 </span>
              <input
                type="month"
                name="dmonth"
                className="acquisition-date"
                onChange={onChange}
              />
            </div>
            <img
              className="close-info"
              src={icon_close_32px}
              onClick={() => {
                onRemove(id);
              }}
            />
          </div>

          <div className="wrapper">
            <div className="input-wrapper">
              <span className="acquisition">자격증명</span>
              <input name="dname" className="input-box" onChange={onChange} />
            </div>
            <div>
              <span className="acquisition">급수</span>
              <input className="input-box" name="dlevel" onChange={onChange} />
            </div>
          </div>
          <div>
            <span className="acquisition">기관명</span>
            <input className="input-box" name="dagency" onChange={onChange} />
          </div>
        </div>
      ))}
    </>
  );
}
export default DriversComponent;
