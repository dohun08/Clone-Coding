import styled, { createGlobalStyle } from "styled-components";
import logoSrc from './assets/logo.png'
import alamSrc from './assets/alarm.svg'
import searchSrc from './assets/search.svg'
import BottomSrc from './assets/BottomArrow.svg'
import TrandingSrc from './assets/tranding.svg'
import NewSrc from './assets/Clock.svg'
import Peed from './assets/wifi.svg'
import ThreeCicleSrc from './assets/threeCircle.svg'
import TrandingSrcG from './assets/trandingG.svg'
import NewSrcG from './assets/ClockG.svg'
import PeedG from './assets/wifiG.svg'
import Box from './components/Box'
import React, { useEffect, useState } from 'react';
function App() {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const handleTrandingClick = (index) => {
        setActiveIndex(index);
    };
    const trandingItems = [
        { src: TrandingSrc, src2:TrandingSrcG, label: '트렌딩' },
        { src: NewSrc, src2:NewSrcG, label: '최신' },
        { src: Peed, src2:PeedG, label: '피드' }
    ];
    const [data, setData] = useState([])
    const [undata, setUnData] = useState([""])
    const getData = async () => {
        try {
          const response = await fetch('http://localhost:3001/box');
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    const unbox = ()=>{
        setUnData(Array( 3 - (data.length%3)%3).fill(''));
        
    }
      useEffect(() => {
        getData();
        if(data.length > 0){
            unbox()
        }

      }, []); 
  return (
      <Body>
          <GlobalStyle />
          <Container>
              <Header>
                  <Logo src={logoSrc} alt={"logo"}/>
                  <Info>
                    <Alarm href={"https://velog.io/notifications"}>
                        <IconImg src={alamSrc} alt={"alam"} />
                    </Alarm>
                      <Alarm href={"https://velog.io/search"}>
                          <IconImg src={searchSrc} alt={"search"} />
                      </Alarm>
                      <NewText>
                            새 글 작성
                      </NewText>
                      <ProfillBox>
                          <Profill />
                          <BottomArrow src={BottomSrc} alt={"아래 화살표"} />
                      </ProfillBox>

                  </Info>
              </Header>
              <MainBar>
                        <Nav float = {false}>
                            {trandingItems.map((item, index) => (
                                <Tranding 
                                    key={index} 
                                    borderBottom={activeIndex === index} 
                                    onClick={() => handleTrandingClick(index)}
                                >
                                    <img src={activeIndex===index ? item.src : item.src2} alt={item.label} />
                                    <p>{item.label}</p>
                                </Tranding>
                            ))}
                        </Nav>
                        <Nav float = {true}>

                            <ThreeCicle>
                                <img src={ThreeCicleSrc} alt="점세개" />
                            </ThreeCicle>
                        </Nav>
                 </MainBar>
            <Main>
            <Main>
                <MainSection>
                    {undata.length >0 ?  data.map((item) => (
                    <Box 
                        key={item.id}
                        img={item.img_file}
                        title={item.title} 
                        description={item.description}
                        date={item.date}
                        name={item.user_name}
                    />
                    )) :null}
                    {undata.map((_, index) => (
                    <UnBox key={index}></UnBox> 
                    ))}
                </MainSection>
                </Main>
            </Main>
          </Container>
      </Body>

  );
}

export default App;
const UnBox = styled.div`
    width: 320px;
    height: 370px;
`
const MainSection = styled.section`
    width: 66rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

`
const ThreeCicle = styled.div`
    width: 1.875rem;
    display: flex;
    & > img{
        width: 15%;
        cursor: pointer;
    }
`
const Tranding = styled.div.withConfig({
    shouldForwardProp: (prop) => !['borderBottom'].includes(prop),
  })`
      width: 500px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      border-bottom: ${(props) => (props.borderBottom ? "2px solid black" : "2px solid transparent")}; 
      justify-content: center;
      transition: border-bottom 0.3s ease; 
  
      & > p {
          color: ${(props) => (props.borderBottom ? "black" : "gray")};
          margin-left: 5px;
          font-size: 18px;
          font-weight: 700;
          transition: color 0.3s ease; 
          cursor: pointer;
      }
      
      & > img {
          cursor: pointer;
      }
  `;

const Main = styled.main`
    width:100%;
`
const Nav = styled.nav.withConfig({
    shouldForwardProp: (prop) => !['float'].includes(prop),
})`
    width: 17.5rem;
    height: 40px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: ${(props) =>(props.float ? "end" : "space-between")};
`;
const MainBar = styled.div`
    width:100%;
    display:flex;
    flex-flow:row nowrap;
    justify-content: space-between;
    margin: 30px 0;
`
const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-size: 100%;
    }
    a{
        color: black;
        text-decoration-line: none;
    }
    button{cursor: pointer}
`;
const Body = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #F8F9FA;
`
const Container = styled.div`
    width: 75vw;
    margin: 0 auto;
`;
const Header = styled.header`
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-top: 20px;
`
const Logo = styled.img`
    width: 10%;
`
const Info = styled.div`
    width: 28%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
`
const Alarm = styled.a`
    padding: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    cursor: pointer;

    &:hover {
        background-color: #e4e4e4;
    }
`
const IconImg = styled.img `
    width: 100%;
`
const NewText = styled.div`
    width: 35%;
    border-radius: 30px;
    cursor: pointer;
    background-color: #F8F9FA;
    color: black;
    border: 1px solid black;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    font-weight: 700;
    &:hover{
        background-color: black;
        color: white;
    }
`
const ProfillBox = styled.div`
    width: 20%;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    justify-content: space-around;
`
const Profill = styled.img`
    padding: 30%;
    border-radius: 100px;
    background-color: black;
`
const BottomArrow = styled.img`
    width: 20%;
    
    
`