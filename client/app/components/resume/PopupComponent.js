// import React, { Component } from 'react';
import React, { useState } from 'react';
import '../../styles/PopupComponent';

// class Popup extends Component {
//   constructor(props) {
//     super(props);
function Popup({ text, closePopup }) {
  const [data, setData] = useState([
    '서울',
    '경기',
    '인천',
    '대전',
    '세종',
    '충남',
    '충복',
    '광주',
    '전남',
    '전북',
    '대구',
    '경북',
    '경남',
    '강원'
  ]);
  // this.state = {
  //   data: [
  //     '서울',
  //     '경기',
  //     '인천',
  //     '대전',
  //     '세종',
  //     '충남',
  //     '충복',
  //     '광주',
  //     '전남',
  //     '전북',
  //     '대구',
  //     '경북',
  //     '경남',
  //     '강원'
  //   ]
  // };
  //}

  return (
    <div className="popup">
      <div className="popup_inner">
        <h1 className="popup_h1">{text}</h1>
        <div className="popup_table_wapper">
          <table className="popup_table1">
            <tbody>
              <tr>
                <td>
                  <button className="popup_button_left">{data[0]}</button>
                  <button className="popup_button_left">{data[1]}</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="popup_button_left">{data[2]}</button>
                  <button className="popup_button_left">{data[3]}</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="popup_button_left">{data[4]}</button>
                  <button className="popup_button_left">{data[5]}</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="popup_button_left">{data[6]}</button>
                  <button className="popup_button_left">{data[7]}</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="popup_button_left">{data[8]}</button>
                  <button className="popup_button_left">{data[9]}</button>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="popup_table2"></table>
        </div>

        <div className="popup_button_wrapper">
          <button className="popup_button" onClick={closePopup}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
export default Popup;
