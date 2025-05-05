import {styled} from "styled-components";
import {Section} from "../../../pages/home/style.ts";


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