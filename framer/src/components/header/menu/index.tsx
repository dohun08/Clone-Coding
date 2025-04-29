import styled, {keyframes} from "styled-components";

export default function Menu() {
    return(
        <Container>
            <MenuBox>
                <img src={''}/>
                <TextBox>
                    <strong>dddd</strong>
                    <p>dddd</p>
                </TextBox>
            </MenuBox>
        </Container>
    )
}
const show = keyframes`
    0%{
        top: 110%;
        opacity: 0.5;
    }
    100%{
        top: 120%;
        opacity: 1;
    }
`

const Container = styled.div`
    position: absolute;
    backdrop-filter: blur(5px) saturate(180%) brightness(150%) blur(10px);
    background-color: #0C0C0C;
    top: 120%;
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
    padding: 10px 0;
`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    & > strong{
        font-size: 1.2rem;
    }
    & > p{
        font-size: 0.9rem;
    }
`