import styled from "styled-components";

interface Iactive{
    active: boolean
}

export const LateralMenuOptionContainer = styled.div<Iactive>`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 46px;
    border-radius: 4px;
    padding-left: 7px;
    padding-right: 7px;
    width: calc(100% - 50px);
    align-self: center;
    background-color: ${(e: Iactive) => e.active? '#4B4B87' : '#ffffff'};



`

export const LateralMenuOptionTitle = styled.p<Iactive>`
    font-weight: 700;
    font-size: 14px;
    color: ${(e: Iactive) => e.active? '#FFF' : '#878A8C'};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 13px;

`