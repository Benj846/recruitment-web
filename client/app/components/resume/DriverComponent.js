import React, { useState, useRef } from 'react';
import '../../styles/DriverComponent';
import icon_close_32px from './logo_and_images/icon_close_32px.png';

function DriversComponent(props) {
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
      <DriversListComponent ids={ids} onRemove={onRemove} />
    </div>
  );
}

function DriversListComponent({ ids, onRemove }) {
  return (
    <>
      {ids.map((id) => (
        <section key={id} className="body-detail">
          <div className="year-close content-row">
            <div className="acquisition content-col">
              <span className="content-title">취득년월 </span>
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
          <div className="wrapper content-row">
            <div className="qualification  content-col">
              <span className="content-title">자격증명</span>
              <input className="input-box" />
            </div>
            <div className="rating content-col">
              <span className="content-title">급수</span>
              <input className="input-box" />
            </div>
          </div>
          <div className="institution content-col">
            <span className="content-title">기관명</span>
            <input className="input-box" />
          </div>
        </section>
      ))}
    </>
  );
}
export default DriversComponent;
