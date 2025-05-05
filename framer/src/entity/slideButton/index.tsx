import * as S from './style.ts';
import { MouseEvent } from 'react';

const slideLabels = ["Design", "Animations", "Collaborate", "CMS", "SEO", "Publish"];

export default ({
                    index,
                    nextSlide,
                    prevSlide,
                }: {
    index: number;
    nextSlide: (event: MouseEvent<HTMLButtonElement>) => void;
    prevSlide: (event: MouseEvent<HTMLButtonElement>) => void;
}) => (
    <S.SlideButtonBox>
        <S.SlideNav position="center">
            {slideLabels.map((label) => (
                <button key={label} style={{ color: "black" }}>{label}</button>
            ))}
        </S.SlideNav>

        <S.SlideNav position="center">
            {slideLabels.map((label, i) => (
                <button key={label} style={{ color: index === i || index === i + slideLabels.length ? "white" : "#8c8c8c" }}>{label}</button>
            ))}
        </S.SlideNav>

        <S.SlideNav position="flex-end">
            <S.SlideButton onClick={prevSlide}>
                <img
                    width={30}
                    height={30}
                    src="https://framerusercontent.com/images/SzKYlP68BhaloDCrMKantxTmoCA.png"
                    alt="LeftArrow"
                />
            </S.SlideButton>
            <S.SlideButton onClick={nextSlide}>
                <img
                    width={30}
                    height={30}
                    src="https://framerusercontent.com/images/KSFWbTMQdDEmgaGOcFwdYRJ5SA.png"
                    alt="RightArrow"
                />
            </S.SlideButton>
        </S.SlideNav>
    </S.SlideButtonBox>
);