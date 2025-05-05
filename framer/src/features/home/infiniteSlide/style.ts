import styled from "styled-components";
import {Section, ButtonBox} from "../../../pages/home/style.ts";

export const ButtonBoxs = styled(ButtonBox)`
`
export const Section8 = styled(Section)`
    width: 100%;
    margin: 150px 0;
    padding: 8px 9%;
    z-index: 1;
    & > div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    & > div > div{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    & > div > h2{
        color: white;
        font-size: 48px;
    }
`
export const SlideContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const SlideTrack = styled.div`
  display: flex;
    gap: 10px;
  width: 4160px;
  animation: scroll 100s linear infinite;
    @keyframes scroll {
        0% { transform: translateX(140px); }
        100% { transform: translateX(-2020px); }
    }
`;
