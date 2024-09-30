import { useState } from "react";
import * as S from './Write.ts'
import LeftSvg from '../assets/leftArrow.svg'
function Write(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const days = new Date()
    const year = days.getFullYear()
    const Month = days.getMonth()
    const date = days.getDate()
    console.log(year)
    const checkData = ()=>{
        if(title === "") alert("제목이 비어있습니다.")
        else if(content ==="") alert("내용이 비어있습니다.")
        else Create()
    }
    const Create = async ()=>{
        try{
            const response = await fetch('http://localhost:3001/box', {
                method:"POST",
                headers:{
                    'Content-Type':"application/json",
                },
                body: JSON.stringify({
                    user_name:"dehgns12",
                    title:title,
                    img_file : "/img/img1.png", 
                    description:content,
                    date:`${year}-${Month+1}-${date}`,
                    like:0
                })
            })
            if (response.ok) {
                const data = await response.json();
                console.log('성공:', data);
            }
        }catch(error){
            console.log("error : ", error);
        }
    }

    const [tag, setTag] = useState([""]);
    const [showTag, setShowTag] = useState([]);
    const enterTag = (e)=>{
        if(e.keyCode == 13){
            setShowTag([...showTag, e.target.value]);
            setTag("");
        }
        
    }
    return(
        <S.container className="container">
            <S.GlobalStyle />
            <S.form>
                <S.title placeholder="제목을 입력해주세요" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                <S.bar></S.bar>
                {showTag.length > 0 &&
                 showTag.map((item, index) => (
                    <p key={index}>{item}</p>  // 각 item을 p 태그로 출력
                  ))
                }
                <S.tag type="text" placeholder="태그를 입력해주세요" value={tag} onChange={(e)=>setTag(e.target.value)} onKeyDown={(e)=>enterTag(e)}/>
                <S.buttonBox>
                    <button>ddd</button>
                    <button>ddd</button>
                    <button>ddd</button>
                    <button>ddd</button>
                    <button>ddd</button>
                    <button>ddd</button>
                </S.buttonBox>
                <S.content placeholder="당신의 이야기를 적어보세요..." type="text" value={content} onChange={(e) =>setContent(e.target.value)} />
                <S.footer>
                <a  href="/"><S.exit><img src = {LeftSvg} />나가기</S.exit></a>
                <a href="/"><S.submit type="button" onClick={checkData}>출간하기</S.submit></a>
                </S.footer>
                
            </S.form>
        </S.container>
    )
}
export default Write;

