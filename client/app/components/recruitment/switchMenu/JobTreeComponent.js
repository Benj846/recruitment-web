import React, { useState, useRef } from 'react';
import '../../../styles/RecruitmentComp/JobTreeComponent';

function JobTreeComponent(props) {
  const [addState, setaddState] = useState(false);
  const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25
  ];
  const appendRef = useRef(null);
  const [lvl1, setLvl1] = useState(null);
  const [lvl2, setLvl2] = useState(null);
  const [lvl3, setLvl3] = useState(null);
  const [curLvl, setCurLvl] = useState(1);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  // const [active3, setActive3] = useState(false);
  const addFuntion = () => {
    return appendRef.current.append();
  };
  const buttonItems = numbers.map((number, i) => (
    <button
      key={number.toString()}
      className={`lvl1 ${lvl1 === i ? 'active' : null}`}
      onClick={() => {
        setCurLvl(2);
        setLvl1(i);
        setActive2(false);
      }}
    >
      lv1.선택직무
    </button>
  ));

  const button2Items = numbers.map((number, i) => (
    <button
      key={number.toString()}
      className={`lvl2 ${
        lvl2 === i && active2 && curLvl >= 2 ? 'active' : null
      }`}
      disabled={false}
      onClick={() => {
        setCurLvl(3);
        setActive2(true);
        setLvl2(i);
      }}
    >
      lv2.선택직무
    </button>
  ));

  const Button3Items = () => {
    const Button = () => {
      const [isActive, setIsActive] = useState(false);
      return (
        <button
          className={`last ${isActive ? 'active' : null}`}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <span className="bubble">최종 선택 버튼</span>
        </button>
      );
    };

    const item = numbers.map((number) => <Button key={number.toString()} />);
    return item;
  };

  const addDescription = (e) => {
    return (
      <div className="added">
        <span>직무</span>
        <p>{console.log(e.target.innerText)}</p>
      </div>
    );
  };
  return (
    <div className="job-tree-cont">
      <div className="button-container">{buttonItems}</div>
      <div className="button-container">{button2Items}</div>
      <div className="btn-last-cont">
        <Button3Items />
      </div>
      <div ref={appendRef} className="ad-content-append">
        <div>선택된 버블이 추가되는 영역</div>
        <button className="btn-confirm">선택완료</button>
      </div>
    </div>
  );
}
export default JobTreeComponent;
