import React from 'react';
import '../../styles/SignInComponent'

function SignInComponent({closeSignIn}) {
    return(
        <div className="signin-container">
            <div className="signin-content">
                <div className="close-signin">
                    <button className="close-button" onClick={closeSignIn}>닫기</button>
                </div>
            </div>
        </div>
    );
}
export default SignInComponent;