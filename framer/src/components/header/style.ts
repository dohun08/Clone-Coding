import styled from "styled-components";

export const Header = styled.header`
    width: 88vw;
    height: 100%;
    max-width: 100%;
    background-color: rgb(0,0,0,0.7);
    padding: 8px 20px;
    backdrop-filter: blur(5px) saturate(180%) brightness(150%) blur(10px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > img{
        width: 110px;
    }
`
export const fixBox = styled.div`
    position: fixed;
    left: 50%;
    top: 5%;
    transform: translate(-50%, -50%);
`
export const nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 28%;

    & > ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        position: relative;
        & > li {
            list-style: none;
            font-size: 1rem;
            cursor: pointer;
            color: rgba(255, 255, 255, 0.44);
        }
        & > li:hover {
            transition: 0.2s;
            color: #fff;
        }
    }
`
export const BtnBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > button {
        border: none;
        padding: 5px 10px;
        border-radius: 50px;
        font-size: 1rem;
        cursor: pointer;
    }
    & > button:nth-child(1) {
        background-color: transparent;
        color: rgba(255, 255, 255, 0.44);
    }
    & > button:nth-child(1):hover {
        transition: 0.2s;
        color: #fff;
    }
    & > button:nth-child(2) {
        background-color: #fff;
        color: #000;
    }
    & > button:nth-child(2):hover {
        transition: 0.2s;
        background-color: rgb(256, 256, 256, 0.7);
    }
    
`