import styled, {keyframes} from "styled-components";

export const HeadText = styled.h1`
    font-size: 80px;
    color: white;
    height: min-content;
`
export const Container = styled.div`
    width: 100%;
    z-index: 8;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const Section = styled.section`
    padding: 8px 20px;
    margin-top: 150px;
    display: flex;
    width: 600px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    z-index: 5;
    
`
export const Section2 = styled(Section)`
    margin-top: 0;
    width: 100%;
    position: absolute;
    z-index: 3;
    top: 8%;
    background-image: url("https://framerusercontent.com/images/9b8Jj3qlXqfQRuXapOAZSFGlA.png?scale-down-to=4096");
    background-size: 120%;
    height: 140vh;
    background-position: center;
    background-repeat: no-repeat;
`
export const UnBox = styled.div`
    width: 100%;
    height: 80vh;
`
export const Section3 = styled(Section2)`
    margin: 600px 0 300px 0;
    width: 50%;
    height: 50%;
    position: relative;
    background-image: none;
`

export const Brand = styled.img`
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
export const mainImg = styled.img`
    width: 85%;
`
export const SubTextBox = styled.div`
    display: flex;
    width: 600px;
    align-items: center;
    justify-content: center;
    gap: 0 10px;
`
export const HeadBox = styled.div`
    display: flex;
    width: 600px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0 20px;
`
export const SubText = styled.p`
    font-size: 24px;
    color: #8c8c8c;
`
export const ButtonBox = styled.div`
    display: flex;
    width: 600px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 15px;
    & > button{
        all: unset;
        cursor: pointer;
        border-radius: 30px;
        padding: 8px 12px;
        transition: 0.2s;
        font-weight: 550;
    }
    & > button:nth-child(1){
        background-color: white;
        color: #000;
    }
    & > button:nth-child(1):hover{
        background-color: rgba(256, 256, 256, 0.8);
    }
    & > button:nth-child(2){
        background-color: rgba(255, 255, 255, 0.15);
        color: #fff;
    }
    & > button:nth-child(2):hover{
        transition: 0.2s;
        color: rgba(255, 255, 255, 0.66);
    }
`
export const SlideBox = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    width: 100%;
    min-width: 100%;
    gap: 0 5%;
    padding: 20px;
    align-items: center;
    -ms-overflow-style: none;  /* IE, Edge */
    scrollbar-width: none;     /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari */
    }
    & > div{
        width: 1224px;
    }

`
export const Simple = styled.h3`
    color: white;
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    margin-top: 100px;
`
export const SimpleVideo = styled.video`
    width: 90%;
`
export const Section5 = styled(Section)`
    width: 100%;
    position: relative;
`
export const Section6 = styled(Section)`
    width: 100%;
    margin-top: 300px;
    padding: 8px 9%;
    & > div{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    & > div > h2{
        color: white;
        font-size: 48px;
    }
    & > h4{
        color: white;
        cursor: pointer;
    }
    & > h4:hover{
        transition: 0.2s;
        color: #8c8c8c;
    }
`
export const VideoSection = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    grid-template-rows: auto auto;
    & > div:nth-child(1){
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        grid-template-rows: auto auto;
        & > div:nth-child(1){
            grid-column:  1/-1;
        }
        & > div:nth-child(2){
            grid-column: 1 / 2;
        }
        & > div:nth-child(3){
            grid-column: 2 / 3;
        }
    }
    & > div:nth-child(3){
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
        grid-template-rows: auto auto;
    }
    width: 100%;
`;

export const VideoBox = styled.div`
`;

export const Example = styled.div`
    width: 100%;
    display: flex;
    padding: 15px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};
    & > video{
        border-radius: 8px;
    }
    position: relative;
    cursor: pointer;
`
const hover = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`
export const Dark = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    animation: ${hover} 0.2s ease-in-out forwards;
`
export const SimpleBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 30%, rgba(0,0,0) 100%);
    position: absolute;
    width: 100%;
    bottom: 0;
`
export const SimpleLogo = styled.img`
    width: 150px;
`
export const SimpleH4 =styled.h4`
    color: white;
    font-size: 42px;
    text-align: center;
    margin: 20px 0;
`
export const SimpleButtonBox = styled.div`
    & > button{
        all: unset;
        cursor: pointer;
        border-radius: 30px;
        padding: 8px 12px;
        transition: 0.2s;
        font-weight: 550;
        text-align: center;
        margin: 0 10px;
    }
    & > button:nth-child(1){
        background-color: white;
        color: #000;
    }
    & > button:nth-child(1):hover{
        background-color: rgba(256, 256, 256, 0.8);
    }
    & > button:nth-child(2){
        background-color: rgba(255, 255, 255, 0.15);
        color: #fff;
    }
    & > button:nth-child(2):hover{
        transition: 0.2s;
        color: rgba(255, 255, 255, 0.66);
    }
`
export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    & > iframe{
        width: 90%;
        height: 90%;
    }
`
export const ModalHead = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 20px;
    top: 20px;
    & > img{
        width: 30px;
    }
`
export const Section7 = styled(Section)`
    width: 100%;
    margin: 150px 0;
    padding: 8px 9%;
    & > div{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    & > div > h2{
        color: white;
        font-size: 48px;
    }
    & > h3{
        font-weight: 500;
        color: white;
        cursor: pointer;
    }
    & > h3:hover{
        transition: 0.2s;
        color: #8c8c8c;
    }
`
export const Template = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.7rem;
    height: 55vh;
`
export const Brand2 = styled.section`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.7rem;
    color: white;
    margin-bottom: 20px;
    & > div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 4px 10px ;
        transition: 0.2s;
        cursor: pointer;
        gap: 0 10px;
        & > img{
            width: 30px;
            border-radius: 8px;
        }
        & > div > p{
            color: #8c8c8c;
        }
    }
    & > div:hover {
        filter: brightness(0.8); /* ✅ 올바른 위치 */
    }
`

export const TemplateLeft = styled.div`
    width: 100%;
`
export const TemplateBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover > img{
        transform: translateY(-10px);
    }
    & > img{
        transition: 0.2s;
        z-index: 2;
        position: absolute;
        bottom: -8%;
        right: 0;
        width: 95%;
        height: 100%;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }
`
export const TemplateFirst = styled(TemplateBox)`
    height: 100%;
`
export const TemplateRight = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 0.7rem;
    width: 100%;
`
export const Gradation = styled.div`
    width: 100%;
    height: 100%;
    padding:  6% 8%;
    color: white;
    gap: 8px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,${props => props.color} 82%, ${props => props.color} 100%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    & > img{
        width: 20px;
    }
`
export const Section8 = styled(Section)`
    width: 100%;
    margin: 150px 0;
    padding: 8px 9%;
    & > div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    & > div > div{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    & > div > h2{
        color: white;
        font-size: 48px;
    }
`
export const SlideContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const SlideTrack = styled.div`
  display: flex;
  width: calc(200%);
  animation: scroll 100s linear infinite;
    @keyframes scroll {
        0% { transform: translateX(90%); }
        100% { transform: translateX(-5%); }
  //  }
`;
