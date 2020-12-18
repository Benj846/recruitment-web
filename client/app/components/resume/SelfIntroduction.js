import React, { useState } from 'react';
import '../../styles/SelfIntroduction'

function SelfIntroductionComponent() {
    const [wordCount, setWordCount] = useState(0);
    const handleKeyPress = e => {
        const value = e.target.value;
        setWordCount(value.replace(/\s+/g, '').length);
    }

    return(
        <div className="self-info">
            <div className="title-container">
                <div className="title">자기소개서</div>
                <div className="word-count">{wordCount}자/300자</div>
            </div>
            <hr className="division-line"/>
            <textarea className="text-area" onChange={handleKeyPress}/>
        </div>
    );
}

export default SelfIntroductionComponent;