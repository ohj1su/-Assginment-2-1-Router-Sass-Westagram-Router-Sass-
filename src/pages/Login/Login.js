import React from "react";
import "../Login/Login.css"



const loginWrap = () => {
    return(
<>
   <div class="content">
    
        <div class="content_head">
            <span>westagram</span>
        </div>
 
        <div class="content_center">
            <div class="center_body">
                <input class = "center_id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                <input class = "center_pw" type="password" placeholder="비밀번호" />
            </div>
                <button class="center_login" disabled="true">로그인</button>
        </div>

     
        <div class="content_foot">
            <a href="">비밀번호를 잊으셨나요?</a>
        </div>
    </div>
</>
    );
};

export default loginWrap;