import {styled} from "styled-components";

export default function PricingHead(){
    return (
        <Header>
            <h1>Pricing</h1>
            <p>Use Framer for free. Upgrade to add a custom domain, access additional features, and increase limits.</p>
            <div>
                <button>Personal</button>
                <button>Business</button>
            </div>
        </Header>
    );
};


const Header = styled.header`
    background-color: rgb(0,0,0, 0.8);
    margin-top: 15vh;
    color: white;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 24px;
    gap: 10px;
    & > p{
        color: #8c8c8c;
        width: 500px;
        text-align: center;
        font-size: 20px;
        line-height: 28px;
    }
    & > div > button{
        transition: 0.2s;
        cursor: pointer;
        padding: 8px 20px;
        border-radius: 10px;
        font-size: 13px;
        border: none;
        width: 160px;
    }
    & > div > button:nth-child(1){
        background-color: black;
        border: 0.02rem solid #8c8c8c;
        color: white;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    & > div > button:nth-child(2){
        background-color: white;
        color: black;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`