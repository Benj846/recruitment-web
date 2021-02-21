import React, { useState, useRef } from 'react';
import '../../styles/PortfolioComponent';

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
          <div className="url-link-container">
            <div className="url-link-content">
              <span className="url-link-title">URL 링크</span>
              <input className="link-input" placeholder="http://" />
            </div>
            <div className="close-portfolio" onClick={onRemove}>
              X
            </div>
          </div>
          <div className="file-attach">
            <span className="file-title">첨부파일</span>
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
        <div className="title">논문/포트폴리오</div>
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
