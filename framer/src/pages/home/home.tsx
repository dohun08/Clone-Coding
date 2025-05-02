import Layout from "../../layout";
import * as S from './style.ts'
import main from '../../assets/home/main.avif'
import Brand from '../../assets/home/brand.png'
import {JSX, useEffect, useRef, useState} from "react";
import {useThrottle} from "../../hooks/useThrottle";
import SlideBox from "../../components/home/slidebox";
import {slide as SlideData} from "./data.tsx";
import SlideButtonBox from "../../components/home/slideButton/index.tsx";
import SimpleLogo from '../../assets/home/simpleLogo.png'
import X from '../../assets/home/x.png'

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
    const [index, setIndex] = useState(0);
    const [isAnimation, setIsAnimation] = useState(false);


    useEffect(() => {
        const interval = setInterval(()=>{
            if(index === 0){
                setIsAnimation(true);
            }
            setIndex((prevIndex) => {
                return (prevIndex + 1) % slide.length;
            });
        }, 4000);
        return () => clearInterval(interval);
    }, [index]);

    useEffect(() => {
        setTimeout(()=>{
            if(index === 5) setIndex(-1);
            if(index === -2) setIndex(4);
        }, 600);
    }, [index]);

    const nextSlide = useThrottle(() => {
        setIndex((prevIndex) => {
            return (prevIndex + 1) % slide.length;
        });
    }, 700);

    const prevSlide = useThrottle(() => {
        setIndex((prevIndex) => {
            if(prevIndex === -1) return 4;
            return (prevIndex - 1) % slide.length
        });
    }, 700);

    const animation = () =>{
        if(isAnimation){
            setTimeout(()=>{
                setIsAnimation(false);
            }, 100)
            return 0.5;
        }
        return index === -1 || index === 6 ? 0 : 0.5
    }

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && videoRef.current) {
                    videoRef.current.play().catch(err => {
                        console.error("Autoplay failed:", err);
                    });
                } else if (videoRef.current) {
                    videoRef.current.pause();
                }
            },
            { threshold: 0.5 } // 절반 이상 보일 때만 재생
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) observer.unobserve(videoRef.current);
        };
    }, []);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isHover, setIsHover] = useState([
        false,
        false,
        false,
        false,
        false,
        false
    ]);
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
            <S.UnBox />
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
            <S.SlideBox >
                <div
                    style={{
                        transition: `${animation()}s ease-in-out`,
                       display: "flex",
                       transform: `translateX(${index === -1 ? 7.5 : -(index*100 + 92.5)}%)`,
                   }}
                >
                    {slide.map((item) => (
                        <SlideBox key={item.id} id={item.id} span={item.span} h3={item.h3} learn={item.learn} webHead={item.webHead} video={item.video} webHeadLeft={item.webHeadLeft} webHeadRight={item.webHeadRight} />
                    ))}
                </div>
            </S.SlideBox>
            <SlideButtonBox prevSlide={prevSlide} nextSlide={nextSlide} index={index} />
            <S.Section5>
                <S.Simple>
                    Simple to learn,<br/> easy to master
                </S.Simple>
                <S.SimpleVideo
                    ref={videoRef}
                    muted
                    playsInline
                    src={"https://framerusercontent.com/assets/qbUrBrBarjUBmUkk2DQzW1fSgA.mp4"}
                />
                <S.SimpleBox>
                    <S.SimpleLogo src={SimpleLogo} alt={'logo'}/>
                    <S.SimpleH4>Master the<br/> Fundamentals</S.SimpleH4>
                    <S.SimpleButtonBox>
                        <button>Start Fundamentals</button>
                        <button onClick={()=>setIsModalOpen(true)}>Watch introduction</button>
                    </S.SimpleButtonBox>
                </S.SimpleBox>
                {isModalOpen &&
                    <S.Modal>
                        <S.ModalHead onClick={()=>setIsModalOpen(false)}>
                            <img src={X} alt={'modal close'} />
                        </S.ModalHead>
                        <iframe
                            src="https://www.youtube.com/embed/EQwpeWiL1aA?autoplay=1&mute=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </S.Modal>
                }
            </S.Section5>
            <S.Section6>
                <div>
                    <h2>Websites that stand<br/> out start in Framer</h2>
                </div>
                <S.VideoSection>
                    <S.VideoBox style={{ gridColumn: '1 / 2' }}>
                        <S.Example onMouseEnter={()=>setIsHover([true, false, false, false, false, false])} color={"#1400ff"} >
                            {isHover[0] &&<S.Dark />}
                            <video autoPlay muted width={'100%'} height={'100%'} src={'https://framerusercontent.com/assets/7pjjHThDJ0d7FSLOtDrTA4pRXEc.mp4'} />
                        </S.Example>
                        <S.Example onMouseEnter={()=>setIsHover([false, true, false, false, false, false])} color={"#ff82ff"}>
                            {isHover[1] && <S.Dark />}
                            <video width={'100%'} height={'100%'} muted autoPlay src={'https://framerusercontent.com/assets/qg3ySEAIvRVlkcoI94zHjE57Rk.mp4'} />
                        </S.Example>
                        <S.Example onMouseEnter={()=>setIsHover([false, false, true, false, false, false])} color={"#00adc1"}>
                            {isHover[2] && <S.Dark />}
                            <video width={'100%'} height={'100%'} muted autoPlay src={'https://framerusercontent.com/assets/Cw4grH0hI3nRYQLiC53MUuRL0.mp4'} />
                        </S.Example>
                    </S.VideoBox>
                    <S.VideoBox style={{ gridColumn: '2 / 3' }}>
                        <S.Example onMouseEnter={()=>setIsHover([false, false, false, true, false, false])} color={'#ff0000'}>
                            {isHover[3] && <S.Dark />}
                            <video height={'100%'} src={'https://framerusercontent.com/assets/uqb7Jrt9Ipm0RSjVjEVD8boQ5s.mp4'} autoPlay muted width={'100%'} />
                        </S.Example>
                    </S.VideoBox>
                    <S.VideoBox style={{ gridColumn: '1 / 3' }}>
                        <S.Example onMouseEnter={()=>setIsHover([false, false, false, false, true, false])} color={"#a8fc00"}>
                            {isHover[4] && <S.Dark />}
                            <video height={'100%'} src={'https://framerusercontent.com/assets/LzP7kaWtEH5iEWLmFk0w7mQ9oJw.mp4'} autoPlay muted width={'100%'} />
                        </S.Example>
                        <S.Example onMouseEnter={()=>setIsHover([false, false, false, false, false, true])} color={'#ef8400'}>
                            {isHover[5] && <S.Dark />}
                            <video height={'100%'} src={'https://framerusercontent.com/assets/6lIeCq70Ms7a34UU3ZOrrZrBSQg.mp4'} autoPlay muted width={'100%'} />
                        </S.Example>
                    </S.VideoBox>
                </S.VideoSection>
                <h4>View hundreds of sites &gt;</h4>
            </S.Section6>
        </S.Container>
    </Layout>
  )
}

export default Home