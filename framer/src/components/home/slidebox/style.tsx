import {styled} from "styled-components";
import {Section2} from "../../../pages/home/style.ts";

export const Section4 = styled(Section2)`
    width: 85vw;
    margin: 0 auto;
    padding: 30px 60px;
    gap: 4px;
    height: 88vh;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 20px;
    border: 0.01rem solid rgba(60, 60, 60, 0.63);
    position: relative;
    flex: 0 0 auto;
    box-sizing: border-box;
    overflow: hidden;
    
    & > span{
        color: #8c8c8c;
        font-size: 1rem;
    }
    & > div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: white;
        align-items: center;
    }
    & > div > h3:nth-child(1){
        font-size: 1.4rem;
    }
`
export const Website = styled.div`
   position: absolute;
    top: 20%;
    left: 54%;
    transform: translate(-50%, 0);
`
export const Wrap = styled.div`
    display: flex;
    border: 2px solid rgba(60, 60, 60, 0.63);
    padding: 0 10px;
    width:92%;
    min-width: 1000px;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    position: relative;
    & > video{
        cursor: auto;
        width: 70%;
        max-height: max-content;
        display: block;
        object-fit: cover;
        background-color: rgb(29, 29, 29);
        object-position: 50% 50%;
    }
`
export const WebHeadLeft = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 20%;
    height: 100%;
    background-color: black;
    & > img{
        width: 100%;
    }
`
export const WebHeadRight = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    width: 20%;
    height: 100%;
    background-color: black;
    & > img{
        width: 100%;
    }
`
export const WebHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > img{
        width: 30%;
    }
`
export const Learn = styled.h3`
    color: #8c8c8c;
`