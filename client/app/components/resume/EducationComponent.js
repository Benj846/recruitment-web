import React, { useState } from 'react';
import '../../styles/EducationComponent'


function EducationComponent(props) {
  
  const [value, setValue] = useState();
  // const [education, setEducation] = useState('');
  //let selected;
  const onChange = e => {
    // setValue(e.target.value);
    // console.log(value);
    // setEducation(<div>{value}</div>);
    //education = <div>{value}</div>
    const targetValue = e.target.value;
    let result;
    switch(targetValue) {
      case '고졸':
        result = <HighSchool/>;
        break;        
      case '초대졸':
        result = <College/>
        break;
      case '편입':
        result = <Transfer/>
        break;
      case '학사':
        result = <University/>
        break;
      case '석사':
        result = <Master/>
        break;
      case '박사':
        result = <Doctorate/>
        break;        
    }
    setValue(result);
  }
  return (
    <div className="education-info">
      <div className="education-title">학력사항</div>
      <hr className="division-line"/>
      <div className="final-content">
        <div className="title">최종학력</div>
        <select className="select-education" defaultValue="non-value" onChange={onChange}>
          <option value="non-value" disabled="disabled">최종학력을 선택해주세요</option>
          <option value="고졸">고졸</option>
          <option value="초대졸">초대졸</option>
          <option value="편입">편입</option>
          <option value="학사">학사</option>
          <option value="석사">석사</option>
          <option value="박사">박사</option>          
        </select>
      </div>
      <div className="added-education">
        {/* {education} */}
        {value}  
      </div>
    </div>
  );
}

function HighSchool() {
  return(
    <>
      <hr className="education-division"/>
      <div className="education-container">
        <div className="name-major-content">
          <div className="level">
            고등학교
          </div>
          <div className="title">학교명</div>
          <select className="title-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="major-name">전공명</div>
          <select className="major-name-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

        </div>
        <div className="location-period">
          <div className="title">소재지</div>
          <select className="location-input" defaultValue="default-value">
            <option value="default-value"></option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="in-school-period">재학기간</div>
          <input type="date" className="in-school-period-input"/>
          <input type="date" className="in-school-period-input"/>
        </div>
      </div>
    </>
  );
}

function College() {
  return(
    <>
    <hr className="education-division"/>
    <div className="education-container">
        <div className="name-major-content">
          <div className="level">
            대학교
          </div>
          <div className="title">학교명</div>
          <select className="title-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="major-name">전공명</div>
          <select className="major-name-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="location-period">
          <div className="title">소재지</div>
          <select className="location-input" defaultValue="default-value">
            <option value="default-value"></option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="in-school-period">재학기간</div>
          <input type="date" className="in-school-period-input"/>
          <input type="date" className="in-school-period-input"/>
        </div>
      </div>
  </>
  );
}

function Transfer() {
  return(
    <>
    <hr className="education-division"/>
    <div className="education-container">
     <div className="name-major-content">
       <div className="level">
         대학교(편입 전)
       </div>
       <div className="title">학교명</div>
       <select className="title-input" defaultValue="default-value">
         <option value="default-value" disabled="disabled">선택</option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
       <div className="major-name">전공명</div>
       <select className="major-name-input" defaultValue="default-value">
         <option value="default-value" disabled="disabled">선택</option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
     </div>
     <div className="location-period">
       <div className="title">소재지</div>
       <select className="location-input" defaultValue="default-value">
         <option value="default-value"></option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
       <div className="in-school-period">재학기간</div>
       <input type="date" className="in-school-period-input"/>
       <input type="date" className="in-school-period-input"/>
     </div>
   </div>

   <div className="education-container">
     <div className="name-major-content">
       <div className="level">
         대학교(편입 후)
       </div>
       <div className="title">학교명</div>
       <select className="title-input" defaultValue="default-value">
         <option value="default-value" disabled="disabled">선택</option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
       <div className="major-name">전공명</div>
       <select className="major-name-input" defaultValue="default-value">
         <option value="default-value" disabled="disabled">선택</option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
     </div>
     <div className="location-period">
       <div className="title">소재지</div>
       <select className="location-input" defaultValue="default-value">
         <option value="default-value"></option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
       <div className="in-school-period">재학기간</div>
       <input type="date" className="in-school-period-input"/>
       <input type="date" className="in-school-period-input"/>
     </div>
   </div>
    </>
  );
}

function University() {
  return(
  <>
    <hr className="education-division"/>
    <div className="education-container">
        <div className="name-major-content">
          <div className="level">
            대학교
          </div>
          <div className="title">학교명</div>
          <select className="title-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="major-name">전공명</div>
          <select className="major-name-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="location-period">
          <div className="title">소재지</div>
          <select className="location-input" defaultValue="default-value">
            <option value="default-value"></option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="in-school-period">재학기간</div>
          <input type="date" className="in-school-period-input"/>
          <input type="date" className="in-school-period-input"/>
        </div>
      </div>
  </>
  );
}

