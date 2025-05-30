import {styled} from "styled-components";


export const SlideBox = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    width: 100vw;
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
        gap: 2vw;
        width: 1224px;
    }

`