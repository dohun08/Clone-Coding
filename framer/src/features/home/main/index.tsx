import * as S from "../../../pages/home/style.ts";

export default function Main(){
    return(
        <S.Section>
            <S.HeadBox>
                <S.HeadText duration={0.8}>Just</S.HeadText>
                <S.HeadText duration={0.9}>publish</S.HeadText>
                <S.HeadText duration={1.0}>it</S.HeadText>
                <S.HeadText duration={1.1}>with</S.HeadText>
                <S.HeadText duration={1.2}>Framer</S.HeadText>
            </S.HeadBox>
            <S.SubTextBox>
                <S.SubText duration={1.5}>The</S.SubText>
                <S.SubText duration={1.6}>website</S.SubText>
                <S.SubText duration={1.7}>builder</S.SubText>
                <S.SubText duration={1.8}>loved</S.SubText>
                <S.SubText duration={1.9}>by</S.SubText>
                <S.SubText duration={2.0}>designers.</S.SubText>
            </S.SubTextBox>
            <S.ButtonBox duration = {2.2}>
                <button>Start for free</button>
                <button>Watch video</button>
            </S.ButtonBox>
        </S.Section>
    )
}

