import {styled} from "styled-components";
import {Section, Dark} from "../../../pages/home/style.ts";

export const DarkBox = styled(Dark)``
export const Section6 = styled(Section)`
    width: 100%;
    margin-top: 300px;
    padding: 8px 9%;
    z-index: 1;
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
