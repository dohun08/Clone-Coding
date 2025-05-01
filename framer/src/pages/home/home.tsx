import Layout from "../../layout";
import * as S from './style.ts'
import main from '../../assets/home/main.avif'
import Brand from '../../assets/home/brand.png'
import {JSX, useState} from "react";
import SlideBox from "../../components/home/slidebox";
import {slide as SlideData} from "./data.tsx";
export interface Slide {
    id : number,
    span: string;
    h3: string;
    learn: string;
    webHead: string[];
    video: JSX.Element;
    webHeadLeft: string;
    webHeadRight: string;
}

function Home() {
    const [hover, setHover] = useState<boolean>(false);
    const slide =SlideData
    // const [current, setCurrent] = useState(0);

    // const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    // const prevSlide = () =>
    //     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  return (
    <Layout>
        <S.Container>
            <S.Section>
                <S.HeadBox>
                    <S.HeadText>Just</S.HeadText>
                    <S.HeadText>publish</S.HeadText>
                    <S.HeadText>it</S.HeadText>
                    <S.HeadText>with</S.HeadText>
                    <S.HeadText>Framer</S.HeadText>
                </S.HeadBox>
                <S.SubTextBox>
                    <S.SubText>The</S.SubText>
                    <S.SubText>website</S.SubText>
                    <S.SubText>builder</S.SubText>
                    <S.SubText>loved</S.SubText>
                    <S.SubText>by</S.SubText>
                    <S.SubText>designers.</S.SubText>
                </S.SubTextBox>
                <S.ButtonBox>
                    <button>Start for free</button>
                    <button>Watch video</button>
                </S.ButtonBox>
            </S.Section>
            <S.Section2>
                <S.mainImg src={main} alt={''} />
            </S.Section2>
            <S.Section3
                onMouseEnter={()=>setHover(true)}
                onMouseLeave={()=>setHover(false)}
            >
                <S.Brand
                    src={Brand} alt={''}
                />
                {hover &&  <S.Black>
                    <a href={''}>Meet our customers </a>
                </S.Black>
                }

            </S.Section3>
            <S.SlideBox>
                {slide.map((item) => (
                    <SlideBox key={item.id} id={item.id} span={item.span} h3={item.h3} learn={item.learn} webHead={item.webHead} video={item.video} webHeadLeft={item.webHeadLeft} webHeadRight={item.webHeadRight} />
                ))}
            </S.SlideBox>
        </S.Container>
    </Layout>
  )
}

export default Home