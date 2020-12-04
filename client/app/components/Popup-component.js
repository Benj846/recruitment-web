import React, { Component } from 'react';
import '../styles/Popup-component.css';

class Test extends Component {
  render() {
    return <div>test</div>;
  }
}

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ]
    };
  }

  //   componentWillmount() {
  //     document.addEventListener('mousedown', this.handleClick, false);
  //   }
  //   componentWillUnmount() {
  //     document.removeEventListener('mousedown', this.handleClick, false);
  //   }
  //   handleClick = (e) => {
  //     if (this.node.contains(e.target)) {
  //       return;
  //     }
  //     this.handleClickOutside()
  //   }
  //   handleClickOutside() {
  //   }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1 className="popup_h1">{this.props.text}</h1>
          <div className="popup_table_wapper">
            <table className="popup_table1">
              <tbody>
                <tr>
                  <td>
                    <button className="popup_button_left">
                      {this.state.data[0]}
                    </button>
                    <button className="popup_button_left">
                      {this.state.data[1]}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="popup_button_left">
                      {this.state.data[2]}
                    </button>
                    <button className="popup_button_left">
                      {this.state.data[3]}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="popup_button_left">
                      {this.state.data[4]}
                    </button>
                    <button className="popup_button_left">
                      {this.state.data[5]}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="popup_button_left">
                      {this.state.data[6]}
                    </button>
                    <button className="popup_button_left">
                      {this.state.data[7]}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="popup_button_left">
                      {this.state.data[8]}
                    </button>
                    <button className="popup_button_left">
                      {this.state.data[9]}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="popup_table2"></table>
          </div>

          <div className="popup_button_wrapper">
            <button className="popup_button" onClick={this.props.closePopup}>
              닫기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
