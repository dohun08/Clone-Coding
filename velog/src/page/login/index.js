import { useState } from 'react'
import * as S from './index'
function Login(){
    const goLogin = async ()=>{
        try{
            const response = await fetch('http://localhost:8213/login', {
                method:'POST',
                credentials: 'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email:email,
                    password:pw,
                })
            })
            const data = await response.json();
            console.log(data);
        }catch(error){
            console.log("error is ", error);
        }
    }
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    return(
        <>
            <h1>로그인 화면</h1>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email'></input>
            <input value={pw} onChange={(e)=>{setPw(e.target.value)}} type='password'></input>
            <button type='button' onClick={goLogin}>로그인하기</button>
        </>
    )
}
export default Login;