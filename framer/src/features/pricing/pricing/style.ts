import {keyframes, styled} from "styled-components";


interface PricingUlProps {
    isBlock: boolean
    isStop? : boolean
}
export const UnBox = styled.div<PricingUlProps>`
    width: 100%;
    height: ${props=>props.isBlock ? "344px" : "0"};
`
export const PricingBox = styled.section<PricingUlProps>`
    position: ${props=>props.isBlock ? "relative" : props.isStop ? "absolute" : "fixed"};
    ${props=>props.isStop ? "top:2910px" : "top: 2%"};
    z-index: 30;
    width: ${props=>props.isBlock ? "100%" : props.isStop ? "71%" : "70%"};
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    & > div:nth-child(1){
        background:
                radial-gradient(
                        100% 100% at 0% 100%,
                        rgba(85, 0, 255, 0.5) 0%,
                        rgba(0, 3, 15, 0) 100%
                ),
                black;    }
    & > div:nth-child(1) > button{
        background-color: rgb(102, 0, 255);
    }
`
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

export const Pricing = styled.div<{duration: number}>`
    width: 40%;
    color: white;
    background-color: black;
    transition: 0.5s;
    flex-direction: column;
    transform-origin : 50% 50% 0px;
    flex: 1 0 0px;
    padding: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: 16px;
    box-shadow: rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset;
    gap: 20px;
    animation: ${move} ${(props) => (props.duration)}s ease-in-out forwards;
`

export const PricingUl = styled.ul<PricingUlProps>`
    list-style: none;
    transition: 0.3s;
    gap: 10px;
    display: flex;
    height: ${props => (props.isBlock ? "100px" : "0")};
    opacity: ${props => (props.isBlock ? "1" : "0")};
    overflow: hidden;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    & > li > img{
        width: 20px;
        margin: 4px 16px 4px 0;
    }
    & > li{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: white;
    }
`

export const Extra = styled.div`
    --border-bottom-width: 1px;
  --border-color: rgba(255, 255, 255, 0.1);
  --border-left-width: 1px;
  --border-right-width: 1px;
  --border-style: solid;
  --border-top-width: 1px;
    text-align: center;
    font-size: 10px;
    padding: 4px 8px;
  background-color: rgb(102, 0, 255);
  border-radius: 100px;
  box-shadow: rgba(102, 0, 255, 0.5) 0px 5px 15px 0px;
  transform: none;
  opacity: 1;
`
export const PricingHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    & > div{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    & > p{
        font-size: 10px;
        color: #8c8c8c;
    }
`
export const PricingContent = styled.div`
    width: 200px;
    & > p{
        color: #8c8c8c;
        line-height: 32px;
        font-size: 20px;
    }
    & > p>  span{
        color: white;
        font-weight: 550;
    }
`
export const PricingButton = styled.button`
    border: none;
    width: 100%;
    padding: 8px 12px;
    color: white;
    background-color: rgb(51, 51, 51);
    cursor: pointer;
    text-align: center;
    border-radius: 8px;
    transition: 0.2s;
    &:hover{
        filter: saturate(70%);
    }
    
`