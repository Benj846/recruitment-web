import React, { useState, useRef } from 'react';
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
        <div className="name-period-content">
          <div className="level">
            고등학교
          </div>
          <div className="title">학교명</div>
          <select className="title-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="in-school-period">재학기간</div>
          <input type="date" className="in-school-period-input"/>
          <input type="date" className="in-school-period-input"/>
        </div>
        <div className="location">
          <div className="location-title">소재지</div>
          <select className="location-input" defaultValue="default-value">
            <option value="default-value"></option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="major-content">
          <div className="major-name">전공분류</div>
          <select className="select-major" defaultValue="default-value">
            <option value="default-value" disabled="disabled">인문계열</option>
            <option value="실업계열">실업계열</option>
          </select>
        </div>
      </div>
    </>
  );
}

function College() {
  const [ids, setIds] = useState([]);
  const [lastId, setLastId] = useState(0);
  const refId = useRef(0);
  const onCreate = () => {
    const id = refId.current;    
    setIds(ids.concat(id));
    setLastId(id);
    refId.current += 1;
  }

  const onRemove = selectedId => {
    const newIds = ids.filter(id => id !== selectedId);
    setIds(newIds);
    setLastId(newIds[newIds.length - 1]);    
  }

  return(
    <>
    <hr className="education-division"/>
    <div className="education-container">
        <div className="name-period-content">
          <div className="level">
            대학교
          </div>
          <div className="title">학교명</div>
          <select className="title-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">패플대학교</option>
            <option value="2">하버드</option>
            <option value="3">옥스퍼드</option>
          </select>
          <div className="in-school-period">재학기간</div>
          <input type="date" className="in-school-period-input"/>
          <input type="date" className="in-school-period-input"/>
        </div>
        <div className="location">
          <div className="location-title">소재지</div>
          <select className="location-input" defaultValue="default-value">
            <option value="default-value"></option>
            <option value="서울">서울</option>
            <option value="인천">인천</option>
          </select>
        </div>
        <div className="major-content">
          <div className="major-name">전공명</div>
          <select className="select-major" defaultValue="국어국문">
              <option value="국어국문">국어국문</option>
              <option value="영어영문">영어영문</option>
          </select>
          <button className="add-major" onClick={onCreate}>전공추가</button>
        </div>
        <AddedMajor ids={ids} onRemove={onRemove} onCreate={onCreate}/>
      </div>
  </>
  );
}

function AddedMajor({ids, onRemove, order}) {
  return(
    ids.map(id => 
          <div key={id} className="major-content">
            <div className="title">전공명</div>
            <select className="select-major" defaultValue="국어국문">
                <option value="국어국문">국어국문</option>
                <option value="영어영문">영어영문</option>
            </select>
            <button className="close-info" onClick={()=> onRemove(id)}>X 삭제</button>
          </div>
      )
  );
}

function Transfer() {
  const [idsOne, setIdsOne] = useState([]);
  const [idsTwo, setIdsTwo] = useState([]);
  const refId = useRef([0, 0]);
  const beforeTransfer = 0;
  const afterTransfer = 1;
  const onCreate = index => {
    const id = refId.current[index];
    if (index === beforeTransfer) {
      setIdsOne([...idsOne, id]);

    } else if(index === afterTransfer){
      setIdsTwo([...idsTwo, id]);
    }
    refId.current[index] += 1;
  }

  const onRemove = (selectedId, order) => {    
    if (order === beforeTransfer) {
      const newIds = idsOne.filter(id => id !== selectedId);
      setIdsOne(newIds);
    } else if(order === afterTransfer) {
      const newIds = idsTwo.filter(id => id !== selectedId);
      setIdsTwo(newIds);
    }
  }
  
  return(
    <>
      <hr className="education-division"/>
      <div className="education-container">
          <div className="name-period-content">
            <div>
              <div className="level">
                대학교
              </div>
              <div className="level">
                (편입 전)
              </div>
            </div>
            <div className="title">학교명</div>
            <select className="title-input" defaultValue="default-value">
              <option value="default-value" disabled="disabled">패플대학교</option>
              <option value="2">하버드</option>
              <option value="3">옥스퍼드</option>
            </select>
            <div className="in-school-period">재학기간</div>
            <input type="date" className="in-school-period-input"/>
            <input type="date" className="in-school-period-input"/>
          </div>
          <div className="location">
            <div className="location-title">소재지</div>
            <select className="location-input" defaultValue="default-value">
              <option value="default-value"></option>
              <option value="서울">서울</option>
              <option value="인천">인천</option>
            </select>
          </div>
          <div className="major-content">
            <div className="title">전공명</div>
            <select className="select-major" defaultValue="국어국문">
                <option value="국어국문">국어국문</option>
                <option value="영어영문">영어영문</option>
            </select>
            <button className="add-major" onClick={()=>onCreate(beforeTransfer)}>전공추가</button>
          </div>
          <AddedMajor ids={idsOne} order={beforeTransfer} onRemove={onRemove}/>        

          <hr className="education-division"/>

          <div className="name-period-content">
            <div>
              <div className="level">
                대학교
              </div>
              <div className="level">
                (편입 후)
              </div>
            </div>
              <div className="title">학교명</div>
              <select className="title-input" defaultValue="default-value">
                <option value="default-value" disabled="disabled">패플대학교</option>
                <option value="2">하버드</option>
                <option value="3">옥스퍼드</option>
              </select>
              <div className="in-school-period">재학기간</div>
              <input type="date" className="in-school-period-input"/>
              <input type="date" className="in-school-period-input"/>
            </div>
            <div className="location">
              <div className="location-title">소재지</div>
              <select className="location-input" defaultValue="default-value">
                <option value="default-value"></option>
                <option value="서울">서울</option>
                <option value="인천">인천</option>
              </select>
            </div>
            <div className="major-content">
              <div className="title">전공명</div>
              <select className="select-major" defaultValue="국어국문">
                  <option value="국어국문">국어국문</option>
                  <option value="영어영문">영어영문</option>
              </select>
              <button className="add-major" onClick={()=>onCreate(afterTransfer)}>전공추가</button>
            </div>
            <AddedMajor ids={idsTwo} order={afterTransfer} onRemove={onRemove}/>
          </div>
    </>
  );
}

function University() {
  const [ids, setIds] = useState([]);
  const refId = useRef(0);
  const onCreate = () => {
    const id = refId.current;
    setIds([...ids, id]);
    refId.current += 1;
  }

  const onRemove = selectedId => {    
      const newIds = ids.filter(id => id !== selectedId);
      setIds(newIds);
  }

  return(
  <>
    <hr className="education-division"/>
    <div className="education-container">
        <div className="name-period-content">
          <div className="level">
            대학교
          </div>
          <div className="title">학교명</div>
          <select className="title-input" defaultValue="default-value">
            <option value="default-value" disabled="disabled">선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="in-school-period">재학기간</div>
          <input type="date" className="in-school-period-input"/>
          <input type="date" className="in-school-period-input"/>
        </div>
        <div className="location">
            <div className="location-title">소재지</div>
            <select className="location-input" defaultValue="default-value">
              <option value="default-value"></option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
        </div>

        <div className="major-content">
              <div className="title">전공명</div>
              <select className="select-major" defaultValue="국어국문">
                  <option value="국어국문">국어국문</option>
                  <option value="영어영문">영어영문</option>
              </select>
              <button className="add-major" onClick={onCreate}>전공추가</button>
            </div>
            <AddedMajor ids={ids} onRemove={onRemove}/>
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
export default EducationComponent;