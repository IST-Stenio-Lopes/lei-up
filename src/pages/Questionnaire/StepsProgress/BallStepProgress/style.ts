import styled from "styled-components";

interface IballStepContainer{
    active: boolean
}

export const BallStepContainer = styled.div<IballStepContainer>`
    display: flex;
    flex: 1;
    align-self: center;
    justify-content: center;
    align-items: center;
    max-width: ${(e: IballStepContainer) => e.active? 28 : 11}px;
    height: ${(e: IballStepContainer) => e.active? 28 : 11}px;
    border-radius: 50%;
    background-color: #4B4B87;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
`