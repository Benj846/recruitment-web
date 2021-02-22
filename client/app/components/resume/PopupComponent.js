// import React, { Component } from 'react';
import React, { useState } from 'react';
import '../../styles/PopupComponent';

// class Popup extends Component {
//   constructor(props) {
//     super(props);
function Popup({ text, closePopup }) {
  const [data, setData] = useState([
    { id: '1', value: '서울' },
    { id: '2', value: '경기' },
    { id: '3', value: '인천' },
    { id: '4', value: '대전' },
    { id: '5', value: '세종' },
    { id: '6', value: '충남' },
    { id: '7', value: '충북' },
    { id: '8', value: '광주' },
    { id: '9', value: '전남' },
    { id: '10', value: '전북' },
    { id: '11', value: '대구' },
    { id: '12', value: '경북' },
    { id: '13', value: '경남' },
    { id: '14', value: '강원' },
    { id: '15', value: '지역' },
    { id: '16', value: '지역' },
    { id: '17', value: '지역' },
    { id: '18', value: '지역' }
  ]);
  const [detail, setDetail] = useState([]);
  // Array.prototype.division = function (n) {
  //   let arr = this;
  //   let cnt = Math.floor(arr.length / n);
  //   let tmp = [];
  //   for (let i = 0; i < cnt; i++) {
  //     tmp.push(arr.splice(0, n));
  //   }
  //   return tmp;
  // };
  // const lists = data.division(2);
  // const TableItems = () => {
  //   return lists.map((items) => (
  //     <tr className="table-row">
  //       <td>
  //         <button className="popup-btn" key={items[0].id}>
  //           {items[0].value}
  //         </button>
  //       </td>
  //       <td>
  //         <button className="popup-btn" key={items[1].id}>
  //           {items[1].value}
  //         </button>
  //       </td>
  //     </tr>
  //   ));
  // };
  const TableItem = () =>
    data.map((item) => (
      <button key={item.id} className="btn-style">
        {item.value}
      </button>
    ));
  const TableDetail = () => {
    for (let i = 0; i < 50; i++) {
      detail.push({ id: i + 1, value: `detail ${i}` });
    }
    return detail.map((item) => (
      <button key={item.id} className="btn-style">
        {item.value}
      </button>
    ));
  };
  return (
    <div className="popup">
      <div className="popup-inner">
        <h1 className="title">{text}</h1>
        <div className="table-wrapper">
          <div className="table-01">
            <TableItem />
          </div>
          <div className="table-02">
            <TableDetail />
          </div>
        </div>
        <button className="btn-confirm" onClick={closePopup}>
          선택완료
        </button>
      </div>
    </div>
  );
}
export default Popup;
