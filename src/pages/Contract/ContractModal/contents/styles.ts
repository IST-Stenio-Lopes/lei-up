import styled from "styled-components";

interface IbuttonType{
    type: 'cancel' | 'confirm';
}

export const ContractModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 70px);
    height: calc(100% - 90px);
    margin: 45px 35px;

`

export const ConfirmationRevisionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 70px);
    height: calc(100% - 112px);
    margin: 64px 35px 48px 35px;
`


export const ContractModalText = styled.p`
    font-weight: 700;
    font-size: 20px;
    margin-top: 14px;
    width: calc(100% - 90px);
    color: #6F7172;
    white-space: normal;
    text-align: center;
`

export const ContractModalButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 2px;

`
export const ContractModalButton = styled.div<IbuttonType>`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 180px;
    max-width: 180px;
    height: 46px;
    border-radius: 4px;
    background-color: ${(e: IbuttonType) => e.type === 'cancel'? 'white' : '#4B4B87'};
    color: ${(e: IbuttonType) => e.type === 'cancel'? '#4B4B87' : 'white'};
    font-size: 14px;

`