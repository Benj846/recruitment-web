import React  from 'react';
import '../../styles/ExamComponent';

function ExamDetailComponent({ id, onRemove }) {
    return(
        <div className="body-detail">
            <div className="year-close">
                <div>
                    <span className="acquisition">취득년월</span>
                    <input type="date" className="acquisition-date"/>
                </div>
                <div className="close-info" onClick={() => {onRemove(id)}}>X</div>
            </div>
            <div className="exam-wrapper">
                <div className="">
                <span className="acquisition">공인시험명</span>
                <input type="" className="input-box"/>
                </div>
                <div>
                <span className="acquisition">급수</span>
                <input type="" className="input-box"/>
                </div>
            </div >
            <div className="exam-wrapper">
                <div>
                <span className="acquisition">기관명</span>
                <input type="" className="input-box"/>
                </div>
                <div>
                <span className="acquisition">공인점수</span>
                <input type="" className="input-box"/>
                </div>
            </div>
        </div>
    );
}
export default ExamDetailComponent;