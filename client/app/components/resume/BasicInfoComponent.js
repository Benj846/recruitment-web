import React, { Component } from 'react';
import '../../styles/BasicInfoComponent';
import Popup from './PopupComponent';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'chocolate', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];
class BasicInfoComponent extends Component {
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
        <div className="component-style">
          <p className="resume-title"> 이력서 작성하기</p>
          <p className="text">
            {employee.name} 님의 프로필을 입력하시고, 더 많은 채용 기회를
            확보하세요!
          </p>
          <p className="basic-info-title">기본정보</p>
          <hr className="division-line" />

          <div className="basic-info-container">
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
              ></input>
              <span className="span-phonenum">전화번호</span>
              <input
                className="no-input-outline input-phonenum"
                type="number"
                name="phoneNumber"
              ></input>
              <br />
              <span className="span-addr">거주지</span>
              <input
                className="no-input-outline input-addr"
                type="text"
                name="address"
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

              <input className="input-email" type="email" name="email"></input>

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

export default BasicInfoComponent;
