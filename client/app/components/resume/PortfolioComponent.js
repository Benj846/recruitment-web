import React, { useState, useRef }  from 'react';
import '../../styles/PortfolioComponent';

function PortfolioComponent (props) {
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
    <div className="portf-info">
      <div className="title-container">
        <div className="title">
            포트폴리오
        </div>
        <div className="add-items" onClick={onCreate}>
            추가하기+
        </div>
      </div>
      <hr className="division-line"/>
      <PortfolioListComponent ids={ids} onRemove={onRemove}/>
    </div>
  );
}

function PortfolioListComponent({ids, onRemove }) {
    return(
        <>
            {
                ids.map(
                    id => <PortfolioDetailComponent id={id} key={id} onRemove={onRemove}/>
                )
            }
        </>
    );
}

function PortfolioDetailComponent({ids, onRemove }) {
    return(
        <>
        </>
    );
}
export default PortfolioComponent;