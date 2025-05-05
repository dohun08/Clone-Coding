import {faq} from "./data.ts";
import {styled} from "styled-components";

export default function Faq(){
    return(
        <FAQ>
            <div><h1 style={{fontSize:"32px"}}>FAQ</h1></div>
            {faq.map(item=>{
                return(
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                )
            })}
        </FAQ>
    )
}


export const FAQ = styled.section`
    width: 100%;
    color: white;
    font-size: 16px;
    & > div{
        width: 100%;
        padding:20px 4%;
        flex: 1 0 0;
        box-shadow: 0 0.02rem 0.02rem #8c8c8c;   
    }
    & > div > h3{
        color: white;
        font-size: 18px;
        font-weight: 550;
        line-height: 40px;
    }
    & > div > p{
        width: 75%;
        color: #8c8c8c;
        line-height: 24px;
        font-size: 16px;
    }
    
`