import {styled} from "styled-components";
import {Dark, Section} from "../../../pages/home/style.ts";
export const DarkBox = styled(Dark)``
export const Section7 = styled(Section)`
    width: 100%;
    margin: 150px 0;
    z-index: 1;
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