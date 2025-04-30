import Layout from "../../layout";
import * as S from './style.ts'
import main from '../../assets/home/main.avif'
import Brand from '../../assets/home/brand.png'

function Home() {

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
            <S.Section3>
                <S.Brand src={Brand} alt={''} />

            </S.Section3>
        </S.Container>
    </Layout>
  )
}

export default Home