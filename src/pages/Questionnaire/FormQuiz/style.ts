import styled from "styled-components";




export const QuizContainer = styled.div`
width: 475px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const ButtonsQuizContainer = styled.div`
    display: flex;
    flex-direction: flex;
    width: 100%;
    gap: 16px;
    user-select: none;
`

export const ButtonBackQuizContainer = styled.div`
    flex: 1;
    height: 46px;
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #4B4B87;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #4B4B87;
`

export const ButtonNextQuizContainer = styled.div`
    flex: 1;
    height: 46px;
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    background-color: #4B4B87;
    border-radius: 4px;
`