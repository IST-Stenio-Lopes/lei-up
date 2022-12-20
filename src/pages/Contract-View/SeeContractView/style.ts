import styled from "styled-components";


interface Iflex{
    flex: number
}

export const SeeContractViewContainer = styled.div`
    margin-top: 63px;
    display: flex;
    flex-direction: row;
`
export const SeeContractViewInformationsColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: ${(e: Iflex) => e.flex};
`

export const SeeContractViewInformationsDescription = styled.p`
    font-size: 16px;
    font-weight: 700;

    b{
        font-size: 14px;
        font-weight: 500;
    }
`