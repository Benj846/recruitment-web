import React, { useState, useRef }  from 'react';
import '../../styles/DriverComponent';

function DriversComponent (props) {
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
    <div className="driver-info">
      <div className="title-container">
        <div className="title">
            자격면허
        </div>
        <div className="add-items" onClick={onCreate}>
            추가하기+
        </div>
      </div>
      <hr className="division-line"/>
      <DriversListComponent ids={ids} onRemove={onRemove}/>
    </div>
  );
}

function DriversListComponent({ids, onRemove}) {
    return(
        <>
            {
                ids.map(
                    id =>
                    <div key={id} className="body-detail">
                        <div className="year-close">
                            <div>
                                <span className="acquisition">취득년월 </span>
                                <input type="date" className="acquisition-date"/>
                            </div>
                            <div className="close-info"onClick={() => onRemove(id)}>
                                X
                            </div>
                        </div>

                        <div className="wrapper">
                            <div className="input-wrapper">
                            <span className="acquisition">자격증명</span>
                            <input className="input-box"/>
                            </div>
                            <div>
                            <span className="acquisition">급수</span>
                            <input className="input-box"/>
                            </div>
                        </div>
                        <div>
                            <span className="acquisition">기관명</span>
                            <input className="input-box"/>
                        </div>
                    </div>
                )
            }
        </>
    );
}
export default DriversComponent;