import React, { useState, useRef }  from 'react';
import '../../styles/ExamComponent';
import ExamListComponent from './ExamListComponent';

function ExamComponent (props) {
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
    <div className="exam-info">
      <div className="title-container">
        <div className="title">
            공인시험
        </div>
        <div className="add-items" onClick={onCreate}>
            추가하기+
        </div>
      </div>
      <hr className="division-line"/>     
      <ExamListComponent ids={ids} onRemove={onRemove}/>
    </div>
  );
}
export default ExamComponent;
