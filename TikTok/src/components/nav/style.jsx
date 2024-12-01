import styled from "styled-components";

export const Container = styled.div`
    width: 15vw;
    display: flex;
    flex-flow: wrap column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`
export const section = styled.section`
    width: 100%;
    padding: 10px 15px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    font-size: 18px;
    font-weight: 700;
    transition: 0.2s;
    & > p {
        margin-top: 5px;
        color: ${(props) => (props.$isChoice ? "#e63838" : "white")};
        margin-left: 5px;
    }

    &:hover {
        cursor: pointer;
        background: #1e1e1e;
    }
`