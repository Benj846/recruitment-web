import React from 'react';
import '../../styles/SelfIntroduction'

function SelfIntroductionComponent() {
    return(
        <div className="self-info">
            <div className="title-container">
                <div className="title">자기소개서</div>
                <div className="word-count">000자/300자</div>
            </div>
            <hr className="division-line"/>
            <textarea className="text-area"/>
        </div>
    );
}

export default SelfIntroductionComponent;