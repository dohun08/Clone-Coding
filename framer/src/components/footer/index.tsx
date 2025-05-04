import {styled} from "styled-components";
import FooterImg from '../../assets/footer/footer.png'
import Logo from '../../assets/footer/logo.png'

export default function Footer() {
    return (
        <Container>
            <First>
                <FooterImgBox>
                    <img src={FooterImg} alt="" />
                    <Black />
                </FooterImgBox>
                <h1>Step into the future of design</h1>
                <p>Join thousands of designers and teams using Framer to turn ideas into high-performing websites, fast.</p>
                <button>Get started for free</button>
            </First>
            <FooterList>
                <li>
                    <p>Resources</p>
                    <p>Blog</p>
                    <p>Help Center</p>
                    <p>Guides</p>
                    <p>Customer Stories</p>
                    <p>Events</p>
                    <p>Newsletter</p>
                </li>
                <li>
                    <p>Company</p>
                    <p>Contact</p>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>Legal</p>
                    <p>Terms</p>
                    <p>Privacy Policy</p>
                </li>
                <li>
                    <p>Creators</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Code of Conduct</p>
                    <p>Cookie Policy</p>
                    <p>Accessibility</p>
                    <p>Brand Policy</p>
                </li>
                <li>
                    <p>Compare</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Code of Conduct</p>
                    <p>Cookie Policy</p>
                    <p>Accessibility</p>
                    <p>Brand Policy</p>
                </li>
                <li>
                    <p>Solutions</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Code of Conduct</p>
                    <p>Cookie Policy</p>
                    <p>Accessibility</p>
                    <p>Brand Policy</p>
                </li>
                <li>
                    <p>Socials</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Code of Conduct</p>
                    <p>Cookie Policy</p>
                    <p>Accessibility</p>
                    <p>Brand Policy</p>
                </li>
                <li>
                    <img width={30} src={Logo} alt={'Logo'} />
                </li>
            </FooterList>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 135vh;
    margin-bottom: 50px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    & > div > h1{
        font-size: 50px;
        font-weight: 600;
        width: 400px;
        text-align: center;
    }
    & > div > p{
        font-size: 20px;
        font-weight: 500;
        width: 300px;
        color: #8c8c8c;
        text-align: center;
    }
    & > div > button{
        transition: 0.2s;
        cursor: pointer;
        background-color: white;
        color: black;
        font-size: 14px;
        font-weight: 550;
        border: none;
        padding: 12px 20px;
        margin: 12px 0;
        border-radius: 30px;
    }
    & > div > button:hover{
        filter: brightness(0.5);
    }
`
const FooterList = styled.ul`
    width: 100%;
    padding: 8px 9%;
    font-size: 16px;
    background-color: black;
    display: flex;
    color: #8c8c8c;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    & > li{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 2px;
    }
    & > li > p:nth-child(1){
        color: white;
        cursor: default;
    }
    & > li > p{
        transition: 0.2s;
    }
    & > li > p:hover{
        cursor: pointer;
        color: white;
        
    }
`
const First = styled.div`
    width: 100%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const FooterImgBox = styled.div`
    position: relative;
    width: 40%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        z-index: 1;
    }
    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
                circle,
                rgba(0, 0, 0, 0) 20%,
                rgba(0, 0, 0, 0.9) 100%
        );
        z-index: 2;
        pointer-events: none;
    }
`;

const Black = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0) 20%,
            rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 2;
    pointer-events: none;
`;