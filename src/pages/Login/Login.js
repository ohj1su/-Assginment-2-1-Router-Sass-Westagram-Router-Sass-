import React from "react";
import "../Login/Login.css";
import {useNavigate} from "react-router-dom";



const Login = () => {
    const navigate =useNavigate();

    const goToMain =() => {
        navigate('/Main');
    };
    
    return(
<>
   <div class="content">
    
        <div class="content_head">
            <span>westagram</span>
        </div>
 
        <div class="content_center">
            <div class="center_body">
                <input className = "center_id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                <input className = "center_pw" type="password" placeholder="비밀번호" />
            </div>
                <button className ="center_login" onClick={goToMain}>로그인</button>
        </div>

     
        <div class="content_foot">
            <a href="#none">비밀번호를 잊으셨나요?</a>
        </div>
    </div>
</>
      );
};


export default Login;