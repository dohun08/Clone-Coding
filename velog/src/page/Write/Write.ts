import styled, { createGlobalStyle } from "styled-components";

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
export const container = styled.div`
    width: 100%;
    background-color: #F8F9FA;
    display: flex;
    flex-direction: row;
`
export const form = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    background-color: white;
    height: 100vh;
`
export const tag = styled.input`
    margin-top:10px;
    padding: 20px 0 !important;
    width: 150px;
    font-size: 16px;
`
export const title = styled.input`
    font-size: 40px;
    color: black;
    font-weight: 700;
`
export const bar = styled.div`
    width: 70px;
    margin: 0 40px;
    background-color: black;
    height: 5px;
`
export const buttonBox = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    padding: 10px  40px;
    justify-content: space-around;
    
`
export const content = styled.textarea`
    font-size: 18px;
    border: none;
    padding: 20px 40px;
    outline: none;
    height: 500px;
    &::placeholder{
        font-style: italic;
    }
`
export const footer = styled.footer`
    position: absolute;
    bottom: 0;
    width: 48%;
    padding: 15px 1%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`
export const exit = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 5px;
    &:hover{
        background-color: #F4F4F4;
    }
    &>img{
        width:25px;
    }
`
export const submit = styled.button`
    background-color: #12b886;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: #13d99d;
    }
`
export const formOut = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    background-color: #F8F9FA;
    height: 100vh;
`
export const contentBox = styled.div`
    padding: 60px;
    height: 80vh;
    overflow: auto;
`
export const titleOut = styled.h1`
    font-size: 40px;
    color: black;
    font-weight: 700;
    padding-bottom: 40px;
`
export const contentOut = styled.p`
    font-size: 18px;
    outline: none;
`
export const tagOut = styled.p`
    background-color: #F8F9FA;
    color: #12b886;
    width: max-content;
    padding: 5px 15px;
    border-radius:10px;
    margin-top: 10px;
`
export const tagBox = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    align-content: center;
    justify-content: start;
    &>*{
        margin-right: 10px;
    }
`