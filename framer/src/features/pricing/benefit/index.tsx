import * as S from "./style.ts";
import Publish from "../../../assets/pricing/publish.svg";
import Check from "../../../assets/pricing/check.svg";
import {benefits} from "./data.ts";
import {useRef} from "react";

export default function Benefit(){
    const duration = useRef(0.9);
    return (
        <S.benefit>
            {benefits.map((item)=>{
                return(
                    <>
                        <S.benefitTitle duration={duration.current}>
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
                                        duration.current += 0.02
                                        if(value[0].slice(0,3) === 'XXX'){
                                            value[0] = value[0].slice(3);
                                            return(
                                                <S.benefitli duration={duration.current}>
                                                    <li style={{filter:"brightness(30%)"}}>{value[0]}&nbsp;<span>{value.slice(1).join(" ")}</span></li>
                                                </S.benefitli>
                                            )
                                        }
                                        return(
                                            <S.benefitli duration={duration.current}>
                                                <img src={Check} alt={'check'} />
                                                <p>{value[0]}&nbsp;<span>{value.slice(1).join(" ")}</span></p>
                                            </S.benefitli>
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