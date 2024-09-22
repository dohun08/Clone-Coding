import styled, { keyframes } from "styled-components";
import {useState} from "react"
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
                <div>
                    <p>{props.title}</p>
                    <p>{props.description}</p>
                    <p>{props.date}</p>
                    <p>{props.name}</p>
                </div> 
        </Boxs>
    )
}
export default Box;
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
    height: 370px;
    background-color: red;
    margin-bottom: 30px;
    cursor: pointer;
    animation: ${(props) => (props.hovered ? moveUp : moveDown)} 0.5s ease-in-out forwards;
`