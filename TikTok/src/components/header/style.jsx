import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    border-bottom: 1px solid rgb(80, 80, 80);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`
export const searchBox = styled.div`
    width: 480px;
    background: #505050;
    border-radius: 100px;
    display: flex;
    align-items: center;
    border: 1px solid #505050;
    &:hover{
        border: 1px solid #f1f1f1;
    }
`
export const search = styled.input`
    width: 90%;
    outline: none;
    border: none;
    background: none;
    padding: 12px 15px;
    font-size: 16px;

    &::placeholder {
        color: #f1f1f1;
    }

    color: #f1f1f1;
`
export const info = styled.div`
    display: flex;
    align-items: center;
    & > *{
        margin-right: 10px;
    }
`
export const Btn = styled.button`
    border: none;
    background: #2c2c2c;
    cursor: pointer;
    padding: 10px 30px;
    color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-size: 16px;
    &:hover {
        background: #1b1b1b;
    }
`
export const Login = styled.button`
    border: none;
    background: #e63838;
    cursor: pointer;
    padding: 10px 30px;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    &:hover {
        background: #d32f2f;
    }
`