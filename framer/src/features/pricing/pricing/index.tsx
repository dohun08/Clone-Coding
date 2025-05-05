import * as S from "./style.ts";
import Check from "../../../assets/pricing/check.svg";
import {useEffect, useState} from "react";

export default function PricingBox(){
    const [shouldRender, setShouldRender] = useState(true);
    const [stop, setStop] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 2890){
                setStop(true)
            }
            else {
                setStop(false)
            }
            if( window.scrollY > 280){
                setShouldRender(false)
            }else{
                setShouldRender(true)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <>
            <S.UnBox isBlock={!shouldRender} />
            <S.PricingBox isStop={stop} isBlock={shouldRender}>
                <S.Pricing >
                    <S.PricingHead>
                        <div>
                            <h2>Launch</h2>
                            <S.Extra>POPULAR</S.Extra>
                        </div>
                        <p>BILLIED YEARLY</p>
                    </S.PricingHead>
                    <S.PricingContent>
                        <p>Launch your business
                            for&nbsp;
                            <span>₩75,000</span>&nbsp;
                            /month</p>
                    </S.PricingContent>
                    <S.PricingUl isBlock={shouldRender}>
                        <li>
                            <img src={Check} alt={'check'} />
                            15,000 pages
                        </li>
                        <li>
                            <img src={Check} alt={'check'} />
                            200 GB bandwidth
                        </li>
                        <li>
                            <img src={Check} alt={'check'} />
                            20 CMS collections
                        </li>

                    </S.PricingUl>
                    <S.PricingButton>Get started</S.PricingButton>
                </S.Pricing>
                <S.Pricing>
                    <S.PricingHead>
                        <div>
                            <h2>Scale</h2>
                        </div>
                        <p>BILLIED YEARLY</p>
                    </S.PricingHead>
                    <S.PricingContent>
                        <p>Scale your business
                            for&nbsp;
                            <span>₩200,000</span>&nbsp;
                            /month</p>
                    </S.PricingContent>
                    <S.PricingUl isBlock={shouldRender}>
                        <li>
                            <img src={Check} alt={'check'} />
                            30,000 pages
                        </li>
                        <li>
                            <img src={Check} alt={'check'} />
                            500 GB bandwidth
                        </li>
                        <li>
                            <img src={Check} alt={'check'} />
                            30 CMS collections
                        </li>

                    </S.PricingUl>
                    <S.PricingButton>Get started</S.PricingButton>
                </S.Pricing>
                <S.Pricing>
                    <S.PricingHead>
                        <div>
                            <h2>Launch</h2>
                        </div>
                        <p>BILLIED YEARLY</p>
                    </S.PricingHead>
                    <S.PricingContent>
                        <p>Launch your business
                            for&nbsp;
                            <span>₩75,000</span>&nbsp;
                            /month</p>
                    </S.PricingContent>
                    <S.PricingUl isBlock={shouldRender}>
                        <li>
                            <img src={Check} alt={'check'} />
                            15,000 pages
                        </li>
                        <li>
                            <img src={Check} alt={'check'} />
                            200 GB bandwidth
                        </li>
                        <li>
                            <img src={Check} alt={'check'} />
                            20 CMS collections
                        </li>

                    </S.PricingUl>
                    <S.PricingButton>Get started</S.PricingButton>
                </S.Pricing>
            </S.PricingBox>
        </>
    );
}