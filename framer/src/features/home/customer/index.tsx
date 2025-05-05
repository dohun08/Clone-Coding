import Brand from "../../../assets/home/brand.png";
import {useState} from "react";
import {keyframes, styled} from "styled-components";
import {Section2} from "../../../pages/home/style.ts";

export default function Customer(){
    const [hover, setHover] = useState<boolean>(false);
    return(

        <Section3
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        >
            <BrandImg
                src={Brand} alt={''}
            />
            {hover &&  <Black>
                <a href={''}>Meet our customers </a>
            </Black>
            }

        </Section3>
    )
}

export const Section3 = styled(Section2)`
    margin: 600px 0 300px 0;
    width: 50%;
    height: 50%;
    position: relative;
    background-image: none;
`

export const BrandImg = styled.img`
    width: 120%;
`
const show = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
export const Black = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 100%;
    background-color: rgb(0,0,0,0.7);
    backdrop-filter: blur(2px) saturate(160%) brightness(180%) blur(2px);
    animation: ${show} 0.3s ease-in-out forwards;
    & > a{
        color: white;
        text-decoration-line: none;
    }
    & > a:hover{
        color: #6d6d6a;
        transition: 0.3s;
    }
`