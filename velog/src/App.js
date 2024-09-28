import styled, { createGlobalStyle } from "styled-components";
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
                <MainSection>
                    {undata.length >0 ?  data.map((item) => (
                    <Box 
                        k={item.id}
                        img={item.img_file}
                        title={item.title} 
                        description={item.description}
                        date={item.date}
                        name={item.user_name}
                        like={item.like}
                    />
                    )) :null}
                    {undata.map((_, index) => (
                    <UnBox key={index}></UnBox> 
                    ))}
                </MainSection>
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
    padding: 35px 0;
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
