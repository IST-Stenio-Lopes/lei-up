import styled from "styled-components";

interface Iactive{
    isNewContract?: boolean
}


export const DashBoardOptionContainer = styled.div<Iactive>`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    background-color: ${(e: Iactive) => e.isNewContract? '#4B4B87' : 'transparent'};
    transition: 0.3s;
    border: ${(e: Iactive) => e.isNewContract? 'none' : '1px solid #938F99'};
    :hover{
        background-color: ${(e: Iactive) => e.isNewContract? '' : '#E2D6FF'};
    }
`
export const DashBoardOptionText = styled.p<Iactive>`
    color: ${(e: Iactive) => e.isNewContract? '#FFF' : '#878A8C'};
    margin-left: 23px;
`

export const DashBoardOptionIconContainer = styled.div<Iactive>`
    display: flex;
    align-items: center;
    position: absolute;
    right: 12px;
`