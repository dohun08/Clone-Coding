import styled, {keyframes} from "styled-components";
import type {Menu} from "../index.tsx";

export default function Menu({menu}:
{
    menu: Menu[],
}) {
    return(
        <Container>
            {
                menu.map(item=>{
                    return (
                        <MenuBox>
                            <ImgBox>
                                <img src={''}/>
                            </ImgBox>
                            <TextBox>
                                <strong>{item.strong}</strong>
                                <p>{item.p}</p>
                            </TextBox>
                        </MenuBox>
                    )
                })
            }
        </Container>
    )
}
const show = keyframes`
    0%{
        top: 90%;
        opacity: 0.5;
    }
    100%{
        top: 100%;
        opacity: 1;
    }
`
const ImgBox = styled.div`
    width: 40px;
    height: 40px;
    background-color: red;
    border-radius: 10px;
`
const Container = styled.div`
    border-radius: 10px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: rgba(30, 30, 30, 0.95);
    backdrop-filter: blur(5px) saturate(180%) brightness(150%) blur(10px);
    -webkit-backdrop-filter: blur(20px); 
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    animation: ${show} 0.3s ease-in-out;
`
const MenuBox = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    &:hover{
        cursor: pointer;
    }
    
    &:hover > div > p{
        color: #cdcdcd;
    }
`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 130px;
    padding: 8px 10px;
    border-radius: 8px;

    & > strong {
        font-size: 1rem;
    }

    & > p {
        color: #979797;
        font-size: 0.7rem;
    }
`