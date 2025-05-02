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
    width: 80%;
    
`
export const Section5 = styled(Section)`
    width: 100%;
    position: relative;
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