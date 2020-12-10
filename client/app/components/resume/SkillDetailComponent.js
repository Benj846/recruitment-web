import React  from 'react';
import '../../styles/SkillComponent.css';

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
export default SkillDetailComponent;