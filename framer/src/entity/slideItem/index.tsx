import {styled} from "styled-components";
interface Slide{
    img : string
    p1 : string
    p2 : string
    color : string | undefined,
    text : string
}
export default function SlideItem({img, p1, p2, text, color} : Slide){
    return (
        <Container>
            <div>
                <img src={img} alt={''}/>
            </div>
            <p>{p1}</p>
            <p>{p2}</p>
            <Gradation color={color}>
                <p>{text}</p>
            </Gradation>
        </Container>
    )
}


export const Container = styled.div`
    display: flex;
    position: relative;
    align-items: flex-start;
    padding: 10px;
    gap: 4px;
    width: 260px;
    justify-content: center;
    flex-direction: column;
    transition: 0.2s;
    cursor: pointer;
    flex-shrink: 0;
    & > div{
        width: 100%;
        height: 195px;
        overflow: hidden;
        border-radius: 10px;
    }
    & > div > img{
        width: 100%;
        height: 100%;
        object-fit: cover; 
        display: block;
    }
    & > p:nth-child(2){
        margin: 0 4px;
        color: white;
        font-size: 16px;
        font-weight: 500;
    }
    & > p:nth-child(3){
        margin: 0 4px;
        color: #8c8c8c;
        font-size: 14px;
        font-weight: 500;
    }
    &:hover{
        filter: brightness(0.6);
    }
`
const Gradation = styled.div`
    width: 100%;
    height: 100%;
    padding:  6% 8%;
    color: white;
    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,${props => props.color} 95%, ${props => props.color} 100%);
    position: absolute;
    top: 4%;
    left: 3.5%;
    & > p{
        font-size: 38px;
        font-weight: 600;
    }
`