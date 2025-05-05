import * as S from "./style.ts";
import Publish from "../../../assets/pricing/publish.svg";
import Check from "../../../assets/pricing/check.svg";
import {benefits} from "./data.ts";

export default function Benefit(){
    return (
        <S.benefit>
            {benefits.map((item)=>{
                return(
                    <>
                        <S.benefitTitle>
                            <div>
                                <img src={Publish} alt={''} />
                                <span>{item.title}</span>
                            </div>
                        </S.benefitTitle>
                        {item.content.map(item2=>{
                            return(
                                <div>
                                    {item2.map(item3=>{
                                        const value = item3.split(" ");
                                        if(value[0].slice(0,3) === 'XXX'){
                                            value[0] = value[0].slice(3);
                                            return(
                                                <div>
                                                    <li style={{filter:"brightness(30%)"}}>{value[0]}&nbsp;<span>{value.slice(1).join(" ")}</span></li>
                                                </div>
                                            )
                                        }
                                        return(
                                            <div>
                                                <img src={Check} alt={'check'} />
                                                <p>{value[0]}&nbsp;<span>{value.slice(1).join(" ")}</span></p>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </>
                )
            })}
        </S.benefit>
    )
}