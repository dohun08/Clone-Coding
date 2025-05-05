import {keyframes, styled} from "styled-components";
const move = keyframes`
    0% {
        opacity: 0;
        transform: translateY(15px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

export const benefit = styled.div`
    width: 100%;
    color: white;
    margin-bottom: 50px;
    font-size: 16px;
    & > div{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding:20px 4%;
        flex: 1 0 0;
        box-shadow: 0 0.02rem 0.02rem #8c8c8c;
    }
    & > div > div{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 14px;
    }
    & > div > div > p > span{
        color: #8c8c8c;
    }
    & > div > div > img{
        width: 16px;
    }
`
export const benefitTitle = styled.div<{duration: number}>`
    animation: ${move} ${(props) => props.duration}s ease-in-out forwards;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    font-size: 24px;
    gap: 10px;
    & > img{
        width: 10px;
    }
`
export const benefitli = styled.div<{duration : number}>`
    animation: ${move} ${(props) => props.duration}s ease-in-out forwards;

`