import logoSrc from '../assets/logo.png'
import alamSrc from '../assets/alarm.svg'
import searchSrc from '../assets/search.svg'
import BottomSrc from '../assets/BottomArrow.svg'
import styled from "styled-components";

function Headers(){
    return(
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
    )
             

}
export default Headers;


const Header = styled.header`
background-color: #F8F9FA;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-top: 20px;
`
const Logo = styled.img`
    width: 80px;
    height: 35px;
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