import React, { useState } from 'react';
import '../../styles/SelfIntroduction';

function SelfIntroductionComponent() {
  const [wordCount, setWordCount] = useState(0);
  const handleKeyPress = (e) => {
    const value = e.target.value;
    setWordCount(value.replace(/\s+/g, '').length);
  };

  return (
    <div className="self-info">
      <div className="title-container">
        <div className="self-info-title">자기소개서</div>
        <span className="word-count">{wordCount}자/300자</span>
      </div>
      <hr className="division-line" />
      <textarea
        className="text-area"
        placeholder="자기 자신을 자유롭게 표현해보세요! (최대 300자)"
        onChange={handleKeyPress}
      />
    </div>
  );
}

export default SelfIntroductionComponent;
