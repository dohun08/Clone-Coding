import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from './Contents.ts'
import heart from '../assets/heart.svg'
import share from '../assets/share.svg'
function Contents (){
    const {id} = useParams();
    const [content , setContent] = useState([]);
    const [tag, setTag] = useState([""]);
    const getData = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/box?id=${id}`);
            const data = await response.json();
            setContent(data[0]);
            if (data[0]?.tag) {
                setTag([...tag, ...data[0].tag]);
            }
        } catch (error) {
            console.error('Error fetching data:', error); 
        }
    };
    useEffect(()=>{
        console.log(id)
        getData(id)
        
    }, [])
    
    const upHeart  = async ()=>{
        try{
            const response = await fetch(`http://localhost:3001/box/${id}`, {
                method:'PUT',
                headers:{
                    "Content-Type":"application-json"
                },
                body:JSON.stringify({
                    ...content,
                    like:content.like+1
                })
            })
            if (response.ok) {
                const updatedData = await response.json();
                setContent(updatedData);
            } else {
                console.error("데이터 업데이트 실패");
            }
        }catch(error){
            console.log(error)
        }
    }
    const changeNewLine = (text) =>{
        return text.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ));
    }
    return(
        <>
            <S.Box>
                <S.heart onClick={upHeart}>
                    <img src={heart} alt="" />
                </S.heart>
                {content.like}
                <S.share>
                    <img src={share} alt="" />
                </S.share>
            </S.Box>
            <S.section>
                <S.title>{content.title}</S.title>
                <S.data>
                    <S.userData>
                        <S.user>{content.user_name}</S.user>
                        <S.date>{content.date}</S.date>
                    </S.userData>
                    
                    <S.follow>팔로우</S.follow>
                </S.data>
                <S.tagBox>
                {tag.length > 0 && tag.map((item, index) => (
                    index !== 0 && <S.tagOut key={index}>{item}</S.tagOut>
                ))}

                </S.tagBox>
               
                <S.img src={content.img_file}></S.img>
                <p> {content && content.description ? changeNewLine(content.description) : "Loading..."}</p>
            </S.section>

        </>
        
    )
}
export default Contents;