import styled, { keyframes } from "styled-components";
import {useState} from "react"
import likeSrc from '../assets/heart.svg'
function Box(props){
    const [hovered, setHovered] = useState(false);
    return(
        <Boxs 
            key={props.key}
            hovered={hovered} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
   
                <ImgBox src={props.img} alt="title이미지" />
                <Content>
                    <Main>
                        <Title>{props.title}</Title>
                        <Des>{props.description}</Des>
                    </Main> 
                    <Date>{props.date}</Date>
                    <User>
                        <p>{props.name}</p>
                        <LikeBox>
                            <img src={likeSrc}  alt="like"/>
                            <p>{props.like}</p>
                        </LikeBox>
                    </User>
                </Content>
        </Boxs>
    )
}
export default Box;
const User = styled.div`
    border-top: 1px solid black;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
`
const Date = styled.p`
    padding: 10px 0;
    font-size: 12px;
    color: gray;
`
const Main = styled.div`
    padding-bottom:60px;
    &>h3{
        padding-bottom:10px;
    }
`
const Des = styled.p`
    color: gray;
    font-size: 14px;
`
const Content = styled.div`
    padding: 10px 20px;
`
const Title = styled.h3`
    font-size: 20px;
    font-weight: 700;
`
const LikeBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    &>img{
        width:20px;
    }
`
const ImgBox = styled.img`
    width: 100%;
    height: 170px;
`
const moveUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
`;
const moveDown = keyframes`
    from{
        transform: translateY(-10px);
    }
    to{
        transform: translateY(0);
    }
`
const Boxs = styled.div.withConfig({
    shouldForwardProp: (prop) => !['hovered'].includes(prop)
  })`
    width: 320px;
    height: 380px;
    background-color: white;
    margin-bottom: 30px;
    cursor: pointer;
    animation: ${(props) => (props.hovered ? moveUp : moveDown)} 0.5s ease-in-out forwards;
`