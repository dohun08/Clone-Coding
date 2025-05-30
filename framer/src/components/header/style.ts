import styled, {keyframes} from "styled-components";

export const Header = styled.header`
    width: 100vw;
    height: 100%;
    backdrop-filter: blur(5px) saturate(180%) brightness(150%) blur(10px);
    background-color: rgb(0,0,0, 0.8);
    padding: 8px 9%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > img{
        width: 110px;
    }
`
interface Props {
    isModal: boolean;
}

export const fixBox = styled.div<Props>`
    z-index: ${(props) => (props.isModal ? 3 : 9)};
    position: fixed;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
`;
export const nav = styled.nav`
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: space-between;
    width: 28%;

    & > ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        & > li {
            position: relative;
            list-style: none;
            font-size: 1rem;
            cursor: pointer;
            padding: 10px 0;
            color: rgba(255, 255, 255, 0.7);
        }
        & > li:hover {
            transition: 0.2s;
            color: #fff;
        }
    }
`
const move = keyframes`
    0% {
        opacity: 0;
    }
    80%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
export const BtnBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: ${move} 2s ease-in-out forwards;
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