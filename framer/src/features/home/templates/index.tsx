import * as S from "./style.ts";
import {brand2} from "./data.ts";
import {useState} from "react";

export default function Templates() {

    const [isHover2, setIsHover2] = useState([
        false,
        false,
        false,
        false,
        false,
    ]);
    return (
        <S.Section7>
            <div>
                <h2>Start with a Template,<br/> level-up with Plugins</h2>
            </div>
            <S.Template>
                <S.TemplateLeft>
                    <S.TemplateFirst
                        onMouseEnter={()=>setIsHover2([true, false, false, false, false])}
                        color={"#6000ff"}
                        onMouseLeave={()=>setIsHover2([false, false, false, false, false])}
                    >
                        <img src={"https://framerusercontent.com/images/WB0Fct3qem5hAqyXzPEYJWcHj8.png"} alt={"template1"} />
                        <S.Gradation color={"rgb(96,0,255)"}>
                            <img src={"/home/001.svg"} alt={''} />
                            Start up
                        </S.Gradation>
                        {isHover2[0] &&<S.DarkBox />}
                    </S.TemplateFirst>
                </S.TemplateLeft>
                <S.TemplateRight>
                    <S.TemplateBox
                        onMouseEnter={()=>setIsHover2([false, true, false, false, false])}
                        onMouseLeave={()=>setIsHover2([false, false, false, false, false])}
                        color={"#0007ff"}
                    >
                        <img src={"https://framerusercontent.com/images/g13FxfejBRodQeaaSaMLJskQQqg.png?scale-down-to=512"} alt={"template2"} />
                        <S.Gradation color={"rgb(0,7,255)"}>
                            <img src={"/home/002.svg"} alt={''} />
                            Agency
                        </S.Gradation>
                        {isHover2[1] &&<S.DarkBox />}
                    </S.TemplateBox>
                    <S.TemplateBox
                        onMouseEnter={()=>setIsHover2([false, false, true, false, false])}
                        onMouseLeave={()=>setIsHover2([false, false, false, false, false])}
                        color={"#ff9e00"}
                    >
                        <img src={"https://framerusercontent.com/images/aup14sk4YAbibJJS7qCJOi0zbXc.png"} alt={"template3"} />
                        <S.Gradation color={"rgb(255,158,0)"}>
                            <img src={"/home/003.svg"} alt={''} />
                            Business
                        </S.Gradation>
                        {isHover2[2] &&<S.DarkBox />}
                    </S.TemplateBox>
                    <S.TemplateBox
                        onMouseEnter={()=>setIsHover2([false, false, false, true, false])}
                        onMouseLeave={()=>setIsHover2([false, false, false, false, false])}
                        color={"#bcd100"}
                    >
                        <img src={"https://framerusercontent.com/images/UepsmxH0XjzJ1Hk5FSXOQUwKhg.png"} alt={"template4"} />
                        <S.Gradation color={"rgb(188,209,0)"}>
                            <img src={"/home/004.svg"} alt={''} />
                            Portfolio
                        </S.Gradation>
                        {isHover2[3] &&<S.DarkBox />}
                    </S.TemplateBox>
                    <S.TemplateBox
                        color={"#ff4205"}
                        onMouseEnter={()=>setIsHover2([false, false, false, false, true])}
                        onMouseLeave={()=>setIsHover2([false, false, false, false, false])}
                    >
                        <img src={"https://framerusercontent.com/images/OdfVIl8irDHTAEuIVKw8YbNjsHM.png"} alt={"template5"} />
                        <S.Gradation color={"rgb(255,66,5)"}>
                            <img src={"/home/005.svg"} alt={''} />
                            SaaS
                        </S.Gradation>
                        {isHover2[4] &&<S.DarkBox />}
                    </S.TemplateBox>
                </S.TemplateRight>
            </S.Template>
            <S.Brand2>
                {brand2.map(item=>{
                    return(
                        <div key={item.id}>
                            <img src={item.img} alt={''} />
                            <div>
                                <strong>{item.strong}</strong>
                                <p>{item.p}</p>
                            </div>
                        </div>
                    )
                })}
            </S.Brand2>
            <h3>Browse the Marketplace &gt;</h3>
        </S.Section7>
    )
}