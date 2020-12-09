import React, { useState, useRef } from 'react';
import '../styles/CareerComponent.css';
import CareerListComponent from './CareerListComponent';

function CareerComponent(props) {

  const [ids, setIds] = useState([]);
  const careerId = useRef(0);

  const onAddCareer = () => {
    const id = careerId.current;    
    //setIds([...ids, id]);
    setIds(ids.concat(id));
    // let a = [1,2,3]
    // let b = [...a, 4];
    // console.log(b);

    careerId.current += 1;
  }

  const onRemove = idx => {
    setIds(ids.filter(id => id !== idx));
  }
  
  return (
    <div className="career-info">
      <div className="career-title">
        <div className="title">경력사항</div>
        <div className="add-items" onClick={onAddCareer}>추가하기+</div>
      </div>
      <hr />
      <CareerListComponent ids={ids} onRemove={onRemove}/>
    </div>
  );
}
export default CareerComponent;