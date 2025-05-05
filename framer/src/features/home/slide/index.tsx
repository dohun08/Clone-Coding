import * as S from "./style.ts";
import SlideBox from "../../../entity/slidebox";
import SlideButtonBox from "../../../entity/slideButton";
import {JSX, useEffect, useState} from "react";
import {slide as SlideData} from "./data.tsx";
import {useThrottle} from "../../../hooks/useThrottle.ts";

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

export default function Slide(){

    const slide =SlideData
    const [index, setIndex] = useState(0);
    const [isAnimation, setIsAnimation] = useState(false);


    useEffect(() => {
        const interval = setInterval(()=>{
            if(index === 2){
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
            if(index === 6) setIndex(0);
            if(index === -1) setIndex(5);
        }, 600);
        console.log(index)
    }, [index]);

    const nextSlide = useThrottle(() => {
        if(index === 4) {
            setIsAnimation(true);
        }
        setIndex((prevIndex) => {
            return (prevIndex + 1) % slide.length;
        });
    }, 700);

    const prevSlide = useThrottle(() => {
        if(index === 1) {
            setIsAnimation(true);
        }
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
        return index===0 || index===5? 0 : 0.5
    }

    return(
        <>

            <S.SlideBox
            >
                <div
                    style={{
                        transition: `${animation()}s ease-in-out`,
                        display: "flex",
                        // transform : `translateX(-80vw)`,
                        transform: `translateX(${-(index * 85)-(80+(2*index))}vw)`,
                    }}
                >
                    {slide.map((item) => (
                        <SlideBox key={item.id} id={item.id} span={item.span} h3={item.h3} learn={item.learn} webHead={item.webHead} video={item.video} webHeadLeft={item.webHeadLeft} webHeadRight={item.webHeadRight} />
                    ))}
                </div>
            </S.SlideBox>
            <SlideButtonBox prevSlide={prevSlide} nextSlide={nextSlide} index={index} />
        </>
    )
}