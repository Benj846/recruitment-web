import React, { useState, useRef } from 'react';
import '../../styles/PortfolioComponent';
import icon_close_32px from './logo_and_images/icon_close_32px.png';

function PortfolioComponent(props) {
  const [isClicked, setClicked] = useState(false);
  const onAdd = () => {
    setClicked(true);
  };

  const onRemove = () => {
    setClicked(false);
  };

  const printDetail = () => {
    if (isClicked === true) {
      return (
        <>
          <div className="url-link-container content-row">
            <div className="url-link-content content-col">
              <span className="content-title">URL 링크</span>
              <input className="link-input" placeholder="http://" />
            </div>
            <img
              className="close-portfolio"
              src={icon_close_32px}
              onClick={onRemove}
            />
          </div>
          <div className="file-attach content-col">
            <span className="content-title">첨부파일</span>
            <input className="file-input" />
            <button className="add-file">파일추가</button>
          </div>
        </>
      );
    } else {
      return;
    }
  };

  return (
    <div className="portf-info">
      <div className="title-container">
        <div className="portf-title">논문/포트폴리오</div>
        <div className="add-items" onClick={onAdd}>
          추가하기+
        </div>
      </div>
      <hr className="division-line" />
      {printDetail()}
    </div>
  );
}
export default PortfolioComponent;
