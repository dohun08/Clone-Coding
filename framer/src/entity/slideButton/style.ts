import {styled} from "styled-components";

export const SlideButtonBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 14px;
    width: 85vw;
    
`
interface SlideNavProps {
    position: "center" | "left" | "flex-end";
}
export const SlideNav = styled.div<SlideNavProps>`
    align-items: center;
    justify-content: ${props => props.position};
    font-size: 14px;
    display: flex;
    width: 400px;
    gap: ${props => props.position === "flex-end" ? "0 5px" : "5px 0"};
    & > button{
        all: unset;
        cursor: pointer;
        border-radius: 30px;
        padding: 8px;
        transition: 0.2s;
        color: #8c8c8c;
    }
`
export const SlideButton = styled.button`
    && {
        all: unset;
        cursor: pointer;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:#1A1A1A;
        transition: 0.2s;
        color: white; /* 원하는 스타일 추가 */
    }
`;