import * as S from "./style.ts";
import {slides} from "./data.ts";
import SlideItem from "../../../entity/slideItem";

export default function InfiniteSlide(){
    return(
        <S.Section8>
            <div>
                <h2>Find a Pro</h2>
                <S.ButtonBoxs>
                    <button>Browse experts</button>
                    <button>Get matched</button>
                </S.ButtonBoxs>
            </div>
            <S.SlideContainer>
                <S.SlideTrack>
                    {[...slides, ...slides].map((item, idx) => (
                        <SlideItem key={`${item.id}-${idx}`} text={item.text} color={item.color}  img={item.img} p1={item.p1} p2={item.p2}></SlideItem>
                    ))}
                </S.SlideTrack>
            </S.SlideContainer>
        </S.Section8>
    )
}