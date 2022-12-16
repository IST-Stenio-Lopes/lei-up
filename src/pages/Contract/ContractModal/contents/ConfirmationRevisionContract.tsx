import { CheckCircle } from 'phosphor-react';

import * as Styled from './styles';

interface IconfirmationRevisionContract{
    close: () => void
}


export const ConfirmationRevisionContract: React.FC<IconfirmationRevisionContract> = ({close}) => {




    return(
        <Styled.ConfirmationRevisionContent onClick={close}>
        <CheckCircle 
                color={'#27AE60'}
                width={89}
                height={89}
            />
            <Styled.ContractModalText>
                A sua nova solicitação foi realizada!
            </Styled.ContractModalText>

            <Styled.ContractModalButtonsContainer>
                <Styled.ContractModalButton type='confirm' onClick={close}>
                    Ciente
                </Styled.ContractModalButton>
            </Styled.ContractModalButtonsContainer>
        </Styled.ConfirmationRevisionContent>
            
           



    )
}