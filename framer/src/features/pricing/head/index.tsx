import {keyframes, styled} from "styled-components";

export default function PricingHead(){
    return (
        <Header>
            <h1>Pricing</h1>
            <p>Use Framer for free. Upgrade to add a custom domain, access additional features, and increase limits.</p>
            <div>
                <button>
                    Personal
                </button>
                <WhiteButton />
                <button>Business</button>
            </div>
        </Header>
    );
};


const Header = styled.header`
    background-color: rgb(0, 0, 0, 0.8);
    margin-top: 15vh;
    color: white;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 24px;
    gap: 10px;

    & > p {
        color: #8c8c8c;
        width: 500px;
        text-align: center;
        font-size: 20px;
        line-height: 28px;
    }

    & > div > button {
        transition: 0.2s;
        cursor: pointer;
        padding: 8px 20px;
        border-radius: 10px;
        font-size: 13px;
        border: none;
        width: 160px;
    }
    & > div{
        overflow: hidden;
        position: relative;
        z-index: 1;
        border-radius: 10px;
    }
    & > div > button:nth-child(1) {
        overflow: hidden;
        position: relative;
        background-color: black;
        border: 0.02rem solid rgba(106, 106, 106, 0.3);
        color: white;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        z-index: 3;
    }

    & > div > button:nth-child(3) {
        background-color: white;
        color: black;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`
const borderGlow = keyframes`
    0% {
        transform: translateX(0) translateY(0) rotate(45deg);
        opacity: 0.7;
    }
    100% {
        transform: translateX(220px) translateY(140px) rotate(45deg);
        opacity: 0.4;
    }
`
const WhiteButton = styled.div`
    position: absolute;
    top: -117px;
    overflow: hidden;
    bottom: 23px;
    left: -102px;
    background: linear-gradient(270deg,#fff0 15.66356981981982%,#fff 51.82939189189189%,#fff0 86.33516328828829%);
    filter: blur(2px);
    transform: rotate(-40deg);
    animation: ${borderGlow} 2s linear infinite;
    width:124px;
    height: 130px;
    z-index: 2;
`
