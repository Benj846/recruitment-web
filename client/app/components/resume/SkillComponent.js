import React, { useState, useRef }  from 'react';
import '../../styles/SkillComponent.css';
import SkillListComponent from './SkillListComponent';

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
      <div className="career-title">
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
export default SkillComponent;