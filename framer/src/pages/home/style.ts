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
    
`
export const Section2 = styled(Section)`
    margin-top: 0;
`
export const Section3 = styled(Section2)`
    margin: 200px 0;
    position: relative;
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
    width: 85vw;
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
    overflow-x: auto;
    width: 100%;
    gap: 0 5%;
    padding: 20px;
    align-items: center;
    -ms-overflow-style: none;  /* IE, Edge */
    scrollbar-width: none;     /* Firefox */
    overflow-y: hidden;
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari */
    }

`