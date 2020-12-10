import React, { useState, useRef } from 'react';
import '../../styles/CareerComponent'
import CareerListComponent from './CareerListComponent';

function CareerComponent(props) {

  const [ids, setIds] = useState([]);
  const refId = useRef(0);

  const onCreate = () => {
    const id = refId.current;    
    setIds(ids.concat(id));
    refId.current += 1;
  }

  const onRemove = selectedId => {
    setIds(ids.filter(id => id !== selectedId));
  }
  
  return (
    <div className="career-info">
      <div className="career-title">
        <div className="title">경력사항</div>
        <div className="add-items" onClick={onCreate}>추가하기+</div>
      </div>
      <hr className="division-line"/>
      <CareerListComponent ids={ids} onRemove={onRemove}/>
    </div>
  );
}
export default CareerComponent;