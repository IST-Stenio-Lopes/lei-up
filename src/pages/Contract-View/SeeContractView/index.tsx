import * as Styled from './style'



export const SeeContractView: React.FC = () => {


    return(
        <Styled.SeeContractViewContainer>

            <Styled.SeeContractViewInformationsColumn flex={2}>
                <Styled.SeeContractViewInformationsDescription>
                    Nome da empresa: <b>Apple</b>
                </Styled.SeeContractViewInformationsDescription>

                <Styled.SeeContractViewInformationsDescription>
                    Tipo de contrato: <b>Investidor</b>
                </Styled.SeeContractViewInformationsDescription>

            </Styled.SeeContractViewInformationsColumn>

            <Styled.SeeContractViewInformationsColumn flex={1}>

            <Styled.SeeContractViewInformationsDescription>
                    Conclusão: <b>03/05/2022</b>
                </Styled.SeeContractViewInformationsDescription>

                <Styled.SeeContractViewInformationsDescription>
                    Data de revisão: <b>06/05/2022</b>
                </Styled.SeeContractViewInformationsDescription>
                
            </Styled.SeeContractViewInformationsColumn>
        </Styled.SeeContractViewContainer>
    )
}


