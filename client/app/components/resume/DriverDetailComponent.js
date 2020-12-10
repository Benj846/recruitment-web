import React from 'react';
import '../../styles/DriverComponent';

function DriversDetailComponent({ id, onRemove }) {
    return(
        <div className="body-detail">
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
                <input type="" className="input-box"/>
                </div>
                <div>
                <span className="acquisition">급수</span>
                <input type="" className="input-box"/>
                </div>
            </div>
            <div>
                <span className="acquisition">기관명</span>
                <input type="" className="input-box"/>
            </div>
        </div>
    );
}

export default DriversDetailComponent;