function Master() {
  return(
    <>
      <hr className="education-division"/>
      <div className="education-container">
        <div className="name-major-content">
          <div className="level">
            대학교
          </div>
          <div className="title">학교명</div>
          <select className="title-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="major-name">전공명</div>
          <select className="major-name-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="location-period">
          <div className="title">소재지</div>
          <select className="location-input" defaultValue="default-value">
            <option value="default-value"></option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="in-school-period">재학기간</div>
          <input type="date" className="in-school-period-input"/>
          <input type="date" className="in-school-period-input"/>
        </div>
      </div>

      <hr className="education-division"/>
      <div className="education-container">
        <div className="name-major-content">
          <div className="level">
            대학원
          </div>
          <div className="title">학교명</div>
          <select className="title-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="major-name">전공명</div>
          <select className="major-name-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="location-period">
          <div className="title">소재지</div>
          <select className="location-input" defaultValue="default-value">
            <option value="default-value"></option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="in-school-period">재학기간</div>
          <input type="date" className="in-school-period-input"/>
          <input type="date" className="in-school-period-input"/>
        </div>
      </div>
  </>
  );
}

function Doctorate() {
  return(
    <>
      <hr className="education-division"/>
      <div className="education-container">
        <div className="name-major-content">
          <div className="level">
            대학교
          </div>
          <div className="title">학교명</div>
          <select className="title-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="major-name">전공명</div>
          <select className="major-name-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="location-period">
          <div className="title">소재지</div>
          <select className="location-input" defaultValue="default-value">
            <option value="default-value"></option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="in-school-period">재학기간</div>
          <input type="date" className="in-school-period-input"/>
          <input type="date" className="in-school-period-input"/>
        </div>
      </div>

      <hr className="education-division"/>
      <div className="education-container">
      <div className="name-major-content">
        <div className="level">
          대학원(석사)
        </div>
        <div className="title">학교명</div>
        <select className="title-input" defaultValue="default-value">
          <option value="default-value" disabled="disabled">선택</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <div className="major-name">전공명</div>
        <select className="major-name-input" defaultValue="default-value">
          <option value="default-value" disabled="disabled">선택</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="location-period">
        <div className="title">소재지</div>
        <select className="location-input" defaultValue="default-value">
          <option value="default-value"></option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <div className="in-school-period">재학기간</div>
        <input type="date" className="in-school-period-input"/>
        <input type="date" className="in-school-period-input"/>
      </div>
    </div>

    <hr className="education-division"/>
    <div className="education-container">
      <div className="name-major-content">
        <div className="level">
          대학원(박사)
        </div>
        <div className="title">학교명</div>
        <select className="title-input" defaultValue="default-value">
          <option value="default-value" disabled="disabled">선택</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <div className="major-name">전공명</div>
        <select className="major-name-input" defaultValue="default-value">
          <option value="default-value" disabled="disabled">선택</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="location-period">
        <div className="title">소재지</div>
        <select className="location-input" defaultValue="default-value">
          <option value="default-value"></option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <div className="in-school-period">재학기간</div>
        <input type="date" className="in-school-period-input"/>
        <input type="date" className="in-school-period-input"/>
      </div>
    </div>
    </>
  );
}

// reusable components
function HighSchoolComponent() {
  return(
    <>
     
    </>
  );
}

function TransferComponent() {
  return(
    <>
    <hr className="education-division"/>
 
 </>
  );
}


function UniversityComponent() {
  return(
    <>
 
    </>
  );
}

function MasterComponent() {
  return(
    <>
      <div className="education-container">
        <div className="name-major-content">
          <div className="level">
            대학원
          </div>
          <div className="title">학교명</div>
          <select className="title-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="major-name">전공명</div>
          <select className="major-name-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="location-period">
          <div className="title">소재지</div>
          <select className="location-input" defaultValue="default-value">
            <option value="default-value"></option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="in-school-period">재학기간</div>
          <input type="date" className="in-school-period-input"/>
          <input type="date" className="in-school-period-input"/>
        </div>
      </div>
    </>
  );
}

function DoctorateComponent() {
  return(
    <>
    <hr className="education-division"/>
   <div className="education-container">
     <div className="name-major-content">
       <div className="level">
         대학원(석사)
       </div>
       <div className="title">학교명</div>
       <select className="title-input" defaultValue="default-value">
         <option value="default-value" disabled="disabled">선택</option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
       <div className="major-name">전공명</div>
       <select className="major-name-input" defaultValue="default-value">
         <option value="default-value" disabled="disabled">선택</option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
     </div>
     <div className="location-period">
       <div className="title">소재지</div>
       <select className="location-input" defaultValue="default-value">
         <option value="default-value"></option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
       <div className="in-school-period">재학기간</div>
       <input type="date" className="in-school-period-input"/>
       <input type="date" className="in-school-period-input"/>
     </div>
   </div>

   <div className="education-container">
     <div className="name-major-content">
       <div className="level">
         대학원(박사)
       </div>
       <div className="title">학교명</div>
       <select className="title-input" defaultValue="default-value">
         <option value="default-value" disabled="disabled">선택</option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
       <div className="major-name">전공명</div>
       <select className="major-name-input" defaultValue="default-value">
         <option value="default-value" disabled="disabled">선택</option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
     </div>
     <div className="location-period">
       <div className="title">소재지</div>
       <select className="location-input" defaultValue="default-value">
         <option value="default-value"></option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
       <div className="in-school-period">재학기간</div>
       <input type="date" className="in-school-period-input"/>
       <input type="date" className="in-school-period-input"/>
     </div>
   </div>
 </>
  );
}

export default EducationComponent;