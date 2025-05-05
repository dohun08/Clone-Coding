import * as S from "./style.ts";
import {useState} from "react";

export default function Brands(){
    const [isHover, setIsHover] = useState([
        false,
        false,
        false,
        false,
        false,
        false
    ]);
    return(
        <S.Section6>
            <div>
                <h2>Websites that stand<br/> out start in Framer</h2>
            </div>
            <S.VideoSection>
                <S.VideoBox style={{ gridColumn: '1 / 2' }}>
                    <S.Example onMouseLeave={()=>setIsHover([false, false, false, false, false, false])} onMouseEnter={()=>setIsHover([true, false, false, false, false, false])} color={"#1400ff"} >
                        {isHover[0] &&<S.DarkBox />}
                        <video autoPlay muted width={'100%'} height={'100%'} src={'https://framerusercontent.com/assets/7pjjHThDJ0d7FSLOtDrTA4pRXEc.mp4'} />
                    </S.Example>
                    <S.Example onMouseLeave={()=>setIsHover([false, false, false, false, false, false])} onMouseEnter={()=>setIsHover([false, true, false, false, false, false])} color={"#ff82ff"}>
                        {isHover[1] && <S.DarkBox />}
                        <video width={'100%'} height={'100%'} muted autoPlay src={'https://framerusercontent.com/assets/qg3ySEAIvRVlkcoI94zHjE57Rk.mp4'} />
                    </S.Example>
                    <S.Example onMouseLeave={()=>setIsHover([false, false, false, false, false, false])} onMouseEnter={()=>setIsHover([false, false, true, false, false, false])} color={"#00adc1"}>
                        {isHover[2] && <S.DarkBox />}
                        <video width={'100%'} height={'100%'} muted autoPlay src={'https://framerusercontent.com/assets/Cw4grH0hI3nRYQLiC53MUuRL0.mp4'} />
                    </S.Example>
                </S.VideoBox>
                <S.VideoBox style={{ gridColumn: '2 / 3' }}>
                    <S.Example
                        onMouseEnter={()=>setIsHover([false, false, false, true, false, false])}
                        color={'#ff0000'}
                        onMouseLeave={()=>setIsHover([false, false, false, false, false, false])}
                    >
                        {isHover[3] && <S.DarkBox />}
                        <video height={'100%'} src={'https://framerusercontent.com/assets/uqb7Jrt9Ipm0RSjVjEVD8boQ5s.mp4'} autoPlay muted width={'100%'} />
                    </S.Example>
                </S.VideoBox>
                <S.VideoBox style={{ gridColumn: '1 / 3' }}>
                    <S.Example onMouseLeave={()=>setIsHover([false, false, false, false, false, false])} onMouseEnter={()=>setIsHover([false, false, false, false, true, false])} color={"#a8fc00"}>
                        {isHover[4] && <S.DarkBox />}
                        <video height={'100%'} src={'https://framerusercontent.com/assets/LzP7kaWtEH5iEWLmFk0w7mQ9oJw.mp4'} autoPlay muted width={'100%'} />
                    </S.Example>
                    <S.Example onMouseLeave={()=>setIsHover([false, false, false, false, false, false])} onMouseEnter={()=>setIsHover([false, false, false, false, false, true])} color={'#ef8400'}>
                        {isHover[5] && <S.DarkBox />}
                        <video height={'100%'} src={'https://framerusercontent.com/assets/6lIeCq70Ms7a34UU3ZOrrZrBSQg.mp4'} autoPlay muted width={'100%'} />
                    </S.Example>
                </S.VideoBox>
            </S.VideoSection>
            <h4>View hundreds of sites &gt;</h4>
        </S.Section6>
    )
}