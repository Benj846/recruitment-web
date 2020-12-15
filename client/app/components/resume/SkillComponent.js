import React, { useState, useRef }  from 'react';
import '../../styles/SkillComponent.css';

function SkillComponent (props) {
  const [ids, setIds] = useState([]);
  const refId = useRef(0);

  const onCreate = () => {
    const id = refId.current;    
    setIds([...ids, id]);
    refId.current += 1;
  }

  const onRemove = selectedId => {
    setIds(ids.filter(id => id !== selectedId));
  }

  return (
    <div className="skill-info">
      <div className="title-container">
        <div className="title">
            보유기술
        </div>
        <div className="add-items" onClick={onCreate}>
            추가하기+
        </div>
      </div>
      <hr className="division-line"/>
      <SkillListComponent ids={ids} onRemove={onRemove}/>
    </div>
  );
}

function SkillListComponent({ ids, onRemove }) {
    return(
        <>
        {
            ids.map(
                id => <SkillDetailComponent id={id} key={id} onRemove={onRemove}/>
            )
        }
        </>
    );
}

function SkillDetailComponent({ id, onRemove }) {
    return (
    <div className="body-detail">
        <div className="year-close">
            <div>
                <span className="acquisition">보유기간</span>
                <input type="date" className="acquisition-date"/>
                <input type="date" className="acquisition-date"/>
                <input type="number" className=""/>
            </div>
            <div className="close-info" onClick={() => onRemove(id)}>X</div>
        </div>
        <div className="wrapper">
            <div className="input-wrapper">
            <span className="acquisition">스킬명</span>
            <input type="" className="input-box"/>
            </div>
            <div>
            <input type="" className="skill-level"/>
            </div>
        </div>
        <div>
            <span className="acquisition">활용영역</span>
            <input type="" className="skill-usage"/>
        </div>
    </div>
    );
}
export default SkillComponent;