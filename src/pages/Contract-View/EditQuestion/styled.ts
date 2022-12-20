
import styled from "styled-components";


export const EditQuestionButtonContainer = styled.div`
    cursor: pointer;
    position: absolute;
    top: calc(50% - 12px);
    right: 45px;
    border: 1px solid #878A8C;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const EditQuestionContainer = styled.div`
    width: calc(100% - 145px);
    position: relative;
    padding: 24px 100px 24px 45px;
    border: 1px solid #1C1C42;
    border-radius: 4px;
    user-select: none;
    margin-top: 12px;
    transition: 0.1s;


    :hover{
        width: calc(100% - 147px);
        border: 2px solid #1C1C42;
        background-color: #E2D6FF;

        ${EditQuestionButtonContainer}{
            background-color: #1C1C42;

            * {
                stroke: white;
            }
        }
    }
`

export const EditQuestionAsk = styled.p`
    font-weight: 700;
    font-size: 16px;
    color: #4B4B87;
`

export const EditQuestionAnswer = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #878A8C;
`

