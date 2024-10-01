import styled, { createGlobalStyle } from "styled-components";

export const user = styled.p`
    font-weight: 600;
`
export const section = styled.section`
    width: 55%;
    margin: 0 auto;
    margin-top: 100px;
`
export const title = styled.h1`
    font-size: 50px;
    font-weight: 750;
`
export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        font-size: 100%;
    }
    html, body {
        margin: 0; /* 모든 기본 마진 제거 */
        padding: 0;
        display: block; /* 필요한 경우에 추가 */
        width: 100%; /* 필요시 추가 */
        height: 100%; /* 필요시 추가 */
    }
    input[type="text"] {
        border: none;
        padding: 20px 40px;
        outline: none;
    }
    a{
        color: black;
        text-decoration-line:none;
    }
    textarea {
        resize: none;
    }
`
export const data = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const userData = styled.div`
    display: flex;
    flex-direction: row;
    &>*{
        margin: 0 20px;
    }
`
export const follow = styled.button`
    padding: 7px 30px;
    border: 1px solid #12b886;
    color: #12b886;
    background-color: white;
    cursor: pointer;
    font-size: 14px;
    font-weight: 650;
    border-radius: 30px;
`
export const date = styled.p`
`
export const img = styled.img`
    margin-top: 40px;
    width: 100%;
    position: relative;
`
export const Box = styled.div`
    position: fixed;
    top: 350px;
    left: 200px;
    width: 50px;
    height: 140px;
    padding: 10px 5px;
    background-color:#adb5bd;
    border-radius:25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
`
export const heart = styled.div`
cursor: pointer;
background-color: #F8F9FA;
border-radius: 100px;
display: flex;
padding: 7px 0;
border: 1px solid #adb5bd;
justify-content: center;
    & > img{
        width: 30px;
    }
    &:hover{
        border: 1px solid black;
    }
`
export const share = styled.div`
background-color: #F8F9FA;
border-radius: 100px;
display: flex;
padding: 7px 0;
border: 1px solid #adb5bd;
justify-content: center;
    & > img{
        width: 30px;
    }
`
export const tagOut = styled.p`
    background-color: #F1F1F1;
    color: #12b886;
    width: max-content;
    border-radius:10px;
    margin-top: 10px;
    padding: 5px 10px;
`
export const tagBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    & > *{
        margin-right:10px;
        margin-bottom: 10px;
    }
`