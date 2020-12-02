import React, { Component } from 'react';
import Select from 'react-select';
import './Basicinfo-component.css';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'chocolate', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
class Basicinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        name: 'dummy',
      },
    };
  }

  render() {
    const { employee } = this.state;
    return (
      <div className="root">
        <div className="componentStyle">
          <p className="이력서"> 이력서 작성하기</p>
          <p className="text">
            {employee.name} 님의 프로필을 입력하시고, 더 많은
            채용기회를확보하세요!
          </p>
          <p className="기본정보">기본정보</p>
          <hr className="line"></hr>
          <div className="씨발">
            <div className="form-container">
              <form action="">
                <div className="form">{/* <image src=""></image> */}</div>
                <button>등록</button>
                <button>삭제</button>
              </form>
            </div>
            <div className="input-container">
              <span className="span-name">이름</span>
              <input
                className="no-input-outline input-name"
                type="text"
                name="name"
                id=""
              ></input>
              <span className="span-gender">성별</span>
              {/* <input
                className="no-input-outline gender-input"
                type="text"
                name="gender"
                id=""
              ></input> */}
              <button>남</button>
              <button>여</button>
              <br />
              <span className="span-birth">생년월일</span>
              <input
                className="no-input-outline input-birth"
                type="date"
                name="date"
                id=""
              ></input>
              <span className="span-phonenum">전화번호</span>
              <input
                className="no-input-outline input-phonenum"
                type="number"
                name="phoneNumber"
                id=""
              ></input>
              <br />
              <span className="span-addr">거주기</span>
              <input
                className="no-input-outline input-addr"
                type="text"
                name="address"
                id=""
              ></input>
              <button>search</button>
              <span className="span-mili">병역대상</span>
              <Select option={options} />
              <span className="span-email">이메일</span>
              <input
                className="no-input-outline input-email"
                type="email"
                name="email"
                id=""
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Basicinfo;
