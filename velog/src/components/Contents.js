import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from './Contents.ts'
import heart from '../assets/heart.svg'
import share from '../assets/share.svg'
function Contents (){
    const {id} = useParams();
    const [content , setContent] = useState([]);
    const getData = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/box?id=${id}`);
            const data = await response.json();
            setContent(data[0]);
        } catch (error) {
            console.error('Error fetching data:', error); 
        }
    };
    useEffect(()=>{
        console.log(id)
        getData(id)
    }, [])
    console.log(content)
    return(
        <>
            <S.Box>
                <S.heart>
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
                <S.img src={content.img_file}></S.img>
                <p>{content.description}</p>
            </S.section>

        </>
        
    )
}
export default Contents;