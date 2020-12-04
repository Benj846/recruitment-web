import React, { Component } from 'react';
import Select from 'react-select';
import '../../app/styles/Basicinfo-component.css';
import Popup from './Popup-component';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'chocolate', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];
class Basicinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      employee: {
        name: 'dummy'
      }
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
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
              <button className="male-btn">남</button>
              <button className="female-btn">여</button>
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
              <button
                className="search-btn"
                onClick={this.togglePopup.bind(this)}
              >
                search
              </button>
              <span className="span-mili">병역대상</span>
              <select className="select" name="" id="">
                <option className="option1" value="해당없음">
                  해당없음
                </option>
                <option value="">군필</option>
                <option value="">공익</option>
                <option value="">병역특례</option>
                <option value="">면제</option>
                <option value="">미필</option>
              </select>
              <span className="span-email">이메일</span>

              {/* ------------------------------------ */}

              {/* ------------------------------------ */}

              <input
                className="input-email"
                type="email"
                name="email"
                id=""
              ></input>

              {this.state.showPopup ? (
                <Popup
                  text="거주지를 선택해주세요."
                  closePopup={this.togglePopup.bind(this)}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Basicinfo;
