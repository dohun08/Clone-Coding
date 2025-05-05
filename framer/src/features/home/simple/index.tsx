import * as S from "./style.ts";
import SimpleLogo from "../../../assets/home/simpleLogo.png";
import X from "../../../assets/home/x.png";
import useModal from "../../../store/header.ts";
import {useEffect, useRef} from "react";

export default function Simple(){
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

    const {isModal, setStore} = useModal()
    return(
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
                    <button onClick={()=>setStore(true)}>Watch introduction</button>
                </S.SimpleButtonBox>
            </S.SimpleBox>
            {isModal &&
                <S.Modal>
                    <S.ModalHead onClick={()=>setStore(false)}>
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
    )
}