import Header from "../components/header";
import Footer from "../components/footer";
import {styled} from "styled-components";
import * as React from "react";


export default function Layout({children}: {children: React.ReactNode}) {
    return(
        <Container>
            <Header />
            {children}
            <Footer />
        </Container>
    )
}

const Container = styled.main`
    width: 100vw;
    
`