import styled from "styled-components";

export const ModalNewQuizContainer = styled.div`
    display: flex;
    position: relative;
    width: 475px;
    height: 555px;
    background-color: white;
    box-shadow: 0px 1px 2px #6C6CBB;
    border-radius: 4px;    
`

export const ModalNewQuizContent = styled.div`
    display: flex;

    flex-direction: column;
    align-items: center;
    width: calc(100% - 164px);
    height: calc(100% - 100px);
    margin: 50px 82px;
`

export const ModalNewQuizTextQuestion = styled.p`
    font-weight: 700;
    font-size: 20px;
    color: #6F7172;
    white-space: normal;
    text-align: center;
`
export const ModalNewQuizButton = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    width: calc(100% - 18px);
    border: 1px solid #4B4B87;
    border-radius: 4px;
    height: 40px;
    padding-left: 9px;
    padding-right: 9px;
`


export const ModalNewQuizButtonText = styled.p`
    font-weight: 700;
    font-size: 14px;
    color: #4B4B87;
    margin-left: 9px;

`

export const ModalNewQuizTextDescription = styled.p`
    font-weight: 500;
    font-size: 12px;
    color: #6F7172;
    white-space: normal;
    text-align: center;
`
