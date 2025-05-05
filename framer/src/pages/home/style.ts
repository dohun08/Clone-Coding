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
    top: 5%;
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