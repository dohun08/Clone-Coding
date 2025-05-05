import Layout from "../../layout";
import * as S from './style.ts'
import InfiniteSlide from '../../features/home/infiniteSlide';
import Templates from "../../features/home/templates";
import Brands from "../../features/home/brand";
import Simple from "../../features/home/simple";
import Slide from "../../features/home/slide";
import Customer from "../../features/home/customer";
import Main from "../../features/home/main";
import MainImg from "../../features/home/mainImg";


function Home() {
  return (
    <Layout>
        <S.Container>
           <Main />
           <MainImg />
            <S.UnBox />
            <Customer />
            <Slide />
            <Simple />
           <Brands />
           <Templates />
           <InfiniteSlide />
        </S.Container>
    </Layout>
  )
}

export default Home