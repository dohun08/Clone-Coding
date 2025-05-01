import * as S from './style.tsx'
import type {Slide} from '../../../pages/home/home.tsx'
export default function SlideBox({span, h3, learn, webHead, video, webHeadLeft, webHeadRight} : Slide){
    return (
        <S.Section4>
            <span>{span}</span>
            <div>
                <h3 dangerouslySetInnerHTML={{ __html: h3 }}></h3>
                <S.Learn>{learn}</S.Learn>
            </div>
            <S.Website>
                <S.Wrap>
                    <S.WebHead>
                        {webHead.map(item=><img src={item} alt={''}/>) }
                    </S.WebHead>
                    {video}
                    <S.WebHeadLeft>
                        <img src={webHeadLeft} alt={''}/>
                    </S.WebHeadLeft>
                    <S.WebHeadRight>
                        <img src={webHeadRight} alt={''}/>
                    </S.WebHeadRight>
                </S.Wrap>
            </S.Website>
        </S.Section4>
    )
}