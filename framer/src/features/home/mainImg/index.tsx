import main from "../../../assets/home/main.avif";
import {keyframes, styled} from "styled-components";
import {Section} from "../../../pages/home/style.ts";

export default function MainImg(){
    return(
        <Section2>
            <MainImgBox  src={main} alt={''} />
        </Section2>
    )
}

const move = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const MainImgBox = styled.img`
    width: 85%;
    animation: ${move} 2s ease-in-out forwards;
`
export const Section2 = styled(Section)`
    margin-top: 0;
    width: 100%;
    position: absolute;
    z-index: 3;
    top: 5%;
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url("https://framerusercontent.com/images/9b8Jj3qlXqfQRuXapOAZSFGlA.png?scale-down-to=4096");
        background-size: 120%;
        background-position: center;
        background-repeat: no-repeat;
        animation: ${move} 5s ease-in-out forwards;
        z-index: -1;
    }
    height: 140vh;
`