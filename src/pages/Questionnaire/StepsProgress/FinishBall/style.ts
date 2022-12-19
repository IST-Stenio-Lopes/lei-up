import styled from "styled-components";

interface IballStepContainer{
    active: boolean
}

export const FinishBallStepContainer = styled.div<IballStepContainer>`
    display: flex;
    flex: 1;
    align-self: center;
    justify-content: center;
    align-items: center;
    max-width: ${(e: IballStepContainer) => e.active? 35 : 11}px;
    height: ${(e: IballStepContainer) => e.active? 35 : 11}px;
    border-radius: 50%;
    background-color: ${(e: IballStepContainer) => e.active? '#27AE60' : '#4B4B87'};
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
